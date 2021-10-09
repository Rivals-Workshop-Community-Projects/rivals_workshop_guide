# Data Types

Variables come in different types, playing by different rules.

## Booleans (True or False values)

A boolean value is `true` or `false`.

`is_on_fire = true` or `weapon_held = false`.

\
The `not` or `!` operator inverts a boolean between true and false. `not true`
is `false`. `is_toggled = not is_toggled` would switch between true and false.

You can combine booleans, described [below](#logical-operators).

### Variable Comparison

You can compare any variables for equality, which returns a boolean value.
- `==` means "are equal?" `2 == 3` is `false`.
- `!=` means "are not equal?" `2 != 3` is `true`. (Remember `!` means the same as `not`, so `!=` means 'not equal')

\
People sometimes compare booleans with `true` or `false`. That's silly. `is_active == true` means the same
thing as `is_active`. `is_active == false` means the same as `not is_active`.

\
Numbers have more operators, `>`, `>=`, `<`, and `<=`, described [below](#reals-numbers).

[`if`](conditionals.md#if) statements use variable comparison extensively.

### Logical Operators

You can combine booleans with logical operators `and` and `or`.

```gml
can_use_fireball = fireball_ready == state_cat != SC_HITSTUN
bomb_should_explode = fuse_timer <= 0 or should_die
```

\
You can technically use `0` and `1` as `false` and `true` respectively. **Don't.** It makes the intention of the
code much less clear, because the reader must guess whether the value is a boolean or number. If a value is true or false, use `true` and `false`.

\
[Some misconceptions.](https://forum.yoyogames.com/index.php?threads/how-not-to-use-and.12871/)

## Reals (Numbers)

Most variables hold numbers, such as speed or percent or x position.

You can also compare numbers by their relative size.

- `>` - 'is greater than?'
- `>=` - 'is greater than or equal to?
- `<` - 'is less than?',
- `<=` - 'is less than or equal to?'

Numbers can use math operators `+`, `-`, `*` and `/`.

When increasing or decreasing a variable, you can use `+=`, `-=`, `*=` and `/=` as a shortcut. `x += 1` increases x 1,
the same as `x = x+1`.

`my_var++` or `my_var--` are shorthand for `my_var+=1` and `my_var-=1`.

### Integers

All numbers are reals. Integers are a subset of reals with no decimal value. `1`, `-100`, `4140` are integers,
while `2.5` is not.

Rivals expects some variables to be integers, such as `x` and `y` positions. If you ever need to convert a real to an
integer, you can
use [rounding functions](https://docs.yoyogames.com/source/dadiospice/002_reference/maths/real%20valued%20functions/index.html#:~:text=lengthdir_y-,Rounding%20Functions,These%20are%20all%20functions%20that%20round%20or%20select%20values,-%3A)
like `round`, `floor` and `ceil`.

[GML Reals Official docs](https://docs.yoyogames.com/source/dadiospice/002_reference/maths/real%20valued%20functions/index.html)

## Strings (text)

Strings are text. Rivals doesn't need a lot of text processing, but they're used when using `print` or displaying text
as part of a [HUD](../reference/scripts/animation_scripts.md#draw-hud-gml).

String value are anything between quotes, either single `'...'` or double `"..."`.

You can add strings together with `+`. `"a" + "b" == "ab"`.

[Official docs](https://docs.yoyogames.com/source/dadiospice/002_reference/strings/index.html)
