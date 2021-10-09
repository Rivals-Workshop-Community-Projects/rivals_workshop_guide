# Programming Best Practices

The natural tendency of new programmers is to write code that works, and then move on. That leads to a
trail of chaos left behind, where the code may work, but it's hard to tell *how* or *why.*

\
That feels fine until you need to change something. Maybe you're trying to find the cause of a bug and fix it, or you're
trying to adjust how part of the character works. **You'll be back.** Code is read much more often than it's written.

\
Staying organized also prevents a lot of bugs before they happen. Spending a little more time making your code clean and
organized will *save* you more time in the future.

# Naming

This is the quickest win. Once good naming is a habit, all your code will be easier to understand.

\
Naming well is conceptually simple. Think of what the variable *means.* If someone asked you what the variable is, think of what
you'd tell them. That's what your variable name should say.

\
Don't worry too much about keeping your variable names very short. Editors provide autocompletion of variable names.
If a variable name takes 3 or 4 words to be clear, use 3 or 4 words.

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

When you write something in multiple places, there is a high chance it's "logical duplication", which can make your
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
could help, but can be messy, especially if the same value has for another meaning.

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

Behavior can also duplicated. When you find you're writing the nearly identical lines of code in multiple places, that
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
multiple places to avoid weird inconsistent behavior.

Fortunately, you can save the behavior to a [function](functions.md) with a `#define` block.

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

Now adding the flash requires only one change in the new function. Using descriptive named values like `spend_empower` often improves
readability as well.

With [the Assistant](/assistant), you can share defines across files, rather than needing to copy them into each file
where they're used.

# Writing Simple Code

Much of the code you see will be long, tangled, and hard to follow.

Code doesn't need to be that way. Reading well written code feels like a friend clearly explaining what the code does.

\
With some practice and effort, you can create complex effects out of simple code that is easy to understand, fix, and
change. To do this, actually think of how you would clearly describe what the code does, and turn that
description into code.

\
For example, I might describe a command grab at a high level as:

```
when nspecial hits:
  Grab the opponent
  While they are held:
    Move slower and can't double jump
    if you release the button: Throw them in the held direction
    If you get too close to the bottom blastzone: drop them
    After a timer: drop them
```

(Note that if you can't write something like this, you probably don't know what you want yet.)

\
Then you can try to turn the description into meaningful code.

Often, parts of the code will require more detail to fully explain, such as "throw them in the held direction." If you
directly write down those details, it will obscure the clear, high-level meaning! Instead, use a [function](functions.md) to
separate the details, and keep the meaning clear.

```gml
if not special_down {
    throw_in_held_direction()
}

...
#define throw_in_held_direction() {
    // Lots of code
}
```

# Understanding your Code

It is common in Rivals modding to learn how to do something by copying something similar from another mod. This sort of
works, but is setting yourself up to struggle.

It's hard enough to change and fix problems in code that you wrote yourself, that you're most prepared to understand.
Relying on code you don't understand is an easy way to get buggy behavior and not know why or how to fix it.

When adding new code, make sure you can see what it's doing and why. What would happen if you changed or removed part?
Try things out in game and see if they meet your expectations. Better to find out now than later when other code is
relying on it.
