# `desync_object_var_set_in_draw_script`

Draw scripts are called differently for each player in an online match.

If a draw script contains code that can effect the gameplay logic in any way, it can cause one player's game to be in a
different state than the other's. This causes a 'desync,' making the character unplayable online.

Draw scripts are all scripts ending in `_draw.gml`, plus `init_shader.gml` and `draw_hud.gml`.

```gml
// post_draw.gml
x += 1  // WARN: Possible Desync. Object var set in draw script. Consider using `var` or creating constants in `init.gml`.
```

## Resolution

If the variable is only needed locally, just put `var` before it, so that it won't exist outside the current script.

If you only need to read the variable, and it's needed in multiple files, initialize it in `init.gml` or another synced
script.

If the variable is needed in multiple files, and the draw script needs to change it, double check there isn't a safer
way to do what you're doing. If you're sure, disable the warning with `// NO-WARNING` or commenting it out
in `assistant/assistant_config.yaml`
