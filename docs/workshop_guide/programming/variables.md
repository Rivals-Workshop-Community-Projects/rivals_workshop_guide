# Variables

A common instruction is saving a value in a variable.

```gml
my_first_variable = 1000
```

This stores the value `1000` in the variable named `my_first_variable`.

You can later use that variable to refer to its value.

```gml
my_second_variable = my_first_variable + 1 // my_second_variable will store 1001
```

Objects (programming term for things like characters, projectiles or stages) already have a lot of variables, and you
can read or change them.

```gml
// update.gml
hsp = 3 // Sets your character's horizontal speed every frame
y = 800 // Sets your character's vertical position every frame
```

When increasing or decreasing a variable, `+=`, `-=`, `*=` and `/=` can be used as a shortcut. `x += 1` increases x 1,
the same as `x = x+1`.

#### Local Variables

When `var` is before a variable, it makes that variable '
local.'

```gml
var my_local_variable = 1000
```

[Local Variables](https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/variables/local%20variables.html)
are only accessible from the current scope, which makes it easier to stay organized and avoid unexpected side effects.

If your variable doesn't need to be accessed on later frames, chances are good it *should* be a `var` variable.

Different objects have their own variables. You can access an object's variable like `other_player.x`.
