# Attacks

[Source](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/main/inject/attacks.gml)

## Attack configuration

- [`make_attack(attack, (value_name, value)...)`](make_attack.md)  \
  Configure an attack from a series of keys and values.
- [`make_window(attack, _index, (value_name, value)...)`](make_window.md)  \
  Configure a window from a series of keys and values.
- [`make_hitbox(attack, _index, (value_name, value)...)`](make_hitbox.md)  \
  Configure a hitbox from a series of keys and values.

## Timers

- [`window_time_is(frame)`](window_time_is.md)  \
  Check if the current `window_timer` equals the given `frame` **and**  the attack is not in hitpause.