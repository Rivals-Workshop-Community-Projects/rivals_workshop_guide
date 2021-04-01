# `make_hitbox`

`make_hitbox(_attack_name, _index, (value_name, value)... )` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/attacks.gml)

Configure a hitbox from a series of keys and values.

```gml
// Without Assistant
set_hitbox_value(AT_BAIR, 1, HG_PARENT_HITBOX, 1)
set_hitbox_value(AT_BAIR, 1, HG_HITBOX_TYPE, 1)

// With Assistant
make_hitbox(AT_BAIR, 1,
    HG_PARENT_HITBOX, 1,
    HG_HITBOX_TYPE, 1
)
```

\
**Parameters:**

- `_attack_name`: The [attack index](https://rivalsofaether.com/attack-indexes/) to be configured.
- `_index`: ([int](/docs/workshop_guide/programming/learning_path/data_types.md#integers)) the index of the hitbox to
  configure.
- Any number of pairs of:
    - `value_name`: An [hitbox grid index](https://rivalsofaether.com/hitbox-grid-indexes/) to set.
    - `value`: The value to set to the paired hitbox grid index.

::: see_also

- [make_attack](make_attack.md): Configure an attack.
- [make_window](make_window.md): Configure a window.

:::


[comment]: <> (\ )

[comment]: <> (**Notes:**)

[comment]: <> (\ )

[comment]: <> (**Further Examples:**)