# Advancing Frames

This page is for principles on the changes from one frame to the next, like when you're adding in-between frames to
smooth things.

## How Many Frames?

*As many as it needs.*

There's no fixed framerate that is "good enough" when animating, the goal is to find a middle ground between looking
choppy, and taking too long to animate.

A good way to find that point is
by [starting with few frames, and gradually adding in-betweens as needed](workflow.md#starting-with-low-framerate) to
make the animation look smooth.

::: quote

Most attacks in rivals can get away with very few total frames. A simple punch can have as few as 5 or even 4 animation
frames.

You should try to optimize your development by using as few frames as possible to [smoothly] convey a motion.

[This may actually end up making your character look better.](anticipation_action_recovery.md#fast-transitions)

Here is the jab animation of a character I'm working on currently, as an example:

<img src="https://media.discordapp.net/attachments/659932047741157406/891534467699712070/jab.gif" height=100>

This loop of 2 punches uses only 8 frames, because the attack is fast, cancellable and repeatable. This is all that's
necessary to make it look smooth and clear in-game.

~ Trail Mix (paraphrased)

:::

## Redrawing or Adjusting

[Communicating with the keyframes is very important](pose.md), and each keyframe should be drawn from scratch for
maximum impact and readability.

However, when adding in-betweens, you can save time by copy-pasting the neighboring frames and adjusting to show the
movement.

Be careful of making the character look stiff, static, or robotic.

You can look at the animations of character's you like for reference of how much they move between each frame.

<cimg src="https://media.discordapp.net/attachments/722892672347668491/895647290696548423/Virgo_FSmash_clone1.gif?" height=250 caption="'Yes, I know' - Iguanadont"/>

## Follow Through and Overlapping action

Soft parts of the character drag behind a character's movements, and keep moving after the character stops.

This is most visible with details like hair or clothes.

When something long and soft, like a scarf or tentacle, is pulled back and forth, the drag can make it take a wavy S
shape.

[Short Video Guide](https://youtu.be/4OxphYV8W3E?t=7)

<cimg src="https://media.discordapp.net/attachments/895523201784897578/895524392296153148/claire_fstrong.gif" height=100 caption="Follow through on scarf - by Mr Nart" />

<cimg src="https://media.discordapp.net/attachments/722892672347668491/895617593103220736/keking.gif" height=100 caption="By Bar-Kun"/>

## Subpixel animation

<cimg src="https://saint11.org/img/pixel-tutorials/Subpixel.gif" caption="Tutorial by saint11"/>

For subtle animations like an idle, there may be times when moving a full pixel is too big a movement, making things
look jumpy.

While you can't change a fraction of a pixel, you can use tricks to make the change less jarring.

<cimg src="https://media.discordapp.net/attachments/722892672347668491/895625617687592992/gunslinger.gif" height=200 caption="By NyazureDreams"/>

<cimg src="https://i.pinimg.com/originals/32/41/6c/32416c5168f35cafda9047a40350bc85.gif" height=200 caption="from Metal Slug"/>

<cimg src="https://images-ext-2.discordapp.net/external/yyAlwiDC6Eg9e1hyuBV6KVh5a11if5VGwWOw_bKLrLY/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZjhmODRjLWZiMzYtNGNmYi1iYzg4LTc2YmMyZDMxNmY2N1wvZGNyYzg0Zy1mNGFkOWIzZS01NTNhLTRkMTYtOGYxZS0wYjIxYTE0MDM1YjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ww6vr-vCA5-qVHSzek7YTwdBrwXAyhS4Bab3KLuMW60/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6f8f84c-fb36-4cfb-bc88-76bc2d316f67/dcrc84g-f4ad9b3e-553a-4d16-8f1e-0b21a14035b2.gif" height=300 caption="by doa687"/>

\
\
<cimg src="https://tinywarriorgames.com/wp-content/uploads/2019/01/subpixel-bad.gif" height=200 caption="No subpixel animation"/>
<cimg src="https://tinywarriorgames.com/wp-content/uploads/2019/01/subpixel.gif" height=200 caption="With subpixel animation - By tinywarriorgames.com"/>

::: sources

[Saint11](https://saint11.org)

[tinywarriorgames](https://tinywarriorgames.com/2019/01/04/game-development-pixel-art-sub-pixel-animation/)

[doa687](https://www.deviantart.com/doa687/gallery)

:::
