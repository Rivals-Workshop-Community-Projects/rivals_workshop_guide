# Objects and Instances

When programming, it's convenient to cluster data into structures based on the *things* in the game world. A character
structure owns variables for its health, position, movement attributes, etc., while articles, hitboxes, and even the
stage have their own variables.

Most of a character's code works with the character's own variables, but you'll need to reference others to affect them.

An *object* is a type, like "Character" or "Hitbox" or "Cat".

An *instance* is an example of a type, like "the Zetterburn I'm playing now" or "the hitbox I created from my
ftilt" or "my cat, Rosa".

Instances are made from objects. Instances contain variables, like my Zetterburn's current percent, and their object
determines what variables they have, and how Rivals uses them.

## Available Objects

- `oPlayer` (Characters)

- `pHitBox`
- `pHurtBox`

- `obj_article1`
- `obj_article2`
- `obj_article3`
- `obj_article_solid`
- `obj_article_platform`

- `hit_fx_obj` (Visual effects created on hit)

- `oTestPlayer` (Characters while in playtest mode, found on the character select screen or workshop screen.)

## Basic Usage

`instance_id = instance_create(x, y, object)` creates a new instance of the object.

`instance_destroy(instance_id)` destroys the instance with that id. Be careful with this. It's usually best to let
articles destroy themselves at the end of their `update` script, so they don't disappear in the middle of doing
something. `instance_destroy()` with no arguments destroys the current instance, same as `instance_destroy(self)`.

You can access variables from other instances with `.` syntax, such as:

```gml{2}
vortex = instance_create(x, y-30, "obj_article1")
vortex.vsp = -5
```

## Perspective

Scripts are always run from the perspective of some instance, often the character instance. You can reference the current instance
with `self`, though that's rarely needed.

The [with](with.md) structure temporarily changes the perspective to an instance, or run code from the
perspective of *all* instances of a given object.

### Perspective Effects

Perspective is important for some functions:

- Fetching functions (`asset_get`, `sound_get`) need to be of the perspective of the resource's character or an instance
that character owns, such as their article or hitbox.

- `sound_play` panning depends on the location of the caller.
