# Variables

A common instruction is saving a value in a variable.

```gml
my_first_variable = 1000
```

The `=` operator stores the value `1000` in the variable named `my_first_variable`. You can read it as "set
my_first_variable to 1000."

(Note: `=` is for assigning a value. If you want to [check if two values are equal](data_types.md#variable-comparison),
use `==`, which means "is equal to?")

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

You can technically name variables almost anything. Use `_` as a space `like_this`. The name can contain numbers, but not as
the first character.

[Using helpful names is valuable.](best_practices.md#naming) Future-you won't remember what you're thinking now.

## Name collisions

When `var` is before a variable, it makes that variable 'local.'

```gml
var my_local_variable = 1000
```

You can only access [local variables](https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/variables/local%20variables.html)
from the current "scope," which makes it much easier to stay organized and avoid unexpected side
effects.

Being local to the current scope means only being accessible within the current block of code. If you create the variable
within an [if](conditionals.md#if) or [for](array.md#for-loop) structure, it won't exist outside that
block. Local variables are not accessible outside the current file.

If you don't need to access the v ariable on later frames, it probably *should* be a `var` variable. You
should be using `var` often to stay organized.

Different [instances](objects_and_instances.md) have their own variables, which you can access
with `<instance id>.<variable name>`, e.g. `other_player.x`.

\
\
*Advanced:* If you need to set a `var` variable in a block and use it out of the block, you can declare the variable
before it.

```gml
var message
if is_ready {
   message = "Ready!"
}
else {
   message = "Not ready!"
}
print(message)
```
