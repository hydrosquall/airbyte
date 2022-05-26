/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.source.postgres;

import static io.airbyte.integrations.base.errors.utils.ConnectionErrorType.INCORRECT_ACCESS_PERMISSION;
import static io.airbyte.integrations.base.errors.utils.ConnectionErrorType.INCORRECT_DB_NAME;
import static io.airbyte.integrations.base.errors.utils.ConnectionErrorType.INCORRECT_HOST_OR_PORT;
import static io.airbyte.integrations.base.errors.utils.ConnectionErrorType.INCORRECT_SCHEMA_NAME;
import static io.airbyte.integrations.base.errors.utils.ConnectionErrorType.INCORRECT_USERNAME_OR_PASSWORD;
import static io.airbyte.integrations.base.errors.utils.ConnectionErrorType.INCORRECT_USERNAME_OR_PASSWORD_OR_DATABASE_OR_USER_ACCESS_DENIED;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.common.collect.ImmutableMap;
import io.airbyte.commons.io.IOs;
import io.airbyte.commons.json.Jsons;
import io.airbyte.commons.resources.MoreResources;
import io.airbyte.commons.string.Strings;
import io.airbyte.integrations.source.jdbc.AbstractJdbcSource;
import io.airbyte.integrations.source.jdbc.test.JdbcSourceAcceptanceTest;
import io.airbyte.protocol.models.AirbyteConnectionStatus;
import io.airbyte.protocol.models.ConnectorSpecification;
import io.airbyte.test.utils.PostgreSQLContainerHelper;
import java.sql.JDBCType;
import java.util.List;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.utility.MountableFile;

class PostgresJdbcSourceAcceptanceTest extends JdbcSourceAcceptanceTest {

  private static final String DATABASE = "new_db";
  protected static final String USERNAME_WITHOUT_PERMISSION = "new_user";
  protected static final String PASSWORD_WITHOUT_PERMISSION = "new_password";

  private static PostgreSQLContainer<?> PSQL_DB;

  private JsonNode config;

  @BeforeAll
  static void init() {
    PSQL_DB = new PostgreSQLContainer<>("postgres:13-alpine");
    PSQL_DB.start();
  }

  @BeforeEach
  public void setup() throws Exception {
    final String dbName = Strings.addRandomSuffix("db", "_", 10).toLowerCase();

    config = Jsons.jsonNode(ImmutableMap.builder()
        .put("host", PSQL_DB.getHost())
        .put("port", PSQL_DB.getFirstMappedPort())
        .put("database", dbName)
        .put("schemas", List.of(SCHEMA_NAME, SCHEMA_NAME2))
        .put("username", PSQL_DB.getUsername())
        .put("password", PSQL_DB.getPassword())
        .put("ssl", false)
        .build());

    final String initScriptName = "init_" + dbName.concat(".sql");
    final String tmpFilePath = IOs.writeFileToRandomTmpDir(initScriptName, "CREATE DATABASE " + dbName + ";");
    PostgreSQLContainerHelper.runSqlScript(MountableFile.forHostPath(tmpFilePath), PSQL_DB);

    super.setup();
  }

  @Override
  public boolean supportsSchemas() {
    return true;
  }

  @Override
  public AbstractJdbcSource<JDBCType> getJdbcSource() {
    return new PostgresSource();
  }

  @Override
  public JsonNode getConfig() {
    return config;
  }

  @Override
  public String getDriverClass() {
    return PostgresSource.DRIVER_CLASS;
  }

  @AfterAll
  static void cleanUp() {
    PSQL_DB.close();
  }

  @Test
  void testSpec() throws Exception {
    final ConnectorSpecification actual = source.spec();
    final ConnectorSpecification expected = Jsons.deserialize(MoreResources.readResource("spec.json"), ConnectorSpecification.class);

    assertEquals(expected, actual);
  }

  @Test
  void testCheckIncorrectPasswordFailure() throws Exception {
    ((ObjectNode) config).put("password", "fake");
    final AirbyteConnectionStatus actual = source.check(config);
    assertEquals(AirbyteConnectionStatus.Status.FAILED, actual.getStatus());
    assertEquals(INCORRECT_USERNAME_OR_PASSWORD.getValue(), actual.getMessage());
  }

  @Test
  public void testCheckIncorrectUsernameFailure() throws Exception {
      ((ObjectNode) config).put("username", "fake");
      final AirbyteConnectionStatus actual = source.check(config);
      assertEquals(AirbyteConnectionStatus.Status.FAILED, actual.getStatus());
      assertEquals(INCORRECT_USERNAME_OR_PASSWORD.getValue(), actual.getMessage());
  }

  @Test
  public void testCheckIncorrectHostFailure() throws Exception {
      ((ObjectNode) config).put("host", "localhost2");
      final AirbyteConnectionStatus actual = source.check(config);
      assertEquals(AirbyteConnectionStatus.Status.FAILED, actual.getStatus());
      assertEquals(INCORRECT_HOST_OR_PORT.getValue(), actual.getMessage());
  }

  @Test
  public void testCheckIncorrectPortFailure() throws Exception {
      ((ObjectNode) config).put("port", "30000");
      final AirbyteConnectionStatus actual = source.check(config);
      assertEquals(AirbyteConnectionStatus.Status.FAILED, actual.getStatus());
      assertEquals(INCORRECT_HOST_OR_PORT.getValue(),  actual.getMessage());
    }

  @Test
  public void testCheckIncorrectDataBaseFailure() throws Exception {
    ((ObjectNode) config).put("database", "wrongdatabase");
    final AirbyteConnectionStatus actual = source.check(config);
    assertEquals(AirbyteConnectionStatus.Status.FAILED, actual.getStatus());
    assertEquals(INCORRECT_DB_NAME.getValue(), actual.getMessage());
  }

  @Test
  public void testUserHasNoPermissionToDataBase() throws Exception {
    database.execute(connection -> connection.createStatement()
            .execute(String.format("create user %s with password '%s';", USERNAME_WITHOUT_PERMISSION, PASSWORD_WITHOUT_PERMISSION)));
    database.execute(connection -> connection.createStatement()
            .execute(String.format("create database %s;", DATABASE)));
    // deny access for database for all users from group public
    database.execute(connection -> connection.createStatement()
            .execute(String.format("revoke all on database %s from public;", DATABASE)));
    ((ObjectNode) config).put("username", USERNAME_WITHOUT_PERMISSION);
    ((ObjectNode) config).put("password", PASSWORD_WITHOUT_PERMISSION);
    ((ObjectNode) config).put("database", DATABASE);
    final AirbyteConnectionStatus actual = source.check(config);
    Assertions.assertEquals(AirbyteConnectionStatus.Status.FAILED, actual.getStatus());
    Assertions.assertEquals(INCORRECT_ACCESS_PERMISSION.getValue(), actual.getMessage());
  }
}