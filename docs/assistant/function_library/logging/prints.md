# `prints`

`prints(value...)` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/logging.gml)

Print each given value as text, separated by spaces.

```gml
// Without Assistant
print("Time remaining: " + string(seconds_remaining) + " seconds")
// With Assistant
print("Time remaining:", seconds_remaining, "seconds")
```

\
**Parameters:**

- Any number of:
    - `value`: Any value to print. Will be converted to a string automatically.
