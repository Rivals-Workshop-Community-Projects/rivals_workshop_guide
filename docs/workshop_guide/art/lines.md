# Lines

Linework in pixel art is pixel art is [surprisingly nuanced](https://saint11.org/img/pixel-tutorials/Fundamentals2.gif).

## Jaggies

Jaggies are cases where a long pixel-art line isn't smooth. Because of the small resolution, a single pixel out of place
can look noticeably bad.

Jaggies only really matter for longer lines. Something like a fist doesn't have any lines long enough to look jagged.

![](https://i.imgur.com/S2dbRxm.gif)

### Straight Line Jaggies

![](http://www.derekyu.com/images/extras/straight_jag.gif)

Avoiding jaggies in straight lines is simple. If you imagine the line as a staircase, each step of the staircase must
have equal height or width.

### Curve Jaggies

Curved lines are harder to smooth. Imagine the line as a staircase again, but this time the slope of the staircase will
change.

To make the line appear smooth, the change in slope needs to be gradual, not jumping between high and low slopes.

![](https://saint11.org/img/articles/2/jaggies_fix.png)

[Saint11's explanation.](https://saint11.org/pixel_art_articles/article2/#step-3-fix-jaggies-and-add-detail:~:text=Imagine%20that%20the%20border%20or%20line,of%20pixels%20in%20each%20step.%20We)

It may be hard to notice jaggies at first, but they become easy to see and fix with practice.

## Antialiasing

[Antialiasing](https://saint11.org/pixel_art_articles/article5/) uses blending shades to make lines appear softer,
smoother, and less abrupt.

Because Rivals sprites are small and need to be very readable, it is important to use antialiasing very sparingly.

<img src="https://i.gyazo.com/d791cb98ab72a26030e40296b5fc83f0.png" height=250 alt="etalus antialias">

Too much antialiasing
can [cause problems](http://pixeljoint.com/forum/forum_posts.asp?TID=11299&PID=139318#PD:~:text=Bad%20AA%3A)
such as blurriness and [banding](shading.md#banding).

## Outlines

Characters should have outlines black outlines for clear readability.

Glowing things, like Zetterburn's fire or Clairen's sword can have outline in other colors, but be careful of losing
readability.

\
Outlining can be as simple as just drawing a line around the outside of the sprite, but there
are [several techniques](https://youtu.be/gW1G_FLsuEs?t=377) to reduce [noise](simplification.md#noise) and show the
shape better.

Automatic outlining is possible, but should be avoided when drawing characters because of the lost opportunity to use
the above techniques and improve the readability. Sometimes automatic outlining is used for projectiles or text.

::: sources

[Derek Yu](http://www.derekyu.com/)

:::