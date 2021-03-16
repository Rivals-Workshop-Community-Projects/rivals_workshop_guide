# Programming Best Practices

The natural tendency of new programmers is to write code that works, and then move on. Unfortunately, that leads to a
trail of chaos left behind, where the code may work, but it's hard to tell *how* or *why.*

\
That's fine until you need to change something. Either you're trying to find the cause of a bug and fix it, or you're
trying to adjust how part of the character works, you'll be back. Code is read much more often than it's written.

\
Being organized also prevents a lot of bugs before they happen. Spending a little more time making your code clean and
organized will *save* you more time in the future.

# Naming

This is the quickest win. Once good naming is a habit, all your code will be easier to understand.

\
Naming well is conceptually simple. Think of what the variable *means.* If someone asked you what it is, think of what
you'd tell them. That's what your variable name should say.

\
Don't worry too much about keeping your variable names very short. Editors provide autocompletion of variable names.

::: construction

Could use some demonstrative examples here

:::

## Be consistent

Later you're going to want to remember what you called something.

If you've named similar things before, follow the same patterns. Stick to `camel_case_naming` to be consistent with
Rivals' built-in functions.

Rivals doesn't do a great job of this itself. The variable to see if a character can cancel their current action into a
wall jump is `can_wall_jump`. Can you guess the variable to see if a character has a remaining wall jump?
It's `has_walljump`. Try to make your code obvious, and avoid creased foreheads.

# Duplication

When something is written in multiple places, there's a high chance that it is logical duplication, which can make your
job much harder later on.

By extracting the repeated code to a name, you can avoid needing to change multiple places, and make the code more
readable.

## Values

```gml
// A charge shot with a charged and uncharged stage. 
// When charge is 50, it plays a sound and creates a stronger projectile.

if laser_charge == 50 {
    sound_play(sound_get("sfx_ghost_glove"));
}

// ... Some time later

if laser_charge >= 50 {
    // Create the stronger attack
} else {
    // Create the weaker attack 
}
```

During balancing, you realize it's charging too slowly, and you want to try it at 40. It's been a while, so you forgot
that you wrote '50' in multiple places, and you miss one, and get a weird bug. Searching all project files for '50'
could help, but can be messy, especially if the value is being used for another meaning elsewhere.

The solution is to save '50' to a variable with a nice descriptive name, and use that variable instead of the value
directly.

```gml{1,2,8}
laser_charge_requirement = 50 # The only code that needs to be changed to alter the value.
if charge == laser_charge_requirement {
    sound_play(sound_get("sfx_ghost_glove"))
}

// ... Some time later

if laser_charge >= laser_charge_requirement {
    // Create the stronger attack
} else {
    // Create the weaker attack 
}
```

## Behavior

Behavior can be duplicated too. When you find you're writing the nearly identical lines of code in multiple places, that
can lead to the same sort of problem.

```gml
# The character has an empowered state, which buffs their next special and then ends.

if attack == AT_NSPECIAL {
    if empowered {
        // (Code that does empowered nspecial)
        sound_play(sound_get("sfx_go"))
        empowered = false
    }

if attack == AT_DSPECIAL {
    if empowered {
        // (Code that does empowered dspecial)
        sound_play(sound_get("sfx_go"))
        empowered = false
    }
```

Say that later you want to add a flash as well as the sound effect. Again, you'd need to make the same changes to
multiple places in order to avoid weird inconsistent behavior.

Fortunately, you can save the behavior to a [function](language/functions.md) with a `#define` block.

```gml{4,10,13-15}
if attack == AT_NSPECIAL {
    if empowered {
        // (Code that does empowered nspecial)
        spend_empowered()
    }

if attack == AT_DSPECIAL {
    if empowered {
        // (Code that does empowered dspecial)
        spend_empower()
    }
    
#define spend_empower() 
    sound_play(sound_get("sfx_go"))
    empowered = false
```

Now adding the flash only needs to change the new function. Using named values like `spend_empower` often improves
readability as well.

::: construction

Todo, talk about using assistant to inject custom defines across files, rather than copy-paste.

:::

# Decomposition and Pseudocode

Sometimes you'll have complicated problems to solve. If you work at it, you can probably solve it with some gross
complicated code.

It doesn't have to be that way. How simple or complicated something is to understand depends on how well the details are
grouped and hidden. When well organized, code should read like an english explanation of what it's doing.

## A weird example

Imagine programming a robot to walk from your bedroom to your front door, where the only built-ins
are `left_wheel_velocity` and `right_wheel_velocity`, and `wait(ms)`.

It would be entirely possible to complete the task just by changing the wheel's at the right times to get it to turn and
move the right amounts. The resulting code would be incomprehensible and extremely hard to change.

\
The trick to notice is that you're doing repeated actions with those wheel changes, turning and moving forwards. You
could improve things by making functions for `turn(direction)` and `move(distance)`, which handle the wheel adjustments
for that change.

Now the code would look like a series of turns and movements rather than a series of wheel adjustments. Easier to read,
write, and understand, but still not *easy.*

\
The functions being used are still too small and low level to describe what you're doing. If you keep track of the
robot's current position, you could make `go_to_point(x, y)`, which turns towards that point and moves to reach it.

Then you can name the points to stop and turn at, e.g. `bedroom_door = [15, 30]`, and write the code just as a list of
english named locations. Now the code is short, easy to understand, and easy to change.

## Decomposing from the start

Normally it's better not to write the horrific version first and then clean it up. It's much nicer for things to be
simple when you're still writing them. Write the code as if you were explaining it to someone.

With the robot example the task is "get to the front door":

- If someone asked "How does it work?" - "It goes to this series of points."
- They ask "How does `go_to_point` work?" - "It turns the robot toward the point, and moves the distance between them."
- "How does turning work?" - "It moves one wheel forwards, and the other backwards, for the right amount of time."
  etc.

In this way, even though the problem is complicated, each level of the code is simple. To look into the details, the
reader just goes down a level to the next easy-to-understand function.

# Understanding your Code

It is common in Rivals modding to learn how to do something by copying something similar from another mod. This sort of
works, but is setting yourself up to struggle.

It's hard enough to change and fix problems in code that you wrote yourself, that you're most prepared to understand.
Relying on code you don't understand is an easy way to get buggy behavior and not know why or how to fix it.

When adding new code, make sure you can see what it's doing and why. What would happen if you changed or removed part?
Try things out in game and see if they meet your expectations. Better to find out now than later when other code is
relying on it.