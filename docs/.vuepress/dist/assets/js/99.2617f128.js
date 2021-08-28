(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{487:function(t,e,a){"use strict";a.r(e);var i=a(26),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"quickstart-changing-animations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-changing-animations"}},[t._v("#")]),t._v(" Quickstart: Changing Animations")]),t._v(" "),a("p",[t._v("Now try changing an animation in the template.")]),t._v(" "),a("p",[t._v("Rivals read your character's animations from the "),a("code",[t._v("sprites")]),t._v(" folder, as pngs with special names, and at least some sizes\nbeing double sized.")]),t._v(" "),a("p",[t._v("That's not very convenient to work with! So instead, the Assistant uses a new folder called "),a("code",[t._v("anims")]),t._v(" which holds aseprite\nfiles.")]),t._v(" "),a("p",[t._v("You can just work on the aseprite files, and the Assistant will generate the spritesheets automatically whenever you\npress save.")]),t._v(" "),a("h2",{attrs:{id:"exporting-animations-with-the-assistant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-animations-with-the-assistant"}},[t._v("#")]),t._v(" Exporting animations with the Assistant")]),t._v(" "),a("p",[t._v("There are two main prerequisites:")]),t._v(" "),a("ul",[a("li",[t._v("Your "),a("code",[t._v("assistant/assistant_config.yaml")]),t._v(" file must have your aseprite path supplied."),a("br"),t._v("\nIt will probably look like "),a("code",[t._v("aseprite_path: C:\\Program Files (x86)\\SteamLibrary\\steamapps\\common\\Aseprite\\Aseprite.exe")])]),t._v(" "),a("li",[t._v("You need to have an editor with the Assistant installed, open to a file in the character's folder."),a("br"),t._v("\nFor GMEdit you can check by pressing "),a("code",[t._v("Ctrl+Shift+i")]),t._v(" to open the dev console, and looking for a line\nlike "),a("code",[t._v("Will now watch: <your character folder>/anims")]),t._v(" near the top.")])]),t._v(" "),a("p",[t._v("If both of those are true, any time you modify an aseprite file in the "),a("code",[t._v("anims")]),t._v(" folder, it should automatically create\nthe correct file in the "),a("code",[t._v("sprites")]),t._v(" folder. Reloading should show your changes in game.")]),t._v(" "),a("p",[t._v("Note that if you change the canvas size, or change the relative position of the character on the canvas, you'll need to\nadjust "),a("code",[t._v("load.gml")]),t._v(" to point to the new position.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/assistant/animation_handling.html"}},[t._v("Further reading on Assistant Animation handling")])],1),t._v(" "),a("h2",{attrs:{id:"exporting-animations-without-the-assistant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-animations-without-the-assistant"}},[t._v("#")]),t._v(" Exporting animations without the Assistant")]),t._v(" "),a("p",[t._v("The non-assistant way of changing a spritesheet is not very fun.")]),t._v(" "),a("p",[t._v("If you work directly with the sprite sheets, it looks like:")]),t._v(" "),a("ol",[a("li",[t._v("Open the spritesheet in aseprite.")]),t._v(" "),a("li",[t._v("Usually resize it (rivals sprites are usually double size)")]),t._v(" "),a("li",[t._v("Import sprite sheet, adjusting the width and height to line up properly.")]),t._v(" "),a("li",[t._v("Make the changes.")]),t._v(" "),a("li",[t._v("Put the size back.")]),t._v(" "),a("li",[t._v("Export to sprite sheet.")]),t._v(" "),a("li",[t._v("Rename it if you changed the number of frames.")]),t._v(" "),a("li",[t._v("If you changed an attack, do some of those steps again to make the hurtbox match.")])]),t._v(" "),a("p",[t._v("If you keep the aseprite files separate from the spritesheets (like the "),a("code",[t._v("anims")]),t._v(" folder), you can skip 2 and 3.")])])}),[],!1,null,null,null);e.default=s.exports}}]);