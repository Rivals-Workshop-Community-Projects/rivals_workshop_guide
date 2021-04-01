# `window_time_is`

`window_time_is(frame)` [Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/attacks.gml)

Check if the current `window_timer` equals the given `frame` **and** the attack is not in hitpause.

```gml
// Without Assistant
// Forgetting `!hitpause` can cause hard to detect bugs.
if window_timer == frame and !hitpause {
    sound_play(sound_get("airhorn"))
}
// With Assistant
if window_time_is(frame) {
    sound_play(sound_get("airhorn"))
}
```

\
**Parameters:**

- `frame`: ([int](/docs/workshop_guide/programming/learning_path/data_types.md#integers)) The frame to check equality for.

[comment]: <> (::: see_also)

[comment]: <> (:::)

[comment]: <> (\ )

[comment]: <> (**Notes:**)

[comment]: <> (\ )

[comment]: <> (**Further Examples:**)