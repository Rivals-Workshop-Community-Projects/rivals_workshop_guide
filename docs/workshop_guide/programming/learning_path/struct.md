# Struct

An instance is a cluster of data that represents a *thing* in the game, such as a character or the stage.
See [objects and instances](objects_and_instances.md) for background.

With structs, you can create your own simple instances to organize data. When you need an instance that's visible on
screen and has a position, you probably want an [article](articles.md) instead.

A struct is like an [array](array.md) in that they both hold multiple values, but while an array is an ordered sequence,
a struct is an unordered group of variables with names.

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

(see [for loop](array.md#for-loop))

Structs are sometimes called a 'lightweight object', which is misleading.
[Structs are instances, not objects.](objects_and_instances.md)
