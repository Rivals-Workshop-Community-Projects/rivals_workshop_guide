---
next: installation_and_usage.md
---

# Rivals Workshop Assistant

The Assistant is a tool that looks at your mod files, and automates things to save you time. There
are many ways Rivals modding could be easier, and the Assistant tries to let you focus more on making content.

\
**[Installation](installation_and_usage.md)**

## [Aseprite Exporting](animation_handling.md)

The Assistant automates converting Aseprite files to spritesheets when making changes.

You can work entirely on Aseprite files in a new `anims` folder, and the correctly sized and named files will appear in `sprites`.

Advanced features are planned, such drawing hitboxes and hurtboxes, and tagging attack windows, all within the Aseprite
file.

## [Function library](function_library)

User functions in the form of `#define` blocks are very helpful, but you can't use them across files. The Assistant
solves this by automatically copying define and macro definitions to the files they're used in.

\
In addition to accessing your own defines across files, you can also use a community library, automatically updated as
it grows.

The library provides shorthands such as:

```gml
// Old
set_window_value(AT_FAIR, 1, AG_WINDOW_TYPE, 1)
set_window_value(AT_FAIR, 1, AG_WINDOW_LENGTH, 14)
set_window_value(AT_FAIR, 1, AG_WINDOW_ANIM_FRAMES, 1)

// New
make_window(AT_FAIR, 1,
    AG_WINDOW_TYPE, 1,
    AG_WINDOW_LENGTH, 14,
    AG_WINDOW_ANIM_FRAMES, 1,
)
```

and helper functions like:

```gml
// Old
if window_timer == 1 and !hitpause { // Don't forget to check hitpause...
// New
if window_time_is(1) {

// Old
print("My value: " + str(value) + " %")
// New
prints("My value:", value, "%")
```

## [Warnings](warnings)

There are some bugs that don't raise obvious error messages, and may be very difficult to uncover, such as a rare
edge-case causing a crash 1 in 100 games.

When the Assistant sees a pattern of code known to be able to cause a bug like that, it will add
a `// WARN: description` comment, letting you know.

## [Code Injection](code_injection.md)

Beyond providing functions, the Assistant can generate code for you based on a seed.

```gml
$foreach weapons$ // You type this.

// Assistant replaces it with this:
for(var weapon_i=0; weapon_i<array_length(weapons); weapon_i++) {
    var weapon = weapons[weapon_i]
}
```

Right now `$foreach <collection_name>$` is the only code injection, but there are many ways this can be exanded.

## [Asset Generation](asset_generation.md)

The Assistant can help you mock-up projectiles and articles by automatically generating placeholder sprites for them.

Any time you try to use a sprite the Assistant understands, the Assistant will quickly draw it up for you, and it'll be
in game when you press f5.

```gml
asset_get("red_circle_20") // A 20px diameter red circle
```

The Assistant can make `circle`, `ellipse`, and `rect`, with optional colors.

Examples:

- `"circle_22"`
- `"blue_circle_30"`
- `"ellipse_30_30"`
- `"red_ellipse_30_30"`
- `"rect_34_36"`
- `"orange_rect_3_5"`
