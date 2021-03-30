# Ai Scripts

These are only needed to make your character's ai function. Making a poor quality ai is very easy, while optimizing the
ai is very complex.

## ai_init.gml

Called when a CPU of the character is created.

By default, CPUs pick attacks randomly based on the opponent's location. You
create [arrays](../../learning_path/array.md) of attack names. Each entry in the array has the same probability
of being selected. The entries in the arrays should only be the default attacks values (AT_DSPECIAL_AIR is not valid,
for instance, and should just be AT_DSPECIAL).

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

If you have more complex ai scripting, you initialize the variables you need for that here.

## ai_update.gml

Called every frame for a CPU of the character. 

The CPU's default behavior is automatic. This script is only needed to add special cases to the behavior, such as using its recovery properly.

- `ai_target` - The player object the CPU is currently targeting.
- `ai_recovering` - If the CPU is currently recovering or not.
- `temp_level` - The CPU’s difficulty level (1-9).

::: construction

This needs a full guide.

There are variables and constants like `ai_state == AS_ADVANTAGE` that need to be documented.

:::