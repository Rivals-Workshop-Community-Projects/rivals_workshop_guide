# `lib_draw_sprite`

`lib_draw_sprite(sprite, subimg, x, y, ?{rot=0, col=c_white, alpha=1})`
[Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/drawing.gml)

Draw a sprite to the screen, with all the power
of [`draw_sprite_ext`](https://docs.yoyogames.com/source/dadiospice/002_reference/drawing/drawing%20sprites%20and%20backgrounds/draw_sprite_ext.html)
, but with named and optional parameters.

```gml
// Without Assistant (Clearly, evil exists.)
draw_sprite_ext(sprite_get("some_sprite"), 0, x, y-10, 1, 1, 0, 2.5, 0.5);
// With Assistant
lib_draw_sprite("some_sprite", 0, x, y-10, {alpha:0.5, rot:2.5})
```

\
**Parameters:**

- `sprite`: [string](/workshop_guide/programming/learning_path/data_types.md#strings-text) sprite name
  OR [int](/workshop_guide/programming/learning_path/data_types.md#integers) sprite id (typically
  from [`get_sprite`](https://rivalsofaether.com/sprites/)) \
  The sprite to load.
- `subimg`: [int](/workshop_guide/programming/learning_path/data_types.md#integers)  \
  The frame of the animation to load.
- `x`: [int](/workshop_guide/programming/learning_path/data_types.md#integers)
- `y`: [int](/workshop_guide/programming/learning_path/data_types.md#integers)  \
  The x and y coordinates of where to draw the sprite.
- `params` [struct](/workshop_guide/programming/learning_path/struct.md)  \
  A parameter object holding additional sprite modifiers.
    - `xscale`: [number](/workshop_guide/programming/learning_path/data_types.md#reals-numbers), default `1`
    - `yscale`: [number](/workshop_guide/programming/learning_path/data_types.md#reals-numbers), default `1`  \
      The x and y size multiplier. 1 is normal size, 0.5 is half, etc.
    - `rot`: [number](/workshop_guide/programming/learning_path/data_types.md#reals-numbers), default `0`  \
      The rotation of the sprite. 0 is no rotation, 90 is 90 degrees counter-clockwise.
    - `col`: [color](https://docs.yoyogames.com/source/dadiospice/002_reference/drawing/colour%20and%20blending/index.html)
      , default `c_white`  \
      The color to draw the sprite. `c_white` is drawn normally.
    - `alpha`: [number](/workshop_guide/programming/learning_path/data_types.md#reals-numbers) from 0 to 1,
      default `1`  \
      The opacity of the sprite. 0 is transparent, 1 is opaque.
      