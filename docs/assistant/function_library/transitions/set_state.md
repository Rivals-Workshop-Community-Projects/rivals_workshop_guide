# `set_state`

`set_state(_new_state)` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/transitions.gml)

Transition to the given state and resets the state timer.

```gml
// Without Assistant
state = 2
state_timer = 0 // Don't forget
// With Assistant
set_state(2)
```

\
**Parameters:**
- `_new_state`: [int](/workshop_guide/programming/learning_path/data_types.md#integers)  \
  The state to transition to.

::: see_also

- [set_window](set_window.md): Transition to the given state and resets the window timer.

:::
