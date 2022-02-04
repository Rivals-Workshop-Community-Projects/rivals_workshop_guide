# Shading

Line art can suggest a 3d [form](form.md), but shading makes the shape much clearer.

<img src="https://i.gyazo.com/dd8af3799732e364b8aed0b583166545.png" height=250 alt="no shading etalus">

As always, its best to work with a [small palette](color.md#palette), so each color in a sprite only has a few shades to
work with.

Most materials have

- A main light shade that covers most of the material
- A darker shade that covers most of the shaded area
- An even darker shade for the deepest shadows

See [shiny materials](shading.md#shiny-materials) for when this looks too flat.

## Shadow

[Saint11 Article](https://saint11.org/pixel_art_articles/article4/)

<img src="https://i.gyazo.com/d66e569130285754650b1e7f720abb8c.png" height=250 alt="etalus shading">

Shadows, are the most obvious source of shading, and happen from something above casting shade, or from the material
facing down, away from the light.

In Rivals, light comes from directly above, not from an angle. If the light came from the side, it would appear to
change direction whenever the character turns around.

### Banding

When an artist isn't sure how to shade something, it's common to draw a line of shading along the edge of the shape, or
multiple lines in a gradient. **Don't.**

This is
called [banding.](http://pixeljoint.com/forum/forum_posts.asp?TID=11299&PID=139318#PD:~:text=Banding%3A,simply%2C%20is%20when%20pixels%20line%20up.)
It may be easy, but it doesn't show [form](form.md), and looks artificial.

<cimg src="https://i.gyazo.com/bc7d6f6b5917df08fa4d4db47ec7921a.png" height=250 caption="by misbug" />
<cimg src="https://i.gyazo.com/35dac8e4279fcd4981dfd039828dd6a0.png" height=250 caption="by MasterianoX" />
<cimg src="https://i.gyazo.com/d1c610b252896e84e1b25da86308e226.png" height=250 caption="by pinnguaq" />

## Creases and valleys

A less obvious kind of shadow, the inner parts of shapes get less light than the parts that stick out.

Shading creases is makes it possible to show complex forms, like Etalus' face.

<cimg src="https://i.pinimg.com/474x/07/d6/75/07d6759cca706f6d956e599b84ad5e59.jpg" height=250 caption="fabric shading - by Barbara Bradley" />

<img src="https://i.gyazo.com/b825ef27d2e0fff92256305363469b9e.png" height=250 alt="etalus creases">

## Showing form with unnatural shading

- The top of Etalus' head and back aren't shaded, face up, and aren't creases, yet they're still shaded darker.

<img src="https://i.gyazo.com/19b5a620499a12ec81d6e0c55c4c4177.png" height=250 alt="etalus top of head">

- Orcane's back is darker to more clearly show the shape of his legs and tail, even though it should be lit from above.

<img src="https://i.gyazo.com/922acfd2b4da97771fd0f9ef7c8213b5.png" height=250 alt="orcane shading">

\
To communicate form well, it sometimes helps to shade an area, even if it would normally be well lit.

Having a change in shading shows that the material has curved or has different depth from the viewer.

\
Remember that unnatural shading can look strange, and should only be done when it helps show [form](form.md) or
important details.

### Pillow Shading

A common kind of unnatural shading
is [Pillow Shading,](http://pixeljoint.com/forum/forum_posts.asp?TID=11299&PID=139318#PD:~:text=Pillow%2Dshading%3A,central%20area%20with%20increasingly%20darker%20bands.)
shading just the outsides of the shape.

This ends up looking as if the light source is coming *from the viewer,* instead of above.

<cimg src="https://static.wikia.nocookie.net/pixelstudiotutorial/images/1/1f/6_tutorial.png" height=250 alt="by pixelstudio" />
<cimg src="https://i.gyazo.com/5380ff4ae31d706c94dfa481b255aab8.png" height=250 alt="by pinguaq" />

## Shiny materials

Shiny materials like metal tend have a greater [value](color.md#parts-of-color) range between light and dark, and might
have an extra shade to help show that.

Shiny materials also tend to have small spots or streaks where the light reflects off of them, called **specular
highlights.**

<cimg src="https://cms-assets.tutsplus.com/uploads/users/108/posts/20549/image/color-fundamentals-shading-40b.png" height=250 caption="https://design.tutsplus.com/articles/color-fundamentals-shading--cms-20549" />

The highlights on Shovel Knight's armor makes it look polished and clean.

The shiny metal materials also generally lighter and more [saturated](color.md#parts-of-color), making them appear to
reflect more light.

<img src="https://i.gyazo.com/ae4fd32505a3bcf7f0ebcd94541de4a8.png" height=250 alt="shovel knight palette">
<img src="https://art.pixilart.com/bb2cb6be5872fe6.png" height=250 alt="shovel knight">

Note that since these highlights are from the precise way the light is bouncing, they shouldn't stay static when the
character moves.

## Dithering

Don't use dithering in Rivals art.

Dithering is a technique where you speckle two colors into each other in a pattern, either to produce smoother shading
or add texture.

At Rivals' size, dithering creates far too much noise. Shading should be done with solid colors, and texture should
be [simplified](simplification.md).

::: sources

[Saint11](https://saint11.org/pixel_art_articles/article4/)

[MasterianoX](https://twitter.com/trainguy9512/status/1179184303776899074)

[Pinguaq](https://pinnguaq.com/learn/pixel-art/pixel-art-2-core-techniques-in-graphicsgale)

:::
