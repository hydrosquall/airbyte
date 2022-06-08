/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.metrics.lib;

/*
 * A generic metric client interface supporting basic metric emitting actions.
 */
public interface MetricClient {

  /**
   * Increment or decrement a counter.
   *
   * @param metric
   * @param val to record.
   * @param tags
   */
  void count(MetricsRegistry metric, long val, final String... tags);

  /**
   * Record the latest value for a gauge.
   *
   * @param metric
   * @param val to record.
   * @param tags
   */
  void gauge(MetricsRegistry metric, double val, final String... tags);

  /*
   * Accepts value on the metrics, and report the distribution of these values. Useful to analysis how
   * much time have elapsed, and percentile of a series of records.
   *
   * @param metric
   *
   * @param val to record.
   *
   * @param tags
   */
  void distribution(MetricsRegistry metric, double val, final String... tags);

  /*
   * Reset initialization. Can be used in a unit test to reset metric client state.
   */
  void shutdown();

}
