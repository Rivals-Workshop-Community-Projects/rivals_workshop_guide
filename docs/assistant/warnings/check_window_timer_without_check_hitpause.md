# `check_window_timer_without_check_hitpause`

When a character is in hitpause, their `window_timer` does not advance. Events set to trigger at that window_timer will
trigger every frame until the hitpause ends.

Adding `and !hitpause` fixes this, but is easy to forget without noticing.

```gml
if (window_timer == 1) { // WARN: Possible repetition during hitpause. Consider using window_time_is(frame) https://rivalslib.com/assistant/function_library/attacks/window_time_is.html
```

## Resolution

You can just add `and !hitpause` to these lines, or run them all in a `if !hitpause {` block (The Assistant will try to
detect this, but no promises).

If the variable is only needed locally, just put `var` before it, so that it won't exist outside the current script.

If you only need to read the variable, and it's needed in multiple files, initialize it in `init.gml` or another synced
script.

If the variable is needed in multiple files, and the draw script needs to change it, double check there isn't a safer
way to do what you're doing. If you're sure, disable the warning with `// NO-WARNING` or commenting it out
in `assistant/assistant_config.yaml`
