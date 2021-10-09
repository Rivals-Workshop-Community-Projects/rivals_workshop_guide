# Asset Generation

Mockup assets are useful when experimenting with a new character.

The Assistant can automatically generate circles, ellipses, and rectangles of different sizes and colors, to rapidly
test projectiles or articles.

When the Assistant sees you try to use a shape it understands, that doesn't already exist, it will quickly draw it up
for you, and it'll be in game when you press f5.

\
You create shapes with something like:

```gml
asset_get("red_circle_20") // A 20px diameter red circle
```

- **Circles** are written as `circle_<diameter>`, such as `asset_get("circle_22")`.
- **Ellipses** are written as `ellipse_<width>_<height>`, such as `asset_get("ellipse_30_30")`
- **Rectangles** are written as `rect_<width>_<height>`, such as `asset_get("rect_3_5")`

All shapes can be given a **color,** with `<color>_<rest of the shape>`, such as `asset_get("red_ellipse_30_30")`

\
More examples:
- `"circle_22"`
- `"blue_circle_30"`
- `"ellipse_30_30"`
- `"red_ellipse_30_30"`
- `"rect_34_36"`
- `"orange_rect_3_5"`
