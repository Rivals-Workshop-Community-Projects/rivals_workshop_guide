# Posing

# Silhouette

Rivals characters are seen in a variety of palettes and stage backgrounds. Distinct silhouettes are important to make
them clear at a glance.

<img src="https://miro.medium.com/max/500/1*9fCU18CzaD3GYgIqMd42Gw.png" height=250 alt="street fighter silhouettes">

The most important time for obvious silhouettes is in the [anticipation](anticipation_action_recovery.md#anticipation)
frames of a powerful attack. The other player has only a handful of frames to understand the attack is coming.

# Showing Movement

In most frames of a character's animations, the character
is [about to move, moving, or recovering from a movement](anticipation_action_recovery.md).

Communicating that in the pose can be difficult to learn, but will create much more readable and attractive animations.

## Gesture lines

Bodies in motion aren't perfectly balance. Even when taking a step forwards, the center of gravity moves off of the back
foot to fall onto the front foot.

<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/060c5b2a-d29c-4413-a193-8ea0726072c5/db07u5s-856eca40-086d-4c53-ad23-a59b63bf98cb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDYwYzViMmEtZDI5Yy00NDEzLWExOTMtOGVhMDcyNjA3MmM1XC9kYjA3dTVzLTg1NmVjYTQwLTA4NmQtNGM1My1hZDIzLWE1OWI2M2JmOThjYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DJ9W9Zm9zKJ8uTvSEJMMbCCucVVSdOLXIeTZEp7IcT0" height=250 alt="gesture lines">

Gesture lines can help think about the shape of a pose. An idle position usually has a comfortable vertical gesture
line, while a strong attack might have a sharply curved, dramatic line.

For most animations, the whole body should move, and the gesture line should change noticeably.

## Exaggeration

::: quote

Exaggeration is the name of the game. Fighting games are fast; you don’t have time for subtleties and nuances. Everything has to be shown clearly and quickly.

...

This rule holds true for so many parts of fighting game development: GO CRAZY AT FIRST.

It’s so much easier to tone something down than it is to build it up after the asset has been made.

~ Dan Fornace

:::

Whenever something needs to be clear to the players, amplify it. It's a cartoon game. Readability and power matter much more than realism.

\
While body proportions shouldn't change for no reason, they *should* change to emphasize an action.
In Melee, Mario's fist grows noticeably during his forward-air to improve readability and power.

<img src="https://ssb.wiki.gallery/images/5/5b/MarioFairSSBM.gif" height="150" alt="melee mario fair">

::: quote

<img src="https://cdn.discordapp.com/attachments/630864417671741499/674667946492297216/unknown.png" height=250 alt="amber exaggeration">

Amber was mostly broken proportions in her animations, just at least not to the point where you really notice the broken proportions.

~ BountyXSnipe

:::

## Squash and Stretch

![](https://miro.medium.com/max/700/1*5G9UyVH76F2PewgFkBRkZA.png)

Objects squash as they stop moving, change directions, or prepare to move, like a landing water balloon, or a lion about
to pounce.

Objects moving fast stretch in the direction they're moving.

Softer things, or greater movements, have more deformation.

![](https://miro.medium.com/max/700/1*ilBeci2TEyjdulq81u9d9w.png)

[Short Video Guide](https://youtu.be/haa7n3UGyDc?t=11)

## Arcs

When drawing a motion from one point to another, the simplest way our brains generate is a straight line, but this ends
up looking very strange and artificial.

The vast majority of movements naturally follow a curve, rather than a straight line.

[Short Video Guide](https://youtu.be/I1_tZ9LhJD4?t=8)

## Smears

Characters sometimes move so fast that they change poses in a single frame. To make these movements visible, smears show
the blur where the movement took place.

Smears are especially important for sweeping attacks to show the hitbox. Smears imply hitboxes, because any movement
that fast would create a strong impact.

Smears should lead in an [arc](pose.md#arcs) from near the previous frame's location to the
current location.The tail end of a smear usually reaches near the previous frame's location.

Smears are not outlined, and grow thinner closer to the tail.

<img src="https://i.gyazo.com/957ef2ddb5c9c9a83d87738df034b2a1.png" height=250 alt="wrastor arc">
<img src="https://i.gyazo.com/b9be1ecfb42b5dd959ec2194a338cacd.png" height=250 alt="sylvanos arc">

Many smears dissipate over a few frames, leaving fading traces in place.

<img src="https://i.gyazo.com/3cc98ef8688b74a40ec142621b7ddbd2.png" height=250 alt="zetter smear">

::: construction

This only lightly touches most subjects. I'd like more examples and explanation.

:::

::: sources

[AlanBeckerTutorials](https://www.youtube.com/channel/UCAxYH9DWyVmMpS9NgyxoTFQ)

[Damainikaz](https://www.deviantart.com/damaimikaz)

[Dan Fornace](https://fornace.medium.com/fighting-game-design-with-dan-fornace-the-power-of-silhouettes-915fde48318f)

:::
