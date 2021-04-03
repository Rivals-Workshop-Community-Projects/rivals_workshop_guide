# `export_string_unsafe`

`export_string_unsafe(text, description)` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/logging.gml)

Create a window with the given text, allowing you to copy-paste it for your own use. May be useful for debugging.

::: warn

This function can create softlocks. Prefer [export_string](export_string.md).

:::


```gml
export_string_unsafe(print_log, "My Print Log")
```

\
**Parameters:**

- `text`: [string](/workshop_guide/programming/learning_path/data_types.md#strings-text)  \
  The text to export.
- `description`: [string](/workshop_guide/programming/learning_path/data_types.md#strings-text)  \
  The title to display at the top of the export window.

::: see_also

- [export_string](export_string.md): Export a string safely, with a once-per-5-second limit to prevent softlocks.

:::
