# Advancing Frames

::: construction

This page is for principles on the changes from one frame to the next.

Tbh, the organization for all the animation stuff is pretty bad. If you have better ideas, please let me know. The
challenge is to make it sensibly categorized **and** most important content first **and** naturally build on previous
sections.

\
Things I'd still like to cover:

- Breaking versus maintaining clusters for smoothness
- When to redraw versus copy and move
- A full guide on workflow, keyframe use, and drafting

:::

## Follow Through and Overlapping action

Soft parts of the character drag behind a character's movements, and keep moving after the character stops.

This is most visible with details like hair or clothes.

When something long and soft, like a scarf or tentacle, is pulled back and forth, the drag can make it take a wavy S
shape.

[Short Video Guide](https://youtu.be/4OxphYV8W3E?t=7)

## Subpixel animation

<cimg src="https://saint11.org/img/pixel-tutorials/Subpixel.gif" caption="Tutorial by saint11"/>

For subtle animations like an idle, there may be times when moving a full pixel is too big a movement, making things
look jumpy.

While you can't change a fraction of a pixel, you can use tricks to make the change less jarring.

![](https://c10.patreonusercontent.com/3/eyJ3Ijo2MjB9/patreon-media/p/post/7652033/9f7bd6861ee14f728f5e937633c89fb5/1.gif?token-time=1618895929&token-hash=HKv38JXDijXYlhnPnFOH57gsKypPS-29kO-HzcTiJAc%3D)

<img src="https://i.pinimg.com/originals/32/41/6c/32416c5168f35cafda9047a40350bc85.gif" height=200 />

<img src="https://images-ext-2.discordapp.net/external/yyAlwiDC6Eg9e1hyuBV6KVh5a11if5VGwWOw_bKLrLY/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZjhmODRjLWZiMzYtNGNmYi1iYzg4LTc2YmMyZDMxNmY2N1wvZGNyYzg0Zy1mNGFkOWIzZS01NTNhLTRkMTYtOGYxZS0wYjIxYTE0MDM1YjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ww6vr-vCA5-qVHSzek7YTwdBrwXAyhS4Bab3KLuMW60/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6f8f84c-fb36-4cfb-bc88-76bc2d316f67/dcrc84g-f4ad9b3e-553a-4d16-8f1e-0b21a14035b2.gif?width=300&height=300" />

\
\
<img src="https://tinywarriorgames.com/wp-content/uploads/2019/01/subpixel-bad.gif" height=200/>
<img src="https://tinywarriorgames.com/wp-content/uploads/2019/01/subpixel.gif" height=200/>

::: construction

I'd like examples from rivals characters here

:::

::: sources

[Saint11](https://saint11.org)

[tinywarriorgames](https://tinywarriorgames.com/2019/01/04/game-development-pixel-art-sub-pixel-animation/)

[doa687](https://www.deviantart.com/doa687/gallery)

:::
