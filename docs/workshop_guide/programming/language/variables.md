# Variables

A common instruction is saving a value in a variable.

```gml
my_first_variable = 1000
```

The `=` operator stores the value `1000` in the variable named `my_first_variable`. You can read it as "set
my_first_variable to 1000."

(Note: `=` is for assigning a value. If you want to [check if two things are equal](data_types.md#variable-comparison),
use `==`, which means "is equal to?")

The variable can be named pretty much anything, but it should be a noun that is helpful for the reader's understanding.
Use `_` as a space. The name can contain numbers, but not at the very start of the name.

```gml
my_second_variable = my_first_variable + 1 // my_second_variable will store 1001
```

Your character already has a [a lot of variables,](https://rivalsofaether.com/player-variables/) which you can read or
change.

```gml
// update.gml
hsp = 3 // Sets your character's horizontal speed every frame
y = 800 // Sets your character's vertical position every frame
```

#### Local Variables

When `var` is before a variable, it makes that variable 'local.'

```gml
var my_local_variable = 1000
```

[Local Variables](https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/variables/local%20variables.html)
are only accessible from the current "scope," which makes it much easier to stay organized and avoid unexpected side
effects.

Being local to the current scope means only being accessible within the current block of code. If the variable is
created within an [if](control_flow.md#if) or [for](control_flow.md#for-loop) structure, it won't exist outside that block.
Wherever it is, it won't be accessible outside the current file.

If your variable doesn't need to be accessed on later frames, chances are good it *should* be a `var` variable. You
should be using `var` often to stay organized.

Different [instances](objects_and_instances.md) have their own variables, which you can access
with `<instance id>.<variable name>`, e.g. `other_player.x`.
