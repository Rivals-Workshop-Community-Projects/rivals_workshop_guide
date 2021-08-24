# In Game Testing

Once you have a [new project set up](/workshop_guide/quickstart/project_setup), you can test it in Rivals. You should
always be testing while you edit a mod, to get quick feedback of your changes.

::: note

This guide assumes your mod is a character. Other projects are tested similarly, but are loaded differently and might only
reload while in the menu.

:::

1. In Rivals, open **Practice Mode**. Practice mode lets you refresh changes in your character mid-game.
2. Open your character. It will have the name given in your `config.ini` file, and *won't* have a download
   icon. ![](https://storage.ko-fi.com/cdn/useruploads/display/e1b39611-2142-4ff7-bafc-0f046bb873c0_local.png)
3. Start a game on any map, possibly with a cpu to beat up.
4. **Press Ctrl+8** to see the in game log. Always do this when developing a mod. If something is wrong in the code,
   this will usually tell you what and where.
5. Whenever you change the character's files, whether code or art, press f5 to reload your character with the new
   changes. It's good to do this often to get feedback quickly. It should show a large 'Refreshing' symbol.