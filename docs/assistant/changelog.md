# Changelog

## Aug 31, 2021

[GMEdit release](https://github.com/Rivals-Workshop-Community-Projects/rivals-workshop-assistant-gmedit/releases/tag/1.1.9)

### Fixed

- Removed the many false alarm desync warnings in `css_draw.gml` (thanks Supersonic)

- GMEdit fixes (requires reinstall with
  from [here](https://github.com/Rivals-Workshop-Community-Projects/rivals-workshop-assistant-gmedit/releases/tag/1.1.9))
    - GMEdit will no longer lose your undo-redo history when the assistant runs.
    - GMEdit running the assistant multiple times when an aseprite file changes.
    - When a file is saved, GMEdit only calls the assistant to run on relevant files (scripts OR anims), rather than all
      files.

## Aug 24, 2021

[GMEdit release](https://github.com/Rivals-Workshop-Community-Projects/rivals-workshop-assistant-gmedit/releases/tag/1.1.8)

### Added

- [Hurtbox generation](animation_handling.md#hurtbox-generation)
- Beta function libraries (Copy the files into your `assistant/user_inject` folder to use):
    - [Random](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/beta/inject/random.gml)  \
      No more manual indexing.  \
      No limited number of random numbers per frame.  \
      Desync safe.
    - [List](https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/beta/inject/list.gml)  \
      Cheap to resize often, like a `ds_list`.  \
      Performance and memory-safety of an `array`.

## May 8, 2021

[GMEdit release](https://github.com/Rivals-Workshop-Community-Projects/rivals-workshop-assistant-gmedit/releases/tag/1.1.0)

### Added

- [Warnings for dangerous code](warnings)
    - Find common desync patterns.
    - Don't forget to check hitpause with `window_timer`.
    - Avoid infinite set_attack loops.
    - Disable warnings by line or for all files.
- [window_timer_is_div](function_library/attacks/window_time_is_div.md) function.

### Fixed

- Crash while updating the exe.

## May 1, 2021

[GMEdit release](https://github.com/Rivals-Workshop-Community-Projects/rivals-workshop-assistant-gmedit/releases/tag/1.0.0)

### Added

- Assistant's core exe is now **self updating**. GMEdit users will only need to update when the GMEdit integration part
  changes.
- [Aseprite Tag integration](animation_handling.md#tag-integration)
    - Aseprite tags that are **blue** (changeable in config file) will be treated as **animation** markers.  \
      If the file has *any* tags like this, then instead of exporting as a single spritesheet, frames in the tags will
      be saved to spritesheets named after the tags.
    - Aseprite tags that are **red** (changeable in config file) will be treated as **window** markers.  \
      Attack scripts that match the name of a spritesheet will have window metadata imported as macros.  \
      If you use the macros to set the window's timing, it will stay correct when you add or remove frames.
- Keeps a backup of what the character folder looks like at the beginning of each day (overwriting the previous backup),
  in case of unwanted changes.

### Fixed

- Assistant now works with paths that have spaces in them.
- Files with unknown characters should now be processed correctly, and will keep those characters. Fixes Munophone
  incompatibility.
- Files will only re-export if they've been modified. Much faster.
- GMEdit plugin will no longer set cursor position to 0, 0 when assistant runs.
