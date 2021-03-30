# Event Scripts

## Every frame

### update.gml

Called every frame. This is the standard script for adding constant behavior to the game.

```gml
if state == PS_TECH_GROUND and state_timer == 1 {
    sound_play(sound_get("woah"))
}
```

### attack_update.gml

Called every frame when the character is attacking. The `attack` variable contains the current attack type.

```gml
if (attack == AT_NSPECIAL || attack == AT_FSPECIAL || attack == AT_DSPECIAL || attack == AT_USPECIAL){
    trigger_b_reverse();
}

if attack == AT_DSPECIAL {
    hsp = 0
}
```

## In Response

### set_attack.gml

Called at the beginning of every attack. Used to replace the attack in special conditions.

```gml
if attack == AT_DSPECIAL && free {
	set_attack(AT_DSPECIAL_AIR)
}
```

### death.gml

Called when your character dies. Useful for resetting variables or deleting articles.

```gml
laser_charge = 0
if my_cloud != noone {
    my_cloud.should_die = true
}
```

### Hit events

To change the knockback given, modify `orig_knock` on the hit character.

You can disable the purple kill effect by setting `should_make_shockwave` to `false` on the hit character.

#### hit_player.gml

Called when you hit another character with any hitbox.

- `hit_player_obj` - the oPlayer instance that was hit.
- `hit_player` - the player number of the hit character (player 1, player 2, etc).
- `my_hitboxID` - the hitbox you hit them with.

```gml
if my_hitboxID.attack == AT_NAIR {
    can_jump = true;
}
```

#### got_hit.gml

Called when you are hit by any hitbox.

- `hit_player_obj` - *Misleading.* Whatever instance created the hitbox *that hit you.* *May not be an oPlayer
  instance.*
- `hit_player` - *Misleading*. The player number of the `hit_player_obj` (player 1, player 2, etc).
- `enemy_hitboxID` - the hitbox you were hit with.

```gml
used_uspecial = false
lightning_buff_active = false
```

### Parrying events

#### parry.gml

Called when you parry a hitbox.

- `hit_player_obj` - *Misleading.* The player object whose hitbox you parried.
- `hit_player` - *Misleading.* The player number of the `hit_player_obj` (player 1, player 2, etc).
- `enemy_hitboxID` - the hitbox you parried.

```gml
sound_play(sound_get("ohno"));
shake_camera(5, 12)
```

#### got_parried.gml

Called when your hitbox is parried.

- `hit_player_obj` - *Misleading.* The player object who parried your hitbox.
- `hit_player` - *Misleading.* The player number of the `hit_player_obj (player 1, player 2, etc).
- `my_hitboxID`- the hitbox that was parried.

```gml
if (my_hitboxID.attack == AT_USPECIAL){
  state = PS_PRATFALL;
}
```

## User Events

`user_event[0 – 15].gml`

These scripts can be called manually with the `user_event()` function, making them similar to
writing [`define` functions](../../learning_path/functions.md#making-functions-with-define) that are accessible from multiple
files.

::: construction

This is made largely obsolete by the workshop assistant, pending public release.

:::