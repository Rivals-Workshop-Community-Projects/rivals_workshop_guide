# Control Flow

Statements are lines of code with direct effects, like `x=10` or `print('hi!')`.

Control Flow are lines of code that *control how statements will be called.* It's probably easiest to understand that by
looking at the if statement as an example

# Basic Control Flow

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

(See [boolean](data_types.md#booleans-true-or-false-values))

`if` statements let you run code only if some condition is true.

```gml
if state == PS_WALK { // While walking
    walk_speed += 0.4// Keep increasing walk speed
} else { // While *not* walking
    walk_speed = 0 // Reset walk speed to very low
}
```

You'll often want to use boolean's logical connectors `and` and `or` to handle more complex conditions, such
as `if window == 3 and window_timer == 1`

Immediately after the `if` block, you can put an optional `else` block, which will run any time the `if` condition is
false.

## Switch Case

::: construction

todo

:::

## Break

::: construction

todo

:::

# Advanced Control Flow

Everything below this point is useful less often, and usually needs a good understanding of the language to use effectively.

New modders can skip ahead.

## With

*For running code from another object's perspective, or accessing all objects of a given type.*

[Please understand objects and instances first.](objects_and_instances.md)

As explained below, `with` should be used carefully. It is a complicated solution.

`with` changes the [perspective](objects_and_instances.md#perspective) to the [instance](objects_and_instances.md), for the
code inside.

Inside the block, the original caller object can be referenced as `other`.

### With Object

Using `with` on an object is a power tool. Capable of doing a lot of work, but dangerous and easy to misuse.

```gml
with obj_article1  { // Runs for *all* article1 instances, including opponents'
    if player_id == other { 
        // player_id is the instance that created the article, other is the original caller (your character for most files)
        //   so this if statement checks if the article belongs to your character. 
        vsp = -1
    }
}
```

```gml
with <object> {
    // Code run from the perspective of *every* instance of that object.
}
```

This not only changes perspective, but it runs the code on every [instance](objects_and_instances.md) of the object. `with oPlayer {...` code will
run on every player. This is not usually what you want, so most with blocks begin with an `if` check
involving `player_id`, to only run on friendly, or enemy instances.

This lets you work with an object's instances even when you don't know how many there are; Helpful for characters with
terrain or steam or other article based gimmicks.

It also lets you work with opposing players to handle status effects or other advanced behavior.

Handle with care. Prefer simpler solutions when they're available. Make sure you know which instances are involved.

[Available objects](objects_and_instances.md#available-objects)

[Official docs](http://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/401_18_with.html)
[Recipes](https://forum.yoyogames.com/index.php?threads/with-block-recipe-cards.25326/)

### With Instance

```gml
// in article1_update.gml
with player_id {
    instance_create(x, y, obj_article_2)
}
```

```gml
with <instance> {
    // Code run from that instance's perspective
}
```

The perspective is changed to the single instance given. This is needed *very rarely,* but is sometimes needed for a
function to work properly [(see list)](objects_and_instances.md#important-perspective-effects).

People sometimes use it just as a shorthand to avoid using `instance.variable` syntax, but in practice this is almost
always a bad idea. Not only does `with` make the code more complex, such code is usually shorter or of similar length
without using `with`. Save it for exceptional circumstances.

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
- The second is a [boolean](data_types.md#booleans-true-or-false-values) expression meaning 'should the loop end now?'
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