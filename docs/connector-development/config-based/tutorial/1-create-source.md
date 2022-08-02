# Step  1: Create the Source

Let's start by cloning the Airbyte repository

```
git clone git@github.com:airbytehq/airbyte.git
```

Airbyte provides a code generator which bootstraps the scaffolding for our connector.

```
cd airbyte-integrations/connector-templates/generator
./generate.sh
```

This will bring up an interactive helper application. Use the arrow keys to pick a template from the list. Select the `Configuration Based Source` template and then input the name of your connector. The application will create a new directory in `airbyte/airbyte-integrations/connectors/` with the name of your new connector.

```
Configuration Based Source
Source name: exchange-rates-tutorial
```

For this walkthrough, we'll refer to our source as `exchange-rates-tutorial`. The complete source code for this tutorial can be found here <FIXME: there should be a link to the complete tutorial?

## Next steps

Next, [we'll install dependencies required to run the connector](2-install-dependencies.md)