# Record selector

The record selector is responsible for translating an HTTP response into a list of records by extracting records from the response and optionally filtering
records based on a heuristic.

The current record selector implementation uses Jello to select record sfrom the json-decoded HTTP response.
More information on Jello can be found at https://github.com/kellyjonbrazil/jello

## Common recipes:

1. Selecting the whole json object can be done with `_`
2. Wrapping the whole json object in an array can be done with `[_]`
3. Inner fields can be selected by referring to it with the dot-notation: `_.data` will return the data field

## Filtering records

Records can be filtered by adding a record_filter to the selector.
The expression in the filter will be evaluated to a boolean returning true the record should be included.

In this example, all records with a `created_at` field greater than the stream slice's `start_time` will be filtered out:

```
selector:
  extractor:
    transform: "[_]"
  record_filter:
    condition: "{{ record.created_at < stream_slice.start_time }}"
```

## Transformations

Fields can be added or removed from records by adding `Transformation`s to a stream's definition.

### Adding fields

Fields can be added with the `AddFields` transformation.
This example adds a top-level field "field1" with a value "static_value"

```
stream:
  <...>
  transformations:
    - type: AddFields
      fields:
        - path: ["field1"]
          value: "static_value"
```

Fields can also be added in a nested object by writing the fields' path as a list.

Given a record of the following shape:

```
{
  "id": 0,
  "data":
  {
    "field0": "some_data"
  }
}
```

this definition will add a field in the "data" nested object:

```
stream:
  <...>
  transformations:
    - type: AddFields
      fields:
        - path: ["data", "field1"]
          value: "static_value"
```

resulting in the following record:

```
{
  "id": 0,
  "data":
  {
    "field0": "some_data",
    "field1": "static_value"
  }
}
```

### Removing fields

Fields can be removed from records with the `RemoveFields` transformation.

Given a record of the following shape:

```
{
  "path": 
  {
    "to":
    {
      "field1": "data_to_remove",
      "field2": "data_to_keep"
    }
  },
  "path2": "data_to_remove",
  "path3": "data_to_keep"
}
```

this definition will remove the 2 instances of "data_to_remove" which are found in "path2" and "path.to.field1":

```
the_stream:
  <...>
  transformations:
    - type: RemoveFields
      field_pointers:
        - ["path", "to", "field1"]
        - ["path2"]
```

resulting in the following record:

```
{
  "path": 
  {
    "to":
    {
      "field2": "data_to_keep"
    }
  },
  "path3": "data_to_keep"
}
```