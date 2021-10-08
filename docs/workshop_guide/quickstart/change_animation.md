# Quickstart: Changing Animations

Now try changing an animation in the template.

Rivals reads your character's animations from the `sprites` folder, with meaningful names like `walk_strip8.png`, and at
least some of them being double sized. Technically all you need to do to change an animation is to edit one of those
files.

\
That's extremely gross and inconvenient though, and will make it *very* difficult to make your own animations. Instead,
by using an animation editor like Aseprite you get access to switching between frames, watching the animation, layers,
and other features that will save you huge amounts of time.

This guide will teach you how to work with Aseprite, not to edit the `sprites` directory.

\
When you want to make your own animations, look into the [art guide](../art).

See [the workflow section](../art/workflow.md) for technical difficulties.

## Exporting animations with the Assistant

The Assistant uses a new folder called `anims` which holds Aseprite files. You work in `anims`, and the assistant
creates the files in `sprites` every time you save.

There are two main prerequisites:

- Your `assistant/assistant_config.yaml` file must have your Aseprite path supplied.  
  It will probably look like `aseprite_path: C:\Program Files (x86)\SteamLibrary\steamapps\common\Aseprite\Aseprite.exe`
- You need to have an editor with the Assistant installed, open to a file in the character's folder.   
  You can confirm it's watching for changes from Gmedit by pressing `Ctrl+Shift+i` to open the dev console, and finding
  for a line like `Will now watch: <your character folder>/anims` near the top.

If both of those are true, any time you save an Aseprite file in the `anims` folder, it should automatically create
the correct file in the `sprites` folder. Reloading should show your changes in game.

::: warn

Note that if you change the canvas size, or change the position of the character on the canvas, you'll need to
adjust [`load.gml`](../programming/reference/scripts/init_and_attack_scripts.md#load-gml) to point to the new position.

:::

[Further reading on Assistant Animation handling](/assistant/animation_handling.md)

## Exporting animations without the Assistant

If you don't have the assistant running, changing a spritesheet is a bit longer.

1. Loading (If you don't have a separate Aseprite file to work from):
    1. Open the spritesheet in Aseprite.
    2. File -> Import sprite sheet, adjusting the width and height to line up properly.
    3. Usually resize it (rivals sprites are usually double size).
2. Make the changes
3. Saving:
    1. Put the size back.
    2. Export to sprite sheet.
    3. Rename it if you changed the number of frames. Sprites are named like `[name]_strip[frames].png`.
    4. If it's an attack:
        1. Remember to adjust the hurtbox animation the same way to match.
        2. Adjust the attack script to make the windows line up.
