# Init and Attack scripts

These are the easy scripts to write, because they mostly contain *data* rather than *behavior.* Writing them is a bit
like filling out a form.

These scripts run only once, at the beginning of the game.

## Initializing Variables

### init.gml

`init.gml` initializes your character's variables.

Many of them are built-in variables to do with movement or animation, but you can also initialize any variables you need
for your complex behavior, such as `laser_charge = 0`.

::: construction

Need guide for choosing movement attributes

:::

### other_init.gml

`other_init.gml` is called by all *other* characters at the start of the game.

This is useful for setting other character's up to be compatible with your complex behavior.

Prefixing variables with your character's name helps avoid accidentally using variable names that they might already be
using, which would lead to bugs. Mr. Example's `other_init.gml` might contain `mr_example_debuff_active = false`.

## Initializing Graphics

### load.gml

`load.gml` looks like:

```gml
sprite_change_offset("idle", 29, 70)
sprite_change_offset("crouch", 25, 66)
// ... many more lines
```

Calling `sprite_change_offset(sprite_name, x_offset, y_offset)` for each sprite to tell Rivals where to draw the sprite.
If they're wrong, you may find them floating or clipping into the floor.

The origin point should be at the bottom center of your character. You can find the right offset in your editor, or
using [Dan Fornace's workshophelper](https://github.com/dfornace/workshophelper)

![](https://storage.ko-fi.com/cdn/useruploads/display/8e2cf977-f883-4e42-b976-3e3a0ae7c984_offset.png)

### colors.gml

Used to generate the alternate color palettes for the character.

You can use [RoaColorsGmlHelper](https://cl-9a.github.io/RoAColorsGmlHelper/) to generate and test this file quickly.

Characters have 6 palette slots by default, but that can change to up to 16 by
using [`set_num_palettes`](https://www.rivalsofaether.com/workshop/set_num_palettes/).

More information:

- [Official docs](https://rivalsofaether.com/colors-gml/)
- [Video Tutorial](https://www.youtube.com/watch?v=qo4hmRbW8lQ)

### init_shader.gml

`init_shader.gml` is called when the character's colors change, such as when parrying or in hitstun, and whenever you
call `init_shader()` yourself.

Used for refreshing the character’s shader values after changing them.

::: construction

I don't really know what to say here. I haven't worked with shaders. What are the use cases exactly?

:::

# Initializing Attacks

::: construction

This will need a much larger guide to talk about how to *design* an attack.

Will also need integration with atk file processing.

:::
Unlike all other scripts, these need to be placed in the `/attacks` sub-folder to be found.

Names are typically from [the standard attack names](https://rivalsofaether.com/attack-names/), such as `bair.gml`

The files typically look like a long series of function calls setting attack, window, and hitbox values:

```gml
set_hitbox_value(AT_DAIR, 1, HG_LIFETIME, 3);
set_hitbox_value(AT_DAIR, 1, HG_HITBOX_X, -6);
set_hitbox_value(AT_DAIR, 1, HG_HITBOX_Y, -44);
// ... Many more lines
```

[Mawral's Window Guide](https://ko-fi.com/post/RoA-Workshop-Guide-Explaining-Attack-Windows-M4M72XOMP)
[Mawral's Hitbox Guide](https://ko-fi.com/post/RoA-Workshop-Guide--Explaining-Hitboxes-D1D73IDDE)
[Relevant functions](https://rivalsofaether.com/functions/#post-130:~:text=Attack%2FHitbox%20Grid%20Functions,get_attack_value(%20attack%2C%20index%20)%20%20Reference%E2%86%92)
[Attack Grid Indices](https://rivalsofaether.com/attack-grid-indexes/)
[Hitbox Grid Indices](https://rivalsofaether.com/hitbox-grid-indexes/)

# Misc

## unload.gml

*Not mentioned in the manual*
Called at the end of each match, and is used to destroy any persistent
'ds_' [data structures](../../learning_path/array.md#ds-datastructures). 