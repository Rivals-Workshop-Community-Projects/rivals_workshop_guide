# Quickstart

This section will get new modders set up, oriented, and ready to explore.

This page, like many others, draws heavily
from [Mawral's Guides](https://ko-fi.com/post/Rivals-of-Aether-Workshop-A-Complete-Starter-Guid-I2I42WI2N).

## Project Setup

**TLDR:
Unzip [this](https://github.com/Rivals-Workshop-Community-Projects/rivals-character-template/archive/refs/heads/master.zip)
into `C:\Users\{Your_Account}\AppData\Local\RivalsofAether\workshop\my_new_project`. That's your new project.**

\
Your project directory is `C:\Users\{Your_Account}\AppData\Local\RivalsofAether\workshop\`. Create the `workshop`
directory if it doesn't exist.

Each project is a folder in the project directory. Rather than starting from nothing, copy a template into the folder to
build from.

- **Recommended**
  [The Assistant Beginner Template](https://github.com/Rivals-Workshop-Community-Projects/rivals-character-template/archive/refs/heads/master.zip)
  is designed to make things as easy as possible for new modders, and take advantage of [The Assistant's](/assistant)
  features. This template uses Zetterburn's stats and normal attacks, and Sandbert's animations and specials.

- [Official empty template](https://rivalsofaether.com/wp-content/uploads/2020/02/WorkshopCharacterTemplate-1.zip) is a
  minimal template. You may prefer this if you're familiar with the files and variables, or not using the Assistant.

Just unzip the template into a new folder in your project directory,
like `C:\Users\{Your_Account}\AppData\Local\RivalsofAether\workshop\my_new_project`.

#### Alternative: Using other Rivals mods as templates

For alternative templates, you can start working from any Rivals mod you have downloaded.

Rivals mods you have downloaded appear in `C:\Program Files (x86)\Steam\steamapps\workshop\content\383980`.

There, you can see the files for any mod you have downloaded. By copying a mod folder to your project folder, you can
edit it.

![](https://storage.ko-fi.com/cdn/useruploads/display/fdb41c93-e507-467e-86b3-04fd3af52d96_folders.png)

- [Sandbert](https://steamcommunity.com/workshop/filedetails/?id=1865940669) is often used as a new character
  template.  \
  Sandbert is overpowered in many ways, making it a poor foundation. Many parts of the character will need to be
  re-tuned.

::: note

Technically any mod can be used as a starting template, but unfortunately not everyone is open to their work being
reused. Get permission before copypasting large sections of another mod.

(Rather than copypasting, studying and understanding mods is a fantastic way to learn.)

:::

## Software Setup

Now you have a project, and need the tools to work on it.

### GMEdit - Code Editor

GML is the programming language Rivals uses.

\
**Install [GMEdit Beta](https://yellowafterlife.itch.io/gmedit)**, the default GML editor for Rivals.  \
Make sure to get the beta version for Rivals dialect compatibility.

::: note

Other editors *can* be used (and VSCode has some Rivals support) but will lack GML and Rivals features, and probably
slow you down considerably.

:::

\
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

### Aseprite - Art Editor

[Aseprite](https://new.isthereanydeal.com/game/aseprite/info/) is the recommended art tool for Rivals of Aether. It has
powerful features for pixel art and animation, and has [Assistant](/assistant) automation.

Aseprite is paid. Free alternatives include:

- [An older free version](https://www.aseprite.org/older-versions/) though these have bugs, missing features, and
  may not have assistant compatibility.
- [Piskel](https://www.piskelapp.com/), [GraphicsGale](https://graphicsgale.com/us/)
  , or [Pixelorama](https://orama-interactive.itch.io/pixelorama).

::: construction

Show them how to actually do some stuff.

- Mess with movement
- mess with normals
- basic attack_update stuff
- edit an animation.

:::