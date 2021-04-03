# `make_attack`

`make_attack(_attack_name, (value_name, value)... )` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/attacks.gml)

Configure an attack from a series of keys and values.

```gml
// Without Assistant
set_attack_value(AT_BAIR, AG_CATEGORY, 1)
set_attack_value(AT_BAIR, AG_SPRITE, sprite_get("bair"))

// With Assistant
make_attack(AT_BAIR,
    AG_CATEGORY, 1,
    AG_SPRITE, sprite_get("bair")
)
```

\
**Parameters:**

- `_attack_name`: The [attack index](https://rivalsofaether.com/attack-indexes/) to be configured.
- Any number of pairs of:
    - `value_name`: An [attack grid index](https://rivalsofaether.com/attack-grid-indexes/) to set.
    - `value`: The value to set to the paired attack grid index.

::: see_also

- [make_hitbox](make_hitbox.md): Configure a hitbox.
- [make_window](make_window.md): Configure a window.

:::