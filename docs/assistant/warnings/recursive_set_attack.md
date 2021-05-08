# `recursive_set_attack`

Calling `set_attack` inside `set_attack.gml` can cause an infinite loop and crash.

```gml
//set_attack.gml
set_attack(AT_NAIR) // WARN: Risk of crash. in `attack_set.gml` you can just write `attack = x` instead of `set_attack(x)`.
```

## Resolution

Assign `attack` instead. `set_attack(AT_NAIR)` could be replaced with `attack = AT_NAIR`. 

If the `set_attack.gml` logic is particularly complicated you may need to reorder things..