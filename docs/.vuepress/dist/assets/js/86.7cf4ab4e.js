(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{474:function(a,e,t){"use strict";t.r(e);var s=t(26),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[a._v("#")]),a._v(" Variables")]),a._v(" "),t("p",[a._v("A common instruction is saving a value in a variable.")]),a._v(" "),t("div",{staticClass:"language-gml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-gml"}},[t("code",[a._v("my_first_variable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("\n")])])]),t("p",[a._v("The "),t("code",[a._v("=")]),a._v(" operator stores the value "),t("code",[a._v("1000")]),a._v(" in the variable named "),t("code",[a._v("my_first_variable")]),a._v('. You can read it as "set\nmy_first_variable to 1000."')]),a._v(" "),t("p",[a._v("(Note: "),t("code",[a._v("=")]),a._v(" is for assigning a value. If you want to "),t("RouterLink",{attrs:{to:"/workshop_guide/programming/learning_path/data_types.html#variable-comparison"}},[a._v("check if two values are equal")]),a._v(",\nuse "),t("code",[a._v("==")]),a._v(', which means "is equal to?")')],1),a._v(" "),t("div",{staticClass:"language-gml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-gml"}},[t("code",[a._v("my_second_variable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" my_first_variable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// my_second_variable will store 1001")]),a._v("\n")])])]),t("p",[a._v("Your character already has a "),t("a",{attrs:{href:"https://rivalsofaether.com/player-variables/",target:"_blank",rel:"noopener noreferrer"}},[a._v("a lot of variables,"),t("OutboundLink")],1),a._v(" which you can read or\nchange.")]),a._v(" "),t("div",{staticClass:"language-gml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-gml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// update.gml")]),a._v("\nhsp "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Sets your character's horizontal speed every frame")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("y")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("800")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Sets your character's vertical position every frame")]),a._v("\n")])])]),t("p",[a._v("You can technically name variables almost anything. Use "),t("code",[a._v("_")]),a._v(" as a space "),t("code",[a._v("like_this")]),a._v(". The name can contain numbers, but not as\nthe first character.")]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/workshop_guide/programming/learning_path/best_practices.html#naming"}},[a._v("Using helpful names is valuable.")]),a._v(" Future-you won't remember what you're thinking now.")],1),a._v(" "),t("h2",{attrs:{id:"name-collisions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name-collisions"}},[a._v("#")]),a._v(" Name collisions")]),a._v(" "),t("p",[a._v("When "),t("code",[a._v("var")]),a._v(" is before a variable, it makes that variable 'local.'")]),a._v(" "),t("div",{staticClass:"language-gml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-gml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" my_local_variable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("\n")])])]),t("p",[a._v("You can only access "),t("a",{attrs:{href:"https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/variables/local%20variables.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("local variables"),t("OutboundLink")],1),a._v('\nfrom the current "scope," which makes it much easier to stay organized and avoid unexpected side\neffects.')]),a._v(" "),t("p",[a._v("Being local to the current scope means only being accessible within the current block of code. If you create the variable\nwithin an "),t("RouterLink",{attrs:{to:"/workshop_guide/programming/learning_path/conditionals.html#if"}},[a._v("if")]),a._v(" or "),t("RouterLink",{attrs:{to:"/workshop_guide/programming/learning_path/array.html#for-loop"}},[a._v("for")]),a._v(" structure, it won't exist outside that\nblock. Local variables are not accessible outside the current file.")],1),a._v(" "),t("p",[a._v("If you don't need to access the v ariable on later frames, it probably "),t("em",[a._v("should")]),a._v(" be a "),t("code",[a._v("var")]),a._v(" variable. You\nshould be using "),t("code",[a._v("var")]),a._v(" often to stay organized.")]),a._v(" "),t("p",[a._v("Different "),t("RouterLink",{attrs:{to:"/workshop_guide/programming/learning_path/objects_and_instances.html"}},[a._v("instances")]),a._v(" have their own variables, which you can access\nwith "),t("code",[a._v("<instance id>.<variable name>")]),a._v(", e.g. "),t("code",[a._v("other_player.x")]),a._v(".")],1),a._v(" "),t("p",[t("br"),a._v(" "),t("br"),a._v(" "),t("em",[a._v("Advanced:")]),a._v(" If you need to set a "),t("code",[a._v("var")]),a._v(" variable in a block and use it out of the block, you can declare the variable\nbefore it.")]),a._v(" "),t("div",{staticClass:"language-gml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-gml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" message\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" is_ready "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   message "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Ready!"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   message "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Not ready!"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);