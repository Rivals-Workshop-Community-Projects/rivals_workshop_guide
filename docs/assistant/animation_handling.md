# Animation Handling

The Assistant can manage your Aseprite files, and automatically convert them to properly named and sized spritesheets.

## Usage

Make sure that `aseprite_path` is set correctly in `assistant/assistant_config.yaml`.

Put your aseprite files in the `anims` directory. The assistant will make a matching sprite sheet in the `sprites` directory whenever an animation changes. 

For example an `anims/bair.aseprite` with 10 frames would create `sprites/bair_strip10.png`.

::: danger

Files in the `anims` directory will overwrite matching files in the `sprites` directory.

Do not work directly on a spritesheet if you have a matching aseprite file in `anims`. 

:::

Note that the Assistant currently lives inside the GMEdit or VSCode plugin. It will only see your aseprite file changes if the project is open in the editor with the plugin. 