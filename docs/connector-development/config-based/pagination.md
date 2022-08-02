# HTTP Requester

Given a page size and a pagination strategy, the `LimitPaginator` will point to pages of results for as long as its strategy returns a `next_page_token`.

Iterating over pages of result is different from iterating over stream slices.
Stream slices have semantic value, for instance, a Datetime stream slice defines data for a specific date range. 2 stream slices will have data for different date ranges.
Conversely, pages don't have semantic value. More pages simply means that more records are to be read, without specifying any meaningful difference between the records of the first and later pages.

The paginator is defined by

- page size: the number of records to fetch in a single request
- limit_option: how to specify the page size in the outgoing HTTP request
- pagination_strategy: how to compute the next page to fetch
- page_token_option: how to specify the next page to fetch in the outgoing HTTP request

3 pagination strategies are supported

1. Page increment
2. Offset increment
3. Cursor-based

## Pagination Strategies

### Page increment

When using the `PageIncrement` strategy, the page number will be set as part of the `page_token_option`.

The following paginator example will fetch 5 records per page, and specify the page number as a request_parameter:

```
paginator:
  type: "LimitPaginator"
  page_size: 5
  limit_option:
    option_type: request_parameter
    field_name: page_size
  pagination_strategy:
    type: "PageIncrement"
  page_token:
    option_type: "request_parameter"
    field_name: "page"
```

### Offset increment

When using the `OffsetIncrement` strategy, the number of records read will be set as part of the `page_token_option`.

The following paginator example will fetch 5 records per page, and specify the offset as a request_parameter:

```
paginator:
  type: "LimitPaginator"
  page_size: 5
  limit_option:
    option_type: request_parameter
    field_name: page_size
  pagination_strategy:
    type: "PageIncrement"
  page_token:
    field_name: "page"
    inject_into: "request_parameter"

```

### Cursor

The `CursorPaginationStrategy` outputs a token by evaluating its `cursor_value` string with the following parameters:

- `response`: decoded response
- `headers`: HTTP headers on the response
- `last_records`: List of records selected from the last response

This cursor value can be used to request the next page of record.

In this example, the next page of record is defined by setting the `from` request parameter to the id of the last record read:

```
paginator:
  type: "LimitPaginator"
  <...>
  pagination_strategy:
    type: "CursorPaginationStrategy"
    cursor_value: "{{ last_records[-1].id }}"
  page_token:
    field_name: "from"
    inject_into: "request_parameter"
```

Some APIs directly point to the URL of the next page to fetch. In this example, the URL of the next page is extracted from the response headers:

```
paginator:
  type: "LimitPaginator"
  <...>
  pagination_strategy:
    type: "CursorPaginationStrategy"
    cursor_value: "{{ headers.urls.next }}"
  page_token:
    inject_into: "path"
```