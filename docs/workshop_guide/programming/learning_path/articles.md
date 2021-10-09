# Articles

*This builds
on [the excellent guide by Mawral.](https://ko-fi.com/post/RoA-Workshop-Guide--Explaining-Articles-O5O82YTXU)*
Thank you Mawral <3

![](https://storage.ko-fi.com/cdn/useruploads/display/ce89075a-c714-4421-b121-1d015e6b7942_articles.png)

Sometimes you want an [instance](objects_and_instances.md) other than your character.

You grow a tree, have an owlfriend, drop bear traps, or throw a bouncy saw blade.

Sometimes you can handle articles as simple projectiles. Other times it's okay to make them part of your character,
tracking their location in a variable and using a draw script.

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

You create instances of articles with [instance_create("obj_article1"),](https://rivalsofaether.com/instance_create/) or
whichever article type. Note that this is the *only* time when you need to put the article object name in quotes.

```gml{4}
//attack_update.gml
if attack == AT_DSPECIAL {
  if window == 2 && window_timer == 1 && hitpause == false { // 'hitpause == false' prevents it from running multiple times if frozen in hitpause
    bomb = instance_create(x, y, "obj_article1") // Optionally save a reference to the instance in a variable.
  }
}
```

## Scripting Articles

Each article type has its own scripts [detailed here](../reference/scripts/article_scripts.md).

### Article Variables

Articles have the following built-in variables:

*Usually constant:*

- `player_id` - The character instance that owns the article.
- `can_be_grounded` - Determines if the article follows platforms when free == false. `false` by default.
- `ignores_walls` - Determines if the article moves through solid objects rather than colliding. `true` by default.
- `hit_wall` - Is true if the article hit a wall due to its own movement.
- `uses_shader` - Whether the player's shader recolors the article.

*Changing:*

- `hsp` - The horizontal speed of the article.
- `vsp` - The vertical speed of the article.
- `free` - Whether the article is in the air or not.
- `spr_dir` - The direction the article is facing: `1` is right, `-1` is left
- `hitstop` - The frames remaining in hitpause. Hitpause automatically prevents movement.

## Referencing Articles

[`instance_create()`](https://rivalsofaether.com/instance_create/) returns the id of the newly-created article, which
you can save in a variable to access later.

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
do this, you should use a [`with`](with.md) statement, combined with a check for the article's `player_id`.

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

Destroying articles without organization can make lead to bugs and strange behaviors.

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

When using an article that might have been destroyed,
use [`instance_exists(instance_id)`](https://docs2.yoyogames.com/source/_build/3_scripting/4_gml_reference/instances/instance_functions/instance_exists.html)
to check.

### Manually

You can destroy articles directly using [`instance_destroy(article_id)`](https://rivalsofaether.com/instance_destroy/)
or `instance_destroy()` if you're in the article's perspective.

```gml
// update.gml
// destroy the referenced article when the player presses 'shield'.
if instance_exists(my_player_article) && shield_pressed {
  instance_destroy(my_player_article)
}
```

You can also use the [`with`](with.md) statement to destroy all articles at once.
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

You must handle article collisions manually. This can be the most difficult part of setting up a
working article. There are several different ways to handle article collisions, and so this guide will outline the most
common options.

#### place_meeting Collisions

Use
the [place_meeting()](https://docs2.yoyogames.com/source/_build/3_scripting/4_gml_reference/movement%20and%20collisions/collisions/place_meeting.html)
function. This is the simplest way to check for a collision in an article script. This function can cause a lot
of slowdown if it's used too frequently.

Objects you may want to check for include:

- `pHurtBox` (hurtboxes) For when you need precise collision detection.
- `oPlayer` (players) When you need to check for players' platforming boxes instead of their hurtbox, or when you don't need precise collisions
  detection. You should also check their 'clone' variable to see if they are a Forsburn clone or not.)
- `pHitBox` (hitboxes)
- `asset_get(par_block)` (walls and floors)
- `asset_get(par_jumpthrough)` (platforms)

#### Manual Collisions

Make a 'manual' collision detection by comparing `x`, `y` and `char_height` values, or
using [`point_distance()`](https://docs.yoyogames.com/source/dadiospice/002_reference/maths/vector%20functions/point_distance.html)
. This method is fast, and recommended for making articles that act like 'fields', e.g. Wrastor's slipstream.

#### Hitbox Collisions

Create a projectile with [`create_hitbox()`](https://rivalsofaether.com/create_hitbox/), save the instance id, and move
the projectile's coordinates to overlap the article in `article[name]_update.gml`.

This is the most complex method, but also the most accurate, and faster than `place_meeting()`.
You should use this for articles that act when opponent's touch them, or may need to be 'parried' by
opponents.
If the projectile disappears, you can assume something happened that would destroy the article.
You can use your character's `hit_player.gml` script to check when the article collides with a player's hurtbox.

::: construction

- Common article features (hopefully powered by the standard library)

- Player articles

- Code examples of each collision detection method

:::

[Official docs](https://rivalsofaether.com/articles/)
