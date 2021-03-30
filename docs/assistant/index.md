# Rivals Workshop Assistant

The Assistant is a tool that looks at your mod files, and does all sorts of things automatically to save you time. There
are a lot of ways Rivals modding could be easier, and the Assistant is meant to let you focus more on making content,
and less on handling the language.

## Function library

User functions in the form of `#define`s are very helpful, but they can't be used across files. The Assistant solves
this by automatically copying define and macro definitions to the files they're used in.

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
window = 3
window_timer = 0
// New
set_window(3)

// Old
print("My value: " + str(value) + " %")
// New
prints("My value:", value, "%")
```

## Code injection

Beyond providing functions, the Assistant can generate code for you based on a seed.

```gml
$foreach weapons$ // You type this.

// Assistant replaces it with this:
for(var weapon_i=0; weapon_i<array_length(weapons); weapon_i++) {
    var weapon = weapons[weapon_i]
}
```

Right now `$foreach <collection_name>$` is the only code injection.

## Asset creation

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

## Installation

### VSCode

1. Download and install [VSCode](https://code.visualstudio.com/).
2. Open the extension manager (Ctrl+Shift+X), search for and install Rivals Workshop Assistant.

That's it. For a better experience, also install `rivals of aether gml support` the same way, for highlighting and
completion.

### GMEdit

VSCode is recommended over GMEdit at this time.
- GMEdit reloads less often, and needs manual confirmation to merge changes each time.
- GMEdit is more difficult to update, so its version of the Assistant may be updated less often and be missing features.

1. Go to
   the [plugin's release page](https://github.com/Rivals-Workshop-Community-Projects/rivals-workshop-assistant-gmedit/releases)
   .
2. Download the 'rivals-workshop-assistant-gmedit.zip' from that release. 
3. In GMEdit preferences, near the bottom, click 'Plugins directory' to open the plugins directory.
4. Extract the zip file into the plugins directory.
5. Either reopen GMEdit or press Ctrl+Shift+I, then Ctrl+R to reload the editor.
