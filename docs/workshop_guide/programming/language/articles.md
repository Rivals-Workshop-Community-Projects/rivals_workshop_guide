---
next: ../scripts/
---

# Articles

*This builds on [the excellent guide by Mawral.](https://ko-fi.com/post/RoA-Workshop-Guide--Explaining-Articles-O5O82YTXU)*
Thank you Mawral <3

![](https://storage.ko-fi.com/cdn/useruploads/display/ce89075a-c714-4421-b121-1d015e6b7942_articles.png)

Sometimes you want an [instance](objects_and_instances.md) other than your character. 

You grow a tree, have an owlfriend, drop bear traps, or throw a bouncy saw blade. 

Sometimes these can be handled as simple projectiles. Other times it's okay to just make them part of your character, tracking their location and using a draw script.

If you have something with more complex behavior, it's probably easier to use an **article.**

\
Articles are mostly empty instances, that can be flexibly repurposed into almost anything. Modders have even made
ice-climbers style pseudo-characters with articles, though that's easier now with Player-Articles.

Being blank slates means that it can take a lot of code to define their behavior.

## Types of articles

There are five article objects:

- `obj_article1`
- `obj_article2`
- `obj_article3`
- `obj_article_solid`
- `obj_article_platform`

\
`obj_article1` through 3 are 'basic' articles with no special properties. You can do anything with these.

- `obj_article_solid` acts as a solid block (like Kragg's rock and pillar)
- `obj_article_platform` acts as a platform (like Shovel Knight's mobile gear). Be aware that these two can have issues
  interacting with players when you set their hsp or vsp to decimal values.

## Creating an Instance of an Article

Instances of articles are created with [instace_create("obj_article1"),](https://rivalsofaether.com/instance_create/) or whichever article type.
Note that this is the only time when you'll need to put the article object name in quotes.

```gml{4}
//attack_update.gml
if attack == AT_DSPECIAL { 
  if window == 2 && window_timer == 1 && hitpause == false { // 'hitpause == false' prevents it from running multiple times if frozen in hitpause
    bomb = instance_create(x, y, "obj_article1") // Optionally save a reference to the instance in a variable.
  }
}
```

### Creating an Instance from within a Non-Player Script

When creating an article from the perspective of a non-player, such as within an article or hitbox script, the new
article's `player_id` will be set incorrectly.

You need to either manually set the article's `player_id`, or use a [`with`](control_flow.md#with) statement to take the
player's perspective before creating the article.

```gml{3}
// article1_update.gml or hitbox_update.gml
var new_article = instance_create(x, y, "obj_article2")
new_article.player_id = player_id // Otherwise child's player_id would be the first article.
```

## Scripting Articles

Each article type has its own scripts [detailed here](../scripts/article_scripts.md).

### Article Variables

Articles have the following built-in variables:

*Usually constant:*

- `player_id` - The character instance that owns the article.
- `can_be_grounded` - Determines if the article follows platforms when free == false. `false` by default.
- `ignores_walls` - Determines if the article moves through solid objects rather than colliding. `true` by default.
- `hit_wall` - Is true if the article hit a wall due to its own movement.
- `uses_shader` - Whether the article is recolored by the player’s shader or not.

*Changing:*

- `hsp` - The horizontal speed of the article.
- `vsp` - The vertical speed of the article.
- `free` - Whether the article is in the air or not.
- `spr_dir` - The direction the article is facing: `1` is right, `-1` is left
- `hitstop` - The frames remaining in hitpause. Hitpause automatically prevents movement.

## Referencing Articles

[`instance_create()`](https://rivalsofaether.com/instance_create/) returns the id of the newly-created article, which
can be saved in a variable to access later.

[`instance_exists(instance_id)`](https://docs2.yoyogames.com/source/_build/3_scripting/4_gml_reference/instances/instance_functions/instance_exists.html)
returns `true` if the instance exists. You can use this to check if your player article variable has an article assigned
to it or not.

```gml
// init.gml 
my_player_article = noone;

// attack_update.gml 

// if an article doesn't exist yet, let the player create an article with dspecial. 
if !instance_exists(my_player_article) { 
  if attack == AT_DSPECIAL { 
    my_player_article = instance_create("obj_article1")
  }
} else { // if an article exists, make the article move upwards with uspecial.
  if attack == AT_USPECIAL {
    my_player_article.vsp = -5
  }
}
```

### Referencing all of a Character's Articles

Sometimes you may want to run code in every instance of an article created by a player, no matter how many they have. To
do this, you should use a [`with`](control_flow.md#with) statement, combined with a check for the article's `player_id`.

Using the `with` statement by itself will loop through *ALL* article instances, including articles that belong to other
players! Always match the article's `player_id` variable with the player's id variable to make sure your character only
affects their own articles.

```gml
//attack_update.gml
//taunt to make all of the player's article1s move downwards.
if attack == AT_TAUNT {
  with (obj_article1) {
    if (player_id == other.id) { // If the article belongs to you
      vsp = 5;
  } 
}
```

## Destroying Articles

### Safely

Destroying articles without organization can make things buggy and complicated.

To make sure the article doesn't disappear in the middle of doing something, it's good to let the article handle its own
destruction.

```gml
// article<name>_init.gml
lifetime = 0;
should_die = false

// article<name>_update.gml
lifetime++
if lifetime >= 200 {
  should_die = true
}

// or any file you want to destroy the article from
my_article.should_die = true

// the bottom of article<name>_update.gml
if should_die {
    instance_destroy() // Destroys the current instance.
    exit // optional. Makes the script stop at this point. Useful if you can't put this at the very bottom.
}
```

When using an article that could be destroyed,
use [`instance_exists(instance_id)`](https://docs2.yoyogames.com/source/_build/3_scripting/4_gml_reference/instances/instance_functions/instance_exists.html)
to check.

### Manually

You can destroy articles directly using [`instance_destroy(article_id)`](https://rivalsofaether.com/instance_destroy/)
or just `instance_destroy()` if you're in the article's perspective.

```gml
// update.gml
// destroy the referenced article when the player presses 'shield'.
if instance_exists(my_player_article) && shield_pressed {
  instance_destroy(my_player_article)
}
```

You can also use the [`with`](control_flow.md#with) statement to destroy all articles at once.
*Remember to match player ids so that you don't destroy other characters' articles.*

```gml
// update.gml
// destroy all your article1s when the player presses 'shield'.
if shield_pressed {
  with obj_article1 {
    if player_id == other {
      instance_destroy();
    }
  }
}
```

## Article Behavior

### Collisions

Article collisions must also be handled manually. For this reason it can be the most difficult part of setting up a
working article. There are a few different ways to go about article collisions, and so this guide will outline the most
common options.

#### place_meeting Collisions

Use
the [place_meeting()](https://docs2.yoyogames.com/source/_build/3_scripting/4_gml_reference/movement%20and%20collisions/collisions/place_meeting.html)
function. This is the simplest way to check for a collision in an article script. However, this function can cause a lot
of slowdown if it is used too frequently.

Objects you may want to check for include:

- `pHurtBox` (hurtboxes. For when precise collision boxes are needed.)
- `oPlayer` (when you need to check for players' platforming boxes instead of their hurtbox, or when precise collisions
  are not needed. You should also check their 'clone' variable to see if they are a Forsburn clone or not.)
- `pHitBox` (hitboxes.)
- `asset_get(par_block)` (walls and floors.)
- `asset_get(par_jumpthrough)` (platforms.)

#### Manual Collisions

Make a 'manual' collision detection by simply comparing x, y and char_height values, or
using [`point_distance()`](https://docs.yoyogames.com/source/dadiospice/002_reference/maths/vector%20functions/point_distance.html)
. This method is efficient, and recommended for making articles that act like 'fields', e.g. Wrastor's slipstream.

#### Hitbox Collisions

Create a projectile with [`create_hitbox()`](https://rivalsofaether.com/create_hitbox/), save the instance id, and move
the projectile's coordinates to overlap the article in article[name]_update.gml.

This is the most complex method, but also the most accurate, and more efficient than place_meeting(). It is recommended
for articles that can be triggered by opponents touching them, and for articles that may need to be 'parried' by
opponents. If the projectile disappears, you can assume something happened that would destroy the article. Likewise, you
can use your character's `hit_player.gml` script to check when the article collides with a player's hurtbox.

::: construction

common article features (hopefully powered by the standard library)

player articles

:::

[Official docs](https://rivalsofaether.com/articles/)