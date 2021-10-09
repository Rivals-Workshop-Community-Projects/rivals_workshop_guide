# In Game Testing

Once you have a [new project set up](/workshop_guide/quickstart/project_setup), you can test it in Rivals. You should
always be testing while you edit a mod, to get quick feedback of your changes.

::: note

This guide assumes your mod is a character. You test other projects similarly, but load them differently and may only be able to
reload while in the menu.

:::

1. In Rivals, open **Practice Mode**. Practice mode lets you refresh changes in your character mid-game.
2. Open your character. It will have the name given in your `config.ini` file, and *won't* have a download
   icon. ![](https://storage.ko-fi.com/cdn/useruploads/display/e1b39611-2142-4ff7-bafc-0f046bb873c0_local.png). Since it's a modded character, you need to have workshop enabled in the match settings, and select the character from the cog on the character select screen.
3. Start a game on any map, possibly with a cpu to beat up.
4. **Press Ctrl+8** to see the in game log. Always do this when developing a mod. If something is wrong in the code,
   this will often tell you what and where the problem is.
5. Whenever you change the character's files, whether code or art, press f5 to reload your character with the new
   changes. It's good to do this often to get fast feedback. It should show a large 'Refreshing' symbol.
