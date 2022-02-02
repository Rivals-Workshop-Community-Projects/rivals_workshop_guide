# Common Errors

This is a searchable list of error messages, and common fixes.

For a general guide to fixing code problems, see [Debugging](../learning_path/debugging.md)

### `<instance id> (<object>) does not have variable '<variable name>'`

- Maybe you misspelled the variable name
- Maybe the variable wasn't created yet
- If you're using [`with`](../learning_path/with.md) to run code on a group of objects, maybe you're affecting more than
  you mean to, and need an if.

### `Expected a statement, got <character>`

There's probably an incomplete line that isn't a statement (a piece of code that does something).

For example, a line containing only `attack == AT_DTILT` doesn't do anything. `==` compares `attack` and `AT_DTILT`, and
makes a `true` or `false` value, but that value isn't saved or used by anything.

### `Type check failure for argument <argument num>: Expected a <correct type>`

You're using the wrong type as one of the arguments, like a `"3"` text string when you need a `3` number.  \
See [data types](../learning_path/data_types.md).

### `unable to convert string "<something>.png" to number`

You may have named a spritesheet wrong. Sprites should look like `idle_strip4.png`.
`Couldn't find instance <instance id>`  \
There is probably code running referencing a destroyed article. Referencing a dead player may cause this?

See [destroying articles safely.](../learning_path/articles.md#safely)

### `Connection error, there was a desync.`

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

::: construction

I'd like this page to be heavily expanded.

:::