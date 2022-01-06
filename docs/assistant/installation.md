# Installation

If you're new to Rivals modding, see [software setup](/workshop_guide/quickstart/software_setup.md) instead.

## Plugin Installation

If you haven't chosen an editor yet, most people use GMEdit, which is more tailored for GML and Rivals specifically.

### GMEdit

1. Go to
   the [plugin's release page](https://github.com/Rivals-Workshop-Community-Projects/rivals-workshop-assistant-gmedit/releases)
   .
2. Download the 'rivals-workshop-assistant-gmedit.zip' from the most recent release.
3. In GMEdit preferences, near the bottom, click 'Plugins directory' to open the plugins directory.
4. Extract the zip file into the plugins directory.  \
Should look something like this if you delete the `.zip`:  \
![](https://i.gyazo.com/64aef00412ba7dd6b26c773ed5933dc8.png)  \
![](https://i.gyazo.com/54d17e32aa6f681425dd84326a67bb09.png)
6. Close and reopen GMEdit to load the plugin.

Alternatively, if you haven't yet set up GMEdit with the Rivals of Aether dialect, see [the gmedit installation guide](workshop_guide/quickstart/software_setup.md#gmedit-code-editor)

### VSCode

1. Download and install [VSCode](https://code.visualstudio.com/).
2. Open the extension manager (Ctrl+Shift+X), search for and install Rivals Workshop Assistant.

You may also want to install `rivals of aether gml support` the same way, for highlighting and
completion.

## Usage

The editor must open the root folder for the project, containing the `config.ini` file. If an individual file or
subfolder is opened, the Assistant won't run. Let me know if this is annoying for you, and I can look at changing it.

Aseprite handling won't happen until you've set up the Aseprite.exe path in configuration.

## Configuration

When the editor has a character's root folder open, it will run whenever you save a modified script in the editor.

The first time it runs, it will create an `assistant` directory in the root directory, and inside that is `assistant_config.yaml`.  
`<your character dir>/assistant/assistant_config.yaml`

Edit that config and set the path to your `aseprite.exe` to enable automatic animation exporting.

## Troubleshooting

### Nothing happening

If the Assistant is installed and is loaded, there should be an error message in the developer tools console.

The developer tools console can be opened with **Ctrl+Shift+I** or

- **GMEdit**: Top left dropdown -> Dev Tools
- **Vscode**: Help -> Toggle Developer Tools

If that error message doesn't point to a clear solution, contact me.

If there is nothing related to the assistant in there, it's not installed yet. If you just installed it, try restarting
the editor.

### Something unwanted happened to my files

If it's a minor inconvenience in a gml file, consider writing `// NO-INJECT` somewhere in the file, to disable
processing. Please let me know if something's misbehaving.

If it's serious, like data loss, please tell me **immediately.**

Every day, the Assistant will make a backup to `/assistant/backup`. You can fetch the backup and disable the plugin.

### Antivirus detection

Antivirus tools tend to distrust unknown exes that read and modify files, and even download another exe when updating.

There's not a lot I can do about that, I think. Try marking the file as an exception in the antivirus.

If you're cautious, you can compile the exe yourself with the build
script [here](https://github.com/Rivals-Workshop-Community-Projects).

If enough people have trouble with it, I can look for an alternative method of building the exe, which might help.

