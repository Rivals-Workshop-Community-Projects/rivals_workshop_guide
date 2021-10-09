# Code Injection

The Assistant has the power to generate text for you.

There's a lot of of potential, but right now this feature is only demoed with **For Each Loop Generation.**

## For Each Loop Generation

When using the contents of an [array](/workshop_guide/programming/learning_path/array.md), you often need to loop
over its contents. This is tedious to write, and looks something like:

```gml
for(var i=0; i<array_length(my_array); i++) {
    // Do something with weapons[i]
}
```

Don't tolerate tedious things! That's machine work.

The Assistant will replace any instance of `$foreach <some_array>$` with a for loop, accessing that collection, such as:

```gml
$foreach weapons$ // You type this.

// Assistant replaces it with this:
for(var weapon_i=0; weapon_i<array_length(weapons); weapon_i++) {
    var weapon = weapons[weapon_i]
}
```

The Assistant singularizes the collection name (`weapons`->`weapon`), and can even do irregular plurals, like `people`
->`person`.
