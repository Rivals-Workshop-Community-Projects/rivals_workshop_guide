# With

`with` is a special statement similar to [`if`](conditionals.md) and [`for`](array.md#for-loop).

A with statement is for running code from another object's [perspective](objects_and_instances.md#perspective), or
accessing all objects of a given type.

[Make sure you understand objects and instances first,](objects_and_instances.md) or the notion
of [perspective](objects_and_instances.md#perspective) won't be clear.

As explained below, `with` should be used carefully. It is a complicated solution.

`with` changes the [perspective](objects_and_instances.md#perspective) to the [instance](objects_and_instances.md), for
the code inside.

Inside the block, the original caller object can be referenced as `other`.

## With Object

Using `with` on an [object](objects_and_instances.md) is a power tool. Capable of doing a lot of work, but dangerous and easy to misuse.

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

This not only changes perspective, but it runs the code on every [instance](objects_and_instances.md) of the
object. `with oPlayer {...` code will run on every player. This is not usually what you want, so most with blocks begin
with an `if` check involving `player_id`, to only run on friendly, or enemy instances.

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
function to work properly [(see list)](objects_and_instances.md#perspective-effects).

People sometimes use it just as a shorthand to avoid using `instance.variable` syntax, but in practice this is almost
always a bad idea. Not only does `with` make the code more complex, such code is usually shorter or of similar length
without using `with`. Save it for exceptional circumstances.

