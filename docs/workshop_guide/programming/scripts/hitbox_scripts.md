# Hitbox Scripts


## hitbox_init.gml
Called when your character creates a hitbox, from the hitbox's perspective.

```gml
if attack == AT_DSPECIAL{
   if hbox_num == 3 {
        can_hit_self = true;
   }
}
```


## hitbox_update.gml
Called every frame for each of the character’s hitboxes, from the hitbox's perspective.

```gml
if attack == AT_DSPECIAL {
    if hitbox_timer % 2 == 0 {
       	spawn_hit_fx(x - 40 + random_func(10, 60, true), 
       	             y - 40 + random_func(10, 60, true), 
       	             hit_fx_create( sprite_get( "dspec_fx" ), 10)
       	             )
    }
}
```