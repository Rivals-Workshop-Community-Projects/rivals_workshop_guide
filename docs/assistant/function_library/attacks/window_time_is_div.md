# `window_time_is_div`

`window_time_is_div(modulo)` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/attacks.gml)

Check if the current `window_timer` is divisible by the `modulo` **and** the attack is not in hitpause.

```gml
// Without Assistant
// Forgetting `!hitpause` can cause hard to detect bugs.
if window_timer % modulo and !hitpause {
    sound_play(sound_get("airhorn"))
}
// With Assistant
if window_time_is_div(modulo) {
    sound_play(sound_get("airhorn"))
}
```

\
**Parameters:**

- `modulo`: ([int](/workshop_guide/programming/learning_path/data_types.md#integers)) The number to check divisibility
  for.

::: see_also

- [window_time_is](window_time_is.md): Check if the current frame equals a number.

:::