# Quickstart: Changing Movement

::: warn

If your changes don't seem to do anything, see [In Game Testing](in_game_testing.md).

:::

Your character's basic attributes are stored
in [variables](/workshop_guide/programming/learning_path/variables.md)
in [`scripts/init.gml`](/workshop_guide/programming/reference/scripts/init_and_attack_scripts.md#init-gml).

Open `scripts/init.gml`in [GMEdit](software_setup.md#opening-your-project-with-gmedit) and try changing some values. For
example, changing the `max_fall` line to `max_fall = 1` will make your character fall slowly.

Some to try are:

- `max_djumps`
- `dash_speed`
- `air_accel`

Some values even work when negative, though that gets weird.

`init.gml` also has animation variables, though they're probably less interesting to play with.

A lot of a character's balance and feeling comes from their movement controls, so you'll be able to get a lot of value
from tuning these.
