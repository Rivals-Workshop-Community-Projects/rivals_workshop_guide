(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{479:function(a,t,e){"use strict";e.r(t);var s=e(26),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"ai-scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ai-scripts"}},[a._v("#")]),a._v(" Ai Scripts")]),a._v(" "),e("p",[a._v("These are needed to make your character's AI function. Making a poor quality AI is easy, while optimizing the\nAI is very complex.")]),a._v(" "),e("h2",{attrs:{id:"ai-init-gml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ai-init-gml"}},[a._v("#")]),a._v(" ai_init.gml")]),a._v(" "),e("p",[a._v("Called when a CPU of the character is created.")]),a._v(" "),e("p",[a._v("By default, CPUs pick attacks randomly based on the opponent's location. You\ncreate "),e("RouterLink",{attrs:{to:"/workshop_guide/programming/learning_path/array.html"}},[a._v("arrays")]),a._v(" of attack names. The CPU has an equal probability of selecting each\nentry in the array. The arrays should only contain the default attack values (eg. AT_DSPECIAL_AIR is not valid,\nand should just be AT_DSPECIAL).")],1),a._v(" "),e("p",[a._v("Location arrays are:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("far_up_attacks")])]),a._v(" "),e("li",[e("code",[a._v("far_down_attacks")])]),a._v(" "),e("li",[e("code",[a._v("far_side_attacks")])]),a._v(" "),e("li",[e("code",[a._v("mid_side_attacks")])]),a._v(" "),e("li",[e("code",[a._v("close_up_attacks")])]),a._v(" "),e("li",[e("code",[a._v("close_down_attacks")])]),a._v(" "),e("li",[e("code",[a._v("close_side_attacks")])]),a._v(" "),e("li",[e("code",[a._v("neutral_attacks")])])]),a._v(" "),e("p",[a._v("The resulting script may look like:")]),a._v(" "),e("div",{staticClass:"language-gml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-gml"}},[e("code",[a._v("far_down_attacks "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    AT_DAIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    AT_DSPECIAL\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nfar_up_attacks "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    AT_USTRONG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    AT_DAIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    AT_DSPECIAL\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ... More")]),a._v("\n")])])]),e("p",[a._v("If you have more complex AI scripting, you initialize the variables you need for that here.")]),a._v(" "),e("h2",{attrs:{id:"ai-update-gml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ai-update-gml"}},[a._v("#")]),a._v(" ai_update.gml")]),a._v(" "),e("p",[a._v("Called every frame for a CPU of the character.")]),a._v(" "),e("p",[a._v("The CPU's default behavior is automatic. This script is optional, and add specials cases to the behavior, such as effectively using recovery options.")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("ai_target")]),a._v(" - The player object the CPU is targeting.")]),a._v(" "),e("li",[e("code",[a._v("ai_recovering")]),a._v(" - If the CPU is recovering or not.")]),a._v(" "),e("li",[e("code",[a._v("temp_level")]),a._v(" - The CPU’s difficulty level (1-9).")])]),a._v(" "),e("div",{staticClass:"custom-block construction"},[e("p",{staticClass:"custom-block-title"},[a._v("Under Construction")]),a._v(" "),e("p",[a._v("This needs a full guide.")]),a._v(" "),e("p",[a._v("Document variables and constants like "),e("code",[a._v("ai_state == AS_ADVANTAGE")]),a._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);