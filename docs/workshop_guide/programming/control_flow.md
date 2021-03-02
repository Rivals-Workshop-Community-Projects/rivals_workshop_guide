# Control Flow

Statements are lines of code with direct effects, like `x=10` or `print('hi!')`.

Control Flow are lines of code that *control how statements will be called.* It's probably easiest to understand that by
looking at the if statement as an example

## If

*For running code only if a condition is true.*

```gml
// Prints "Going up" only if vertical speed is upwards
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

Immediately after the `if` block, you can put an optional `else` block, which will run any time the `if` condition is
false.

## With

*For running code from another object's perspective, and accessing all objects of a given type.*

## For Loop

*For running code multiple times, such as on each item in a [data structure](data_structures.md).*

```gml
// prints each number from 0 to 9 (not 10)
var number_to_count_to = 10
for (var i = 0; i < number_to_count_to; i += 1) {
    print(i)
}
```

The for loop updates a counter, and repeats a block of code until some condition is met.

The `i` stands for 'iterator,' because each time the loop runs is an 'iteration.'

There are three parts in the head of the for loop, separated by semicolons.
- The first is a statement, usually to set the initial value of the iterator.
- The second is a [boolean](data_types.md#boolean) expression meaning 'should the loop end now?'
- The third is a statement run each time the loop finishes, usually updating the iterator.

It is used most often to access each value of a [data structure](data_structures.md)

```gml
var my_array = ["a", "b", "c", "d"]
for (var i = 0; i < array_length(my_array); i += 1) {
    var item = my_array[i]
    print(item)
}
```

([Official Docs](https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/401_11_for.html))