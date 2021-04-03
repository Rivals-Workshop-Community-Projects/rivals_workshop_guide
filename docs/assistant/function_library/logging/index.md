# Logging

[Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/logging.gml)

## Printing

- [`prints(value...)`](prints.md)  \
  Print each given value as text, separated by spaces.

## Text Export

- [`export_string(text, ?description)`](export_string.md)  \
  Create a window with the given text, allowing you to copy-paste it for your own use. Cannot run more than once per 5
  seconds.
- [`export_string_unsafe(text, description)`](export_string_unsafe.md)  \
  Create a window with the given text, allowing you to copy-paste it for your own use. May create softlocks when called
  in quick succession.