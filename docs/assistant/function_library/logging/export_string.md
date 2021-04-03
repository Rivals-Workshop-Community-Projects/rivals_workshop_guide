# `export_string`

`export_string(text, ?description)` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/logging.gml)

Create a window with the given text, allowing you to copy-paste it for your own use. May be useful for debugging.

As a safety, `export_string` will only run once every 5 seconds. This prevents accidental soft locks when used in an
update script, by giving you a 5-second window to navigate back to Rivals and pause.

```gml
export_string(print_log)
```

\
**Parameters:**

- `text`: [string](/workshop_guide/programming/learning_path/data_types.md#strings-text)  \
  The text to export.
- `description`: [string](/workshop_guide/programming/learning_path/data_types.md#strings-text),
  default `"Text export:"`  \
  The title to display at the top of the export window.

::: see_also

- [export_string_unsafe](export_string_unsafe.md): Export a string without a once-per-5-second limit.

:::
