# Software Setup

Once you have a [new project set up](/workshop_guide/quickstart/project_setup), you need tools to work on it.

This process should only need to be done once.

## GMEdit - Code Editor

### Installing GMEdit

**Install the [GMEdit Beta](https://yellowafterlife.itch.io/gmedit)**, the default code editor for Rivals.  \
Make sure to get the beta version for Rivals dialect compatibility.

::: note

Other editors *can* be used (and VSCode has some Rivals support) but will lack features for Rivals and Rivals'
language (GML), which will slow you down considerably.

:::

### Configuring GMEdit

Next, **Unzip
[GMEdit Rivals Configuration](https://github.com/Rivals-Workshop-Community-Projects/GMEdit-rivals-config/releases/latest/download/GMEdit-rivals-config.zip)
into `C:\Users\{Your_Account}\AppData\Roaming\AceGM\GMEdit`**, and allow replacing existing files.

This adds:

- `config`: Some default settings, configuring backups and removing some overly strict style warnings.  \
  If you already have personalized settings, back them up or don't replace them.
- `api`: The Rivals dialect, telling the editor what functions and variables exist in Rivals, so it can autocomplete and
  check for errors.
- `plugin`: Installs [the Assistant](/assistant), a multipurpose tool that quietly automates many tedious parts of
  Rivals modding.

::: warn

Later parts of this guide assume you have installed GMEdit and [the Assistant](/assistant), as described above.

If you don't use the Assistant, you may occasionally get errors about functions not being defined, because normally the Assistant would supply them.

:::

### Opening your project with GMEdit

GMEdit recognizes rivals projects by the `config.ini` file. 

Either:
- Drag the `config.ini` file into GMEdit.

or
- In GMedit, click 'Open...', change 'GameMaker files' to 'All files' in the new window, and open the `config.ini` file.
## Aseprite - Art Editor

[Aseprite](https://new.isthereanydeal.com/game/aseprite/info/) is the recommended art tool for Rivals of Aether. It has
powerful features for pixel art and animation, and has [Assistant](/assistant) automation.

Aseprite is paid. Free alternatives include:

- [An update of the old open source version of Aseprite](https://libresprite.github.io/) though these have bugs, missing features, and may
  not have assistant compatibility. [The free version old version of Aseprite is here.](https://www.aseprite.org/older-versions/)
- [Piskel](https://www.piskelapp.com/), [GraphicsGale](https://graphicsgale.com/us/)
  , or [Pixelorama](https://orama-interactive.itch.io/pixelorama).
