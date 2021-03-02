# Functions

[Built in Functions.](https://rivalsofaether.com/functions/)

Functions are a piece of code assigned, given a name, similar to how a variable is a value given a name.

To make them more flexible, functions can receive inputs (called 'parameters') and give an output (called a 'return
value')

```gml
the_maximum = max(1, 2, 3)
print(the_maximum)
```

- `1, 2, 3` are input parameters passed in to the function `max`.
- `max` returns `3`, which gets saved to `the_maximum`.
- `print` takes `the_maximum` as a parameter, and displays it to the screen (press ctrl 8 to see print output).

# Defines

You can, and should (!) make your own functions.

Your functions are created with a `#define` block.

Your functions **must be declared at the bottom of the file they're used in.**

```gml
#define stop_movement {
    hsp = 0
    vsp = 0
}
```

This makes a new function called `stop_movement` that you can use with `stop_movement()`.

```gml
#define add_displacement(x_offset, y_offset) {
    x += x_offset
    y += y_offset
}
```

Notice the first line. This requires two inputs, which will be given the names `x_offset` and `y_offset`.

# Advanced Defines

It is also possible to allow an unknown number of input parameters.

The function body has two new variables.

- `argument` is an [array](data_structures.md#array) containing the input parameters.
- `argument_count` is the size the `argument` array. The same as `array_length(argument)`

```gml
#define old_prints
    // Prints each parameter to console, separated by spaces.
    var _out_string = ""
    for (var i = 0; i < argument_count; i++){
        _out_string += string(argument[i])
        _out_string += " "
    }
    print(_out_string)
```

You can use some parameters as variables and loop through the rest.

```gml

#define fancy_prints {
    //title, ...args
    // Prints the first parameter as a title, then the others separated by spaces.
    var _out_string = argument[0]+":" 
    for (var i = 1; i < argument_count; i++){
        _out_string += " "
        _out_string += string(argument[i])
    }
    print(_out_string)
}
```

These should always have a first line comment explaining what the parameters are, with the unknown quantity last,
named `...args`