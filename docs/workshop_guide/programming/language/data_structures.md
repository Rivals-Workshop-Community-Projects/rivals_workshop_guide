# Data Structures

Variables hold single values, but sometimes you want a collection of values

[Official docs](https://docs2.yoyogames.com/source/_build/3_scripting/4_gml_reference/data_structures/index.html)
including more specialized data structures.

## Array

An array is an ordered collection of variables with a *fixed length.*

In Rivals, arrays can be created with `[value1, value2, value3, ...]` such as:

```gml
hit_noise_names = [
    "oof",
    "ugh",
    "argh",
] 
```

Arrays are accessed like `my_array[0]` for the first item, `my_array[1]` for the second, and so on.
That can be a bit hard to remember at first. In programming, the first slot is *usually* index `0`.
\
`array_length(array)` gets the number of items in the array.

\
Arrays are usually accessed with a [for loop](control_flow.md#for-loop), which lets you access each item inside.

\
Items can be added to the end of an array with `my_array[array_length(my_array)] = new_value`, but be careful. Each time
the array grows larger, the language needs to completely rebuild it, which can become slow. If you're going to be adding
values often, then initialize the array with `my_array[<maximum number you expect to need>] = noone`, which will create
empty slots in the array up to that size. Be careful to check if the value is `noone` when later accessing the array.

## Struct

An instance is a cluster of data, usually representing a *thing* in the game, such as a character or the stage. See [objects and instances](objects_and_instances.md) for background.

With structs, you can create your own instances to organize data. When you need an instance that's visible on screen and
has a position, you probably want an [article](articles.md) instead.

```gml
flash_vfx = {
    name: "star",
    x_offset: 10,
    y_offset: 2
}

print(flash_vfx.name)

flash_vfx.x_offset += 1
```

```gml
// A comprehensive example 
var vfxs = [ // Array
    { name: "star", x_offset: 10, y_offset: -30},  // Of structs
    { name: "spark", x_offset: -20, y_offset: -10},
    { name: "pop", x_offset: -5, y_offset: -20},
]
for (var vfx_i = 0; vfx_i < array_length(vfxs); vfx_i += 1) { // For loop over the array
    var vfx = vfxs[vfx_i]
    draw_sprite(vfx.name, 1, vfx.x, vfx.y);  // Unpack the struct values
}
```

Sometimes called a 'lightweight object', which is misleading given it is more similar to an instance than an object in
GML terms.

## DS_ datastructures

GML provides more powerful datastructures that *require great care to use, and are typically not recommended.* These
structures always require a function call to safely destroy them. There are *many* ways this can not occur, which will
lead to gradual memory issues even after the match ends!

::: construction

Talk about injection standard library's alternatives, once they exist.

:::