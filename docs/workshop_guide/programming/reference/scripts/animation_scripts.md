# Animation Scripts

These scripts handle the character's visuals.

They *must not affect gameplay.* If they modify gameplay variables in any way (positions, attributes, etc), it will
cause desyncs in online play.

These scripts are called every frame, and only effect the current frame.

# animation.gml

For manually changing the character’s sprite_index and image_index, creating [custom character animations](/workshop_guide/programming/learning_path/vfx.md#custom-character-animations).

# Draw Scripts

These actually draw things to the screen. Typically used with

- [draw_sprite](https://docs2.yoyogames.com/source/_build/3_scripting/4_gml_reference/drawing/sprites_and_tiles/draw_sprite.html)
- [draw_sprite_ext](https://docs2.yoyogames.com/source/_build/3_scripting/4_gml_reference/drawing/sprites_and_tiles/draw_sprite_ext.html)
  for additional options
- [draw_debug_text](https://rivalsofaether.com/draw_debug_text/)

`pre_draw.gml` draws behind your character. It's drawn before, so your character draws on top of it.

`post_draw.gml` draws in front of your character. It's drawn after, so it draws on top of your character.

## other_pre_draw.gml and other_post_draw.gml

Runs on all *other* characters. For when you want to draw on opponents, such as Zetterburn's fire or Ranno's poison markers, user other_draw scripts.

In these scripts `other_player_id` references your own character.

`other_pre_draw.gml` draws behind of their character.

`other_post_draw.gml` draws in front of their character.

## Article Draw

Draws on your articles with the given article index.

`article[index]_pre_draw.gml` draws behind the article.

`article[index]_post_draw.gml` draws in front of your article

`index` can be

- 1
- 2
- 3
- solid
- platform

## draw_hud.gml

Used to draw the character's HUD.

The base location of the character's HUD is available as `temp_x` and `temp_y`. New coordinates can be made by
displacing them. `var special_ready_indicator_x = temp_x + 150`

## css_draw.gml

Draws on the character select screen when the character is selected. Usually used for palette selection.

`x` and `y` refer to the top left corner of the character portrait.

## debug_draw.gml

Meant to be used during development, not in finished characters.

Everything drawn in this will be drawn in front of everything else.


