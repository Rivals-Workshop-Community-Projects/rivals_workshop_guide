# Quickstart: Changing Attacks

Go to any attack in your `scripts/attacks/` directory, preferably not a special since they tend to have extra logic.

The file will be full or statements to configure the attack, looking like either

```gml
make_hitbox(AT_NAIR, 1,
    HG_PARENT_HITBOX, 2,
    HG_WINDOW, 2,
    // etc...
)
```

or `set_hitbox_value(AT_NAIR, 1, HG_WINDOW, 2)`, if the character isn't using assistant functions.

\
These statements set values to fields of 3 types:

- `AG_` fields configure the whole attack.  \
  Example: `AG_SPRITE`, the attack's sprite sheet.
- `AG_WINDOW_` fields configure a single window, which is phase like "startup".  \
  Example: `AG_WINDOW_LENGTH`, the duration of the window in-game.
- `HG_` fields configure a hitbox, the part of an attack which actually hits and deals damage and knockback.  \
  Example: `HG_DAMAGE`.

\
**Try modifying the values of some `HG_` fields to extreme numbers and see the effects.**

You can edit other fields, but the change will probably break the attack or misalign the animation windows.

If you want to check what a field does, [search the official documentation](https://rivalsofaether.com/workshop/) (or
later, search here on RivalsLib.com)

::: note

Making your own attacks is slightly harder than editing an attack, but not too complicated.

When it's time to make your first new attack, try Mawral's guides
on [windows](https://ko-fi.com/post/RoA-Workshop-Guide-Explaining-Attack-Windows-M4M72XOMP)
and [hitboxes](https://ko-fi.com/post/RoA-Workshop-Guide--Explaining-Hitboxes-D1D73IDDE).

:::
