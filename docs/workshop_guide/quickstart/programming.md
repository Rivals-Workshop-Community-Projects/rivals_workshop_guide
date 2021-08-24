# Quickstart: Programming

Programming in Rivals has the potential to make almost anything you can imagine, but this guide will just get you
started.

The most common scripts for adding logic
are [`update.gml`](/workshop_guide/programming/reference/scripts/event_scripts.html#update-gml) which runs every frame,
and [`attack_update.gml`](/workshop_guide/programming/reference/scripts/event_scripts.html#attack-update-gml), which
runs every frame that you are attacking.

This section will take you through a bunch of tiny examples.

Actually try them in game, and make your own experiments. As
you [learn more about programming](/workshop_guide/programming/learning_path), the possibility space will explode.

## Turbo Mode!

Turbo mode lets you act immediately when you hit someone, rather than waiting for the endlag to finish.

You can set up turbo mode yourself with very little code:

```gml
// attack_update.gml

if has_hit { // Stuff inside this will only run if the attack has hit
    iasa_script() // Makes the character free to act. "Interrupt as soon as"
}
```

That's pretty silly of course. For something saner you could try:

```gml
// attack_update.gml

if attack == AT_USPECIAL and has_hit { // Only functions when the attack is uspecial
    iasa_script()
}

// or...
if attack == AT_DTILT and has_hit {
    can_jump = true // Rather than letting you do anything, only lets you jump cancel
}

// or making it only cancelable during a certain window.
```

## Wind

```gml
// update.gml
x += 1 // Increase your character's x position by 1.
```

This pushes your character to the right each frame, as if it's very windy.

\
What if they're always charging forwards instead? Then instead of increasing `x`, `x` should change in the direction
they're facing.

```gml
// update.gml
x += 1*spr_dir //spr_dir is 1 when you're facing right, and -1 when you're facing left.
```

## Speed Multiplier

Let's make using nair double our current speed?

```gml
// attack_update.gml
if attack == AT_NAIR {
    // Multiply horizontal and vertical speed by 2
    hsp *= 2 
    vsp *= 2
}
// BROKEN. OOPS.
```

Uh. Be careful not to use that while you're moving straight upward, or it may crash your game.

Let's add print debugging to see what's happening with our speed.

```gml
// attack_update.gml
if attack == AT_NAIR {
    hsp *= 2 
    vsp *= 2
}
prints(hsp, vsp) // Print "horizontal speed, vertical speed" each frame. 
```

![](https://i.gyazo.com/3d8e10ca4c9d141e1223c8c490082efa.png)

Oops. `attack_update.gml` runs every frame the attack is happening, not just the first frame. So instead of doubling the
speed once, it doubles it every frame, with ludicrous results.

```gml
// attack_update.gml
if attack == AT_NAIR and state_timer == 1 { // if nair and you just started attacking
    hsp *= 2 
    vsp *= 2
}
```

## Extra Jump on hitting Dair

Maybe you think your character's offstage down-air plays are really cool, but too dangerous to be worth trying.

You could grant the player their double jump back on hit, to help them get back on stage.

```gml
// hit_player.gml (Runs once, when your character hits another)
if attack == AT_DAIR {
    djumps = 0 // Sets the number of currently used double jumps to 0.
}
```

## Fspecial teleports you back to the start location

```gml
// attack_update.gml
if attack == AT_FSPECIAL {
    if window == 1 and window_time_is(1) { // At the beginning of the first window
        fspec_starting_x = x // Save the current location to a new variable
    }
    if window == 3 and window_time_is(10) { // Partway through the last window 
        x = fspec_starting_x // Move back to the saved location
    }
}
```

This one demonstrates a little persistent behavior by using
a [variable](/workshop_guide/programming/learning_path/variables)