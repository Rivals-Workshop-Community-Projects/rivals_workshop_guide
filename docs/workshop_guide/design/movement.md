# Movement

Getting attributes tuned right is more important than it might seem, and has a huge influence on how the character
feels.

::: construction This is all rough notes.
:::

## Air acceleration

- Improves recovery by halting and reversing direction faster.
- Aids combat by letting you adjust position quickly during aerials, to extend combos, poke and retreat, or dodge and
  punish.

## Pratfall accel

Relevant both when directly entering pratfall (such as at the end of a movement special), and when parried during an
aerial. Pratfall accel can't be made too high (higher than 0.6-7?)  or it will negate parries.

## Air speed

- Very helpful for horizontal recovery Characters with higher fall speeds or lower jumps naturally travel less
- Allows cha horizontal distance before landing. Increasing air speed can compensate.

## Air Friction

Air friction does not decrease your air speed. It determines how quickly you slow down when you're not holding any
horizontally on the control stick.

- High acceleration + high friction means a character will change velocity quickly in all situations.
- High acceleration + low friction means a character will respond quickly to the player's controls, but be very slow to
  decelerate if the player lets go.
- Low acceleration + high friction means a character will respond slowly to the player's controls, but be very quick to
  decelerate if the player lets go. This would lead to an unintuitive situation where a player trying to slow down by
  holding the opposite direction will take longer than simply allowing friction to take over.
- Low acceleration + low friction means a character will change velocity slowly in all situations.

Low air friction means a character will not slow down as much if the player attempts to use a neutral aerial when
moving, and will cause them to travel a bit further during combos.

High air friction helps resist being KO'd to a degree, and it may be beneficial in some cases to slow to a stop quicker
without providing directional input.

https://www.ssbwiki.com/Air_friction

## Gravity

Gravity is a constant downward acceleration.

A character might have high gravity but low fall speed. They would still fall slowly, but reach that fall speed faster.

Hitstun gravity has a significant effect on how easy the character is to combo *todo how exactly*

## Initial dash

Dash dancing stuff

## Run

Chasing, keep away

## Air dodge length and jump squat timing

Important for wavedashing feeling consistent. Changing will make wave dash inputs different than every other character.

> Any speed boost is really good. +speed buffs basically every attack.
> ~ Mawral

```gml
walk_speed = 3.25; // 3 - 4.5. The maximum speed you can achieve while walking, in pixels per frame
walk_accel = 0.35; // .2 – .5. The speed gained per frame while walking

initial_dash_time = 12; // 8 – 16. The number of frames in your initial dash
initial_dash_speed = 7.2; // 4 – 11. The speed of your initial dash in pixels per frame.
dash_speed = 6.7; // 4.75 – 9. The speed of your run in pixels per frame
dash_turn_time = 10; // 8 – 20. The number of frames it takes to turn while running
dash_turn_accel = 1.3; // .1 – 2. The acceleration applied when turning while running
dash_stop_time = 4; // 4 – 6. The number of frames it takes to stop while running
dash_stop_percent = .35; // .25 – .5. the value to multiply your hsp by when going into idle from dash or dashstop

ground_friction = .5; // .3 – 1. Natural deceleration while on the ground

moonwalk_accel = 1.4; // 1.2 – 1.4.	The acceleration to apply while moonwalking

jump_start_time = 5; // 5 for all characters. The number of frames of jumpsquat minus one
short_hop_speed = 6.5; // 4 – 7.4	The vsp applied when shorthopping
jump_speed = 10; // 7.6 – 12. The vsp applied when fullhopping
leave_ground_max = 7; // 4 – 8. The maximum hsp you can have when you go from grounded to aerial without jumping
max_jump_hsp = 6.5; // 4 – 8. The maximum hsp you can have when jumping from the ground

max_djumps = 1; // The max number of double jumps you can use.
djump_speed = 10; // 8 – 12 (-1 for Absa). The vsp applied when double jumping
jump_change = 3; // 3 for all characters. The hsp applied if left or right is held when jumping. Will not slow you down if you’re already going faster. When reversing your momentum with a double jump, this is the maximum hsp you can have

air_accel = .35; // .2 – .4. The hsp acceleration applied when you hold left or right in a normal aerial state
prat_fall_accel = .85; // .4 – 1.5.	A multiplier to your normal horizontal aerial acceleration: 1 = normal; 0 = no acceleration
air_max_speed = 5.3; //3 – 7. The maximum hsp you can accelerate to when in a normal aerial state
air_friction = .02; // .02 – .07. Natural deceleration applied while in the air. Also applies while in hitstun

walljump_hsp = 6; // 4 – 7. The horizontal speed to apply while walljumping, in pixels per frame
walljump_vsp = 9; // 7 – 10. The vertical speed to apply while walljumping, in pixels per frame
walljump_time = 24; // 18 – 32.	The number of frames the walljump state takes. Normally 32, but some characters have shorter values

max_fall = 10; // 8 – 11. The maximum vsp you can accelerate to while falling normally
fast_fall = 13; // 11 – 16. The vsp applied when fastfalling

gravity_speed = .5; // .3 – .6. The gravitational acceleration applied in non-hitstun aerial states
hitstun_grav = .5; // .45 – .525. The gravitational acceleration applied in hitstun

land_time = 4; // 4 – 6. The number of frames in your normal landing state
prat_land_time = 10; // 3 – 24. The number of frames in your prat land state
wave_land_time = 8; // 6 – 12 usually 8. The number of frames your waveland state lasts
wave_land_adj = 1.35; // 1.2 – 1.5. The multiplier to your initial hsp when wavelanding. Usually greater than 1
wave_friction = .05; // 0 – .15. Grounded deceleration when wavelanding

knockback_adj = 1.0; //.9 – 1.2. The multiplier to knockback dealt to you: 1 = default value; higher values = lighter character; lower values = heavier character
```