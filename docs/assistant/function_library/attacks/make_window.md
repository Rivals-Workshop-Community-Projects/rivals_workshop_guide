# `make_window`

`make_window(_attack_name, _index, (value_name, value)... )` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/attacks.gml)

Configure a window from a series of keys and values.

[comment]: <> ( TODO link to definition of window when its made )

```gml
// Without Assistant
set_window_value(AT_BAIR, 1, AG_WINDOW_TYPE, 1)
set_window_value(AT_BAIR, 1, AG_WINDOW_LENGTH, 6)

// With Assistant
make_window(AT_BAIR, 1,
    AG_WINDOW_TYPE, 1,
    AG_WINDOW_LENGTH, 6
)
```

\
**Parameters:**

- `_attack_name`: The [attack index](https://rivalsofaether.com/attack-indexes/) to be configured.
- `_index`: ([int](/docs/workshop_guide/programming/learning_path/data_types.md#integers)) the index of the window to
  configure.
- Any number of pairs of:
    - `value_name`:
      A [window attack grid index](https://rivalsofaether.com/attack-grid-indexes/#post-153:~:text=Window%20Data,These%20values%20only)
      to set.
    - `value`: The value to set to the paired window attack grid index.

::: see_also

- [make_attack](make_attack.md): Configure an attack.
- [make_hitbox](make_hitbox.md): Configure a hitbox.

:::


[comment]: <> (\ )

[comment]: <> (**Notes:**)

[comment]: <> (\ )

[comment]: <> (**Further Examples:**)