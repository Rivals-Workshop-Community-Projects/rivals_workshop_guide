# Common Errors

This is a searchable list of error messages, and common fixes.

For a general guide to fixing code problems, see [Debugging](../learning_path/debugging.md)

### Error `<instance id> (<object>) does not have variable '<variable name>'`

- Maybe you misspelled the variable name
- Maybe the variable wasn't created yet
- If you're using [`with`](../learning_path/with.md) to run code on a group of objects, maybe you're affecting more than
  you mean to, and need an if.
- If the error is in `draw_hud.gml`, it's because `draw_hud.gml` runs once before `init.gml`, giving a single error.  \
  To avoid the error, try setting `initialized = true` (named whatever) in `init.gml`
  and `if not 'initialized' in self { exit }` at the top of `draw_hud.gml`. That will skip `draw_hud.gml` if `init.gml`
  hasn't run yet.
- If the missing variable is `url`, note that `url` only automatically exists on finished characters that have been
  uploaded to the workshop.

### Error `Expected a statement, got <character>`

There's probably an incomplete line that isn't a statement (a piece of code that does something).

For example, a line containing only `attack == AT_DTILT` doesn't do anything. `==` compares `attack` and `AT_DTILT`, and
makes a `true` or `false` value, but that value isn't saved or used by anything.

### Error `Type check failure for argument <argument num>: Expected a <correct type>`

You're using the wrong type as one of the arguments, like a `"3"` text string when you need a `3` number.  \
See [data types](../learning_path/data_types.md).

### Error `unable to convert string ".png" to number`

You may have named a spritesheet ending in `_strip` with no number at the end. Sprites should look
like `idle_strip4.png`.

### Error `Couldn't find instance <instance id>`

There is probably code running referencing a destroyed article. Referencing a dead player may cause this?

See [destroying articles safely.](../learning_path/articles.md#safely)

### Error `Connection error, there was a desync.`

Desyncs are a notoriously tricky bug to fix. They occur in online games when two players have different game states.

When a desync occurs, screenshots are automatically logged to `%localappdata%/RivalsofAether/desyncs`

Things that can cause desyncs include:

- Setting a non-local variable in [draw scripts](scripts/animation_scripts.md#draw-scripts).  \
  Any variables set should be made local with `var`.  \
  This includes purely visual variables like colors and sprite indices.
- GML's random functions, eg `random_range`. These will give different numbers for different players.  \
  Use `random_func()` and `random_func_2()`
- GML's camera functions `view_get_xview` and `view_get_yview`.  \
  Try `get_instance_x(asset_get("camera_obj"))` instead.
- Code based on the alt you have loaded.  \
  If both players load the same alt, the opponent's alt will automatically change, causing different states.
- Anything that pauses the game, like `get_string()`
- (Unconfirmed) Rounding numbers might sometimes cause desyncs. You can use `floor` instead if you're concerned.
- (Unconfirmed) Articles with image_angle being not 0 might sometimes cause desyncs.

Assistant will automatically warn for some cases where it's able to detect desync prone code.

### Error `cannot guarantee array type`

This can occur if you try to alter an array from a subscript like `my_array[0] = 5`.

When changing a value in an array, use `@` syntax. `my_array[@ 0] = 0`.

Other data types have other accessor syntax.

### Error `add_compatiable_urls is not a valid function`

The manual repeatedly misspells `add_compatible_urls` as `add_compatiable_urls`.

### Hitbox not Hitting

- Is priority unset for the hitbox? Hitboxes with priority of 0 will not hit.
- Try setting hitbox group to -1.

### Single Frame Attack Code Happening Every Frame During Hitpause

Special attack code often uses a frame check like `window_timer == 1` or `window_timer % 4 == 0` to make the code run on
that particular frame.

However, during hitpause, the `window_timer` doesn't advance, which can cause the code to run each frame while the
hitpause is active.

If using [the assistant](/assistant), consider using `window_time_is(frame)` instead of `window_timer == frame` to
automatically check for hitpause. \
Otherwise add `and not hitpause` to the check.

### `set_attack` Crashes in `set_attack.gml`

Calling `set_attack` in `set_attack.gml` risks creating an infinite loop.

Just write `attack = ` when needed in `set_attack.gml`.

### Sprite is Floating or Clipping through the Stage

The sprite may not have been given the correct position in [`load.gml`](scripts/init_and_attack_scripts.md#load-gml).

### Hud Sprite is in the Wrong Place

- Referencing `x` or `y`  \
  `temp_x` and `temp_y` refer to the hud's base location.
- Draw at raw coordinates like `draw_sprite(..., ..., 100, 100)` isn't wrong, but is often not what the programmer intended.  \
  Try `temp_x+100`, `temp_y+100` instead.

### Strange Behavior When Breaking Kragg's Rock

If you have an `AT_NSPECIAL` projectile, when you break Kragg's rock, the fragments will count as being
your `AT_NSPECIAL` projectiles.

This will trigger all of your character's scripts related to hitboxes,
including [`got_parried.gml`](scripts/event_scripts.md#got-parried-gml)
, [`hitbox_update.gml`](scripts/hitbox_scripts.md#hitbox-update-gml),
and [`hit_player.gml`](scripts/event_scripts.md#hit-player-gml).

The fragments store your character as being the original character, making it difficult to check for.

One work-around is to use a `hit_priority` not equal to 1, since Kragg's rock shards have a `hit_priority` of 1.  \
You can then check `if (my_hitboxID.hit_priority != 1)` inside any hitbox scripts, to see if it's really yours.

### Some Code is not Running

- An error earlier in the script will immediately exit the script.
- If the code is in an [`if`](../learning_path/conditionals.md) or [`for`](../learning_path/array.md#for-loop) block,
  the block may not be being entered. Debug the conditions before the block.

### White X Sprite / Error sound

The sprite requested by `sprite_get` or sound requested by `sound_get` was not found.

- Is the file present and name correct?
- The file type *should not* be included. Correct format is like `sprite_get("dash")` or  `sound_Get("air_horn")`.
- These functions work on whatever is currently `self`, so they may misbehave inside a [`with`](../learning_path/with.md) block. 


::: construction

I'd like this page to be heavily expanded. Please contribute to my contact in the footer :)

:::

::: sources

This page was built from the findings of many.

I was directly helped by: Frtoud, Mawral, Mr Nart, Supersonic

:::