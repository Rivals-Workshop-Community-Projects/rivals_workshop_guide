# Ai Scripts

These are needed to make your character's AI function. Making a poor quality AI is easy, while optimizing the
AI is very complex.

## ai_init.gml

Called when a CPU of the character is created.

By default, CPUs pick attacks randomly based on the opponent's location. You
create [arrays](../../learning_path/array.md) of attack names. The CPU has an equal probability of selecting each
entry in the array. The arrays should only contain the default attack values (eg. AT_DSPECIAL_AIR is not valid,
and should just be AT_DSPECIAL).

Location arrays are:

- `far_up_attacks`
- `far_down_attacks`
- `far_side_attacks`
- `mid_side_attacks`
- `close_up_attacks`
- `close_down_attacks`
- `close_side_attacks`
- `neutral_attacks`

The resulting script may look like:

```gml
far_down_attacks = [
    AT_DAIR,
    AT_DSPECIAL
]

far_up_attacks = [
    AT_USTRONG,
    AT_DAIR,
    AT_DSPECIAL
]

// ... More
```

If you have more complex AI scripting, you initialize the variables you need for that here.

## ai_update.gml

Called every frame for a CPU of the character.

The CPU's default behavior is automatic. This script is optional, and add specials cases to the behavior, such as effectively using recovery options.

- `ai_target` - The player object the CPU is targeting.
- `ai_recovering` - If the CPU is recovering or not.
- `temp_level` - The CPU’s difficulty level (1-9).

::: construction

This needs a full guide.

Document variables and constants like `ai_state == AS_ADVANTAGE`.

:::
