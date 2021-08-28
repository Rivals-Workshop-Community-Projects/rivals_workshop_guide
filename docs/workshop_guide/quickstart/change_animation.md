# Quickstart: Changing Animations

Now try changing an animation in the template.

Rivals read your character's animations from the `sprites` folder, as pngs with special names, and at least some sizes
being double sized.

That's not very convenient to work with! So instead, the Assistant uses a new folder called `anims` which holds aseprite
files.

You can just work on the aseprite files, and the Assistant will generate the spritesheets automatically whenever you
press save.

## Exporting animations with the Assistant

There are two main prerequisites:

- Your `assistant/assistant_config.yaml` file must have your aseprite path supplied.  
  It will probably look like `aseprite_path: C:\Program Files (x86)\SteamLibrary\steamapps\common\Aseprite\Aseprite.exe`
- You need to have an editor with the Assistant installed, open to a file in the character's folder.   
  For GMEdit you can check by pressing `Ctrl+Shift+i` to open the dev console, and looking for a line
  like `Will now watch: <your character folder>/anims` near the top.

If both of those are true, any time you modify an aseprite file in the `anims` folder, it should automatically create
the correct file in the `sprites` folder. Reloading should show your changes in game.

Note that if you change the canvas size, or change the relative position of the character on the canvas, you'll need to
adjust `load.gml` to point to the new position.

[Further reading on Assistant Animation handling](/assistant/animation_handling.md)

## Exporting animations without the Assistant

The non-assistant way of changing a spritesheet is not very fun.

If you work directly with the sprite sheets, it looks like:

1. Open the spritesheet in aseprite.
2. Usually resize it (rivals sprites are usually double size)
3. Import sprite sheet, adjusting the width and height to line up properly.
4. Make the changes.
5. Put the size back.
6. Export to sprite sheet.
7. Rename it if you changed the number of frames.
8. If you changed an attack, do some of those steps again to make the hurtbox match.

If you keep the aseprite files separate from the spritesheets (like the `anims` folder), you can skip 2 and 3. 