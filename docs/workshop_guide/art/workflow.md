# Art Workflow

Workflow is very personal. Two modders might have very different processes, but have the same work speed and quality.
This section will give some advice and ideas to help you find what works for you.

## How to put an Animation in Rivals

The most fundamental thing - how to draw something and see it in game?

- You put an evenly spaced horizontal sprite sheet into your sprite's directory, and name it `[name]_strip[frames].png`
  like `walk_strip8.png` for an 8 frame walk animation.  \
  [The Assistant can do this for you](/assistant/animation_handling.md)
- You adjust the [`scripts/load.gml`](../programming/reference/scripts/init_and_attack_scripts.md#load-gml) with the
  origin point of the character on the sprite
  sheet. [More details.](../programming/reference/scripts/init_and_attack_scripts.md#load-gml)  \
  Some people make all their sprites the same size and origin to avoid this, or work in one file.  \
  *The Assistant can't do this yet.*
- If it's an attack animation you also need:
    - A hurtbox animation - A green silhouette of the hittable parts of the character during animation. Named
      like `dair_hurt_strip5.png`.  \
      [The Assistant can do this for you.](/assistant/animation_handling.md#hurtbox-generation)
    - Adjust the [attack script](../programming/reference/scripts/init_and_attack_scripts.md#initializing-attacks) to
      match the new window timing.  \
      For example, if you add an extra frame to the startup window of the animation, you'd need to
      increase `AG_WINDOW_ANIM_FRAMES` by 1 for the startup window, and `AG_WINDOW_ANIM_FRAME_START` by 1 for all later
      windows.  \
      [The Assistant can do this for you.](/assistant/animation_handling.md#window-tags)

## Aseprite Workflow

Though much of this will apply to any editor, some is Aseprite specific, the most common art tool for Rivals.
See [Aseprite setup](../quickstart/software_setup.md#aseprite-art-editor) for installation.

### Assistant Export

The
Assistant [automates the steps between saving an aseprite file and seeing the changes in game.](/assistant/animation_handling.md)
Depending on your workflow, that might be a significant time save, particularly if you're doing
many [iterations](#iteration) and testing your animations while they're still rough.

If [The Assistant](/assistant) is set up and running in your editor, and you have supplied your aseprite path to the
config, then saved files in an `/anims` director will automatically export to properly named and sized sprite
sheets. [Other features](/assistant/animation_handling.md) can let you skip other steps.

### Layers

Layers are very powerful! While it's possible to make an animation on just one layer, organizing into layers quickly
shows its worth.

> Arm looking a little too far back? Just drag it forwards and make some adjustments at the shoulder.

How exactly you work with layers is quite personal, but here are some ideas, roughly in order from bottom to top:

- Reference materials can go at the bottom for you to draw over.
    - A Scaled down sprite of a similar character (but be careful if you want to keep rivals proportions).
    - Zetterburn, or whatever rivals character looks most similar to yours.
    - A line representing the floor is common.
- It's often helpful to make [rough sketches](#starting-with-low-detail) before animating. If you make them in Aseprite,
  you can make them a low layer to draw over.
- When drawing your character, it's common to separate the parts that could be in front of or behind another
    - Torso
    - Limbs
    - Weapons, hair, tail, scarf, or whatever accessories your character has.
- [Smears](pose.md#showing-movement) and VFX often go on top.
- With
  the [Assistant, you can automatically generate hurtboxes from some special layers](/assistant/animation_handling.md#hurtbox-generation)

\
With many layers, you'll save time naming and organizing them well, so you can quickly find what you're looking for.

<cimg src="https://media.discordapp.net/attachments/722892672347668491/895494267148042280/unknown-177.png" height="70" caption="Muno demonstrates what not to do"/>

### Multiple Animations per File?

This may seem strange, but many modders prefer to draw multiple animations, sometimes *all* animations, in a single
Aseprite file.

In order to separate animations, use
tags. [The Assistant can understand them to still properly export the animations.](/assistant/animation_handling.md#animation-tags)

This lets you quickly skip between animations to see other poses, and means all sprites will share the same `load.gml`
data.

With many animations, it may get bulky and harder to navigate. Some modders split into a few aseprite files for
organization (such as movement, normals, aerials, specials).

## Iteration

Art is hard. Trying to go straight to a finished product will usually result in worse quality than gradually improving
it and reflecting along the way. Each stage of work and review is an "iteration."

Beginning modders should especially make sure to do this, because they're the most likely to find serious problems in
their animations, like strange proportions, unreasonable attack sizes.

### Concept and Identity

This bit is a bit vague, and should later link to a WIP design section. Thinking about some of these questions might
help you refine your idea.

How does the animation reinforce the feeling and personality of the character?

For attacks:

- How does the attack contribute to the character?
- How would players think about the attack?
- If you were watching a combo video of your character, how would the attack contribute to it?
- How does it compare to similar attacks from other characters?

### Starting Rough

A first priority is quickly getting a sense of how the animation will look when it's done, so you can improve your plan.
To do this, you usually want to start *very* rough, test, and clean up later as you gain confidence with the current
plan.

\
Any time you're unsure, you can test the animation in game, get feedback, or leave the animation for a while and come
back when you have a more complete picture of the character. Even an extremely rough, 3 frame scribbled animation can be
tested in game.

#### Starting with Low Detail

Your rough drafts don't need to have good [linework](lines.md), [color](color.md) or [shading](shading.md), they just
need to give a rough sense of the animation.

People have very different drawing processes, so see what you enjoy.

##### Stick figures, scribbled animations, and rough outlines

These let you very quickly visualize the animation. They're most often done on a single layer, put on the bottom for
reference later.

<cimg src="https://media.discordapp.net/attachments/659932047741157406/894329591114661978/utilt.gif" height=150 caption="by NoArms"/> 
<cimg src="https://media.discordapp.net/attachments/722892672347668491/895668374976221244/ftilt_sketch.gif" height=150 caption="By Bernard0"/> 
<cimg src="https://images-ext-1.discordapp.net/external/E9PNZjGBTAF_sOIl1xqEjEVXBIqqDRIvS0hL8CDVZto/https/media.discordapp.net/attachments/720710900838957067/844397038853554205/AWJ_-_dstrong.gif" height=150 caption="by Reighoul"/>

##### Color Blocking

Color blocking is making a silhouette of the animation, maybe with a larger pen.

This can be done on one layer and drawn over, or could use your normal [layer setup](#layers) and later be polished
toward the final product.

Color blocking is sometimes done as a second drafting step after something rougher.

[Demonstration](https://youtu.be/PEyQP5_CYf0?t=1269)

<cimg src="https://media.discordapp.net/attachments/659932047741157406/894328906474225724/image0.gif" height=300 caption="Color blocking with vfx - by FuZZ"/>

<cimg src="https://media.discordapp.net/attachments/722892672347668491/895690574554873876/BACKWARDS_AERIAL.gif" height="150" caption="by Bar-Kun"/>

<cimg src="https://media.discordapp.net/attachments/722892672347668491/895697029131567114/dstrong_proto-1.gif" height=250 caption="Daora by Opengunner"/>

\
As you become more confident in the current draft, you can start to clean it up and move towards the final product. If
you did the draft on all one layer, you should now [start working in multiple layers on top.](#layers)

\
Anything particularly hard to draw, like [secondary motions](advancing_frames.md#follow-through-and-overlapping-action),
should be left till late in the process since they're the most expensive to change.

#### Starting with Low Framerate

You don't actually need many frames to see what an animation will look like. The most important frames are "Key Frames",
which are usually the poses for [Anticipation, Action, and Recovery](anticipation_action_recovery.md). These frames are
very important, and should be [posed](pose.md) well and drawn from scratch.

When you're starting an animation, it is very common to start by only drawing these critical frames, and to add "
in-between" frames later as they're needed to make the animation more
fluid. [The assistant tries to make this easy by letting you automatically adjust window timings.](/assistant/animation_handling.md#window-tags)

[There's a whole page on adding in-betweens.](advancing_frames.md)

<cimg src="https://images-ext-1.discordapp.net/external/ARUMNWr_V0kqEZn0-jYRd-CjiMqOA9oQKPqlCiocLTI/https/media.discordapp.net/attachments/722582229968093294/806591295904153650/dattack_new.gif" height=300 caption="A low framerate draft - by Reighoul"/>

::: sources

[Official Docs](https://rivalsofaether.com/sprites/)

[AdamCYounis](https://www.youtube.com/watch?v=PEyQP5_CYf0)

NoArms

:::
