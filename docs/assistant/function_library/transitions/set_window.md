# `set_window`

`set_window(_new_window)` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/transitions.gml)

Transition to the given state and resets the window timer.

```gml
// Without Assistant
window = 3
window_timer = 0 # Don't forget
// With Assistant
set_window(3)
```

\
**Parameters:**

- `_new_window`: [int](/workshop_guide/programming/learning_path/data_types.md#integers)  \
  The window to transition to.

::: see_also

- [set_state](set_state.md): Transition to the given state and resets the state timer.

:::