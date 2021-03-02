# Control Flow

Statements are lines of code with direct effects, like `x=10` or `print('hi!')`.

Control Flow are lines of code that *control how statements will be called.* It's probably easiest to understand that by
looking at the if statement as an example

## If

```gml
if vsp < 0 {
    print("Going up")
}
```

Or more generally:

```gml
if <a boolean, something true or false> {
    <code that should only run if it's true>
}
```
(See [boolean](data_types.md#boolean))

`if` statements let you run code only if some condition is true.

```gml
if state == PS_WALK { // While walking
    walk_speed += 0.4// Keep increasing walk speed
} else { // While *not* walking
    walk_speed = 0 // Reset walk speed to very low
}
```
Immediately after the `if` block, you can put an optional `else` block, which will run any time the `if` condition is false. 

## With

## For Loop
