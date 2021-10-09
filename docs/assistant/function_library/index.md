# Function Library

The Assistant's function library lets you write shorter, simpler code by automatically sharing helpful `#define`
and `#macro` statements to the files where they're used.

For example:

```gml
// Old
window = 3
window_timer = 0
// New
set_window(3)
```

To use functions in the library, you only need to use them as if they were already available. The Assistant notices, and
provides them at the bottom of the file.

To share one of your defines across files, navigate to the `assistant/user_inject` that was created. All defines in gml
files in that directory will be available everywhere, just like the Assistant library.

If you already supply a define in a file, the Assistant will **not** provide it. This lets you override the library on a
per-file basis.

- Documentation for the library can be found in the sidebar under this page.
- Source code for the library can be found in the `assistant/.inject` folder that the Assistant will make in the root of
  your project.

## Updates

The Assistant will regularly check for updates and add new functions to the library.

There are three kinds of update:

- **Patch** updates fix bugs or make existing functions more flexible, in a way that should never be able to break
  existing code.
- **Minor** updates add new functions. This could potentially break code if you have a variable with the same name as a
  new function, so it is disabled by default.
- **Major** updates change functions, or remove old depreciated functions. This can easily break existing projects, so
  it is disabled by default.

You can change the types of updates you'll receive in `assistant/assistant_config.yaml`, which would automatically be
created for you.