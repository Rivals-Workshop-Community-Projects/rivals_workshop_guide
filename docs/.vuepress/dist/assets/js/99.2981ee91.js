(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{487:function(t,e,i){"use strict";i.r(e);var a=i(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"quickstart-changing-animations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-changing-animations"}},[t._v("#")]),t._v(" Quickstart: Changing Animations")]),t._v(" "),i("p",[t._v("Now try changing an animation in the template.")]),t._v(" "),i("p",[t._v("Rivals reads your character's animations from the "),i("code",[t._v("sprites")]),t._v(" folder, with meaningful names like "),i("code",[t._v("walk_strip8.png")]),t._v(", and at\nleast some of them being double sized. Technically all you need to do to change an animation is to edit one of those\nfiles.")]),t._v(" "),i("p",[i("br"),t._v("\nThat's extremely gross and inconvenient though, and will make it "),i("em",[t._v("very")]),t._v(" difficult to make your own animations. Instead,\nby using an animation editor like aseprite you get access to switching between frames, watching the animation, layers,\nand other features that will save you huge amounts of time.")]),t._v(" "),i("p",[t._v("So this guide will teach you how to work with Aseprite, not to edit the "),i("code",[t._v("sprites")]),t._v(" directory.")]),t._v(" "),i("p",[i("br"),t._v("\nWhen you want to make your own animations, look into the "),i("a",{attrs:{href:"../art"}},[t._v("art guide")]),t._v(".")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/workshop_guide/art/workflow.html"}},[t._v("The workflow section")]),t._v(" should hopefully clarify any technical difficulties.")],1),t._v(" "),i("h2",{attrs:{id:"exporting-animations-with-the-assistant"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#exporting-animations-with-the-assistant"}},[t._v("#")]),t._v(" Exporting animations with the Assistant")]),t._v(" "),i("p",[t._v("The Assistant uses a new folder called "),i("code",[t._v("anims")]),t._v(" which holds aseprite files. You work in "),i("code",[t._v("anims")]),t._v(", and the assistant\ncreates the files in "),i("code",[t._v("sprites")]),t._v(" every time you save.")]),t._v(" "),i("p",[t._v("There are two main prerequisites:")]),t._v(" "),i("ul",[i("li",[t._v("Your "),i("code",[t._v("assistant/assistant_config.yaml")]),t._v(" file must have your aseprite path supplied."),i("br"),t._v("\nIt will probably look like "),i("code",[t._v("aseprite_path: C:\\Program Files (x86)\\SteamLibrary\\steamapps\\common\\Aseprite\\Aseprite.exe")])]),t._v(" "),i("li",[t._v("You need to have an editor with the Assistant installed, open to a file in the character's folder."),i("br"),t._v("\nYou can confirm it is watching for changes from Gmedit by pressing "),i("code",[t._v("Ctrl+Shift+i")]),t._v(" to open the dev console, and finding\nfor a line like "),i("code",[t._v("Will now watch: <your character folder>/anims")]),t._v(" near the top.")])]),t._v(" "),i("p",[t._v("If both of those are true, any time you modify an aseprite file in the "),i("code",[t._v("anims")]),t._v(" folder, it should automatically create\nthe correct file in the "),i("code",[t._v("sprites")]),t._v(" folder. Reloading should show your changes in game.")]),t._v(" "),i("div",{staticClass:"custom-block warn"},[i("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),i("p",[t._v("Note that if you change the canvas size, or change the position of the character on the canvas, you'll need to\nadjust "),i("RouterLink",{attrs:{to:"/workshop_guide/programming/reference/scripts/init_and_attack_scripts.html#load-gml"}},[i("code",[t._v("load.gml")])]),t._v(" to point to the new position.")],1)]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/assistant/animation_handling.html"}},[t._v("Further reading on Assistant Animation handling")])],1),t._v(" "),i("h2",{attrs:{id:"exporting-animations-without-the-assistant"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#exporting-animations-without-the-assistant"}},[t._v("#")]),t._v(" Exporting animations without the Assistant")]),t._v(" "),i("p",[t._v("If you don't have the assistant running, changing a spritesheet is a bit longer.")]),t._v(" "),i("ol",[i("li",[t._v("Loading (Only if you don't have a separate Aseprite file to work from):\n"),i("ol",[i("li",[t._v("Open the spritesheet in aseprite.")]),t._v(" "),i("li",[t._v("File -> Import sprite sheet, adjusting the width and height to line up properly.")]),t._v(" "),i("li",[t._v("Usually resize it (rivals sprites are usually double size).")])])]),t._v(" "),i("li",[t._v("Make the changes")]),t._v(" "),i("li",[t._v("Saving:\n"),i("ol",[i("li",[t._v("Put the size back.")]),t._v(" "),i("li",[t._v("Export to sprite sheet.")]),t._v(" "),i("li",[t._v("Rename it if you changed the number of frames. Sprites are named like "),i("code",[t._v("[name]_strip[frames].png")]),t._v(".")]),t._v(" "),i("li",[t._v("If it's attack:\n"),i("ol",[i("li",[t._v("Remember to adjust the hurtbox animation the same way to match.")]),t._v(" "),i("li",[t._v("Adjust the attack script to make the windows line up.")])])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);