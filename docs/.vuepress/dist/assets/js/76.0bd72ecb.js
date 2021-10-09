(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{464:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"array"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" Array")]),t._v(" "),e("p",[t._v("An array is an ordered sequence of variables.")]),t._v(" "),e("p",[t._v("In Rivals, you can create arrays with "),e("code",[t._v("[value1, value2, value3, ...]")]),t._v(" such as:")]),t._v(" "),e("div",{staticClass:"language-gml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-gml"}},[e("code",[t._v("hit_noise_names "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oof"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ugh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"argh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("You access like "),e("code",[t._v("my_array[0]")]),t._v(" for the first item, "),e("code",[t._v("my_array[1]")]),t._v(" for the second, and so on. That can be a bit\nhard to remember at first. In programming, the first slot is "),e("em",[t._v("usually")]),t._v(" index "),e("code",[t._v("0")]),t._v(".\n"),e("br"),t._v(" "),e("code",[t._v("array_length(array)")]),t._v(" gets the number of items in the array.")]),t._v(" "),e("p",[e("br"),t._v("\nIt is usually convenient to access arrays with a "),e("a",{attrs:{href:"#for-loop"}},[t._v("for loop")]),t._v(" (described next), which lets you access each item inside.")]),t._v(" "),e("p",[e("br"),t._v("\nYou can add items to the end of an array with "),e("code",[t._v("my_array[array_length(my_array)] = new_value")]),t._v(", but be careful. Each time\nthe array grows larger, the language needs to rebuild it, which can become slow. If you're going to be adding\nvalues often, then initialize the array with "),e("code",[t._v("my_array[<maximum number you expect to need>] = noone")]),t._v(", which will create\nempty slots in the array up to that size. Be careful to check if the value is "),e("code",[t._v("noone")]),t._v(" when later accessing the array.")]),t._v(" "),e("div",{staticClass:"custom-block construction"},[e("p",{staticClass:"custom-block-title"},[t._v("Under Construction")]),t._v(" "),e("p",[t._v("Once "),e("a",{attrs:{href:"https://github.com/Rivals-Workshop-Community-Projects/injector-library/blob/beta/inject/list.gml",target:"_blank",rel:"noopener noreferrer"}},[t._v("lists"),e("OutboundLink")],1),t._v(" are better tested,\ndescribe them here as a good alternative to arrays.")])]),t._v(" "),e("h2",{attrs:{id:"for-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-loop"}},[t._v("#")]),t._v(" For Loop")]),t._v(" "),e("p",[t._v("For Loops are the primary way to access the contents of an array. At its simplest, a for loop counts from one number to\nanother, and repeats the code inside it for each value.")]),t._v(" "),e("div",{staticClass:"language-gml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-gml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prints each number from 0 to 9 (not 10)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" number_to_count_to "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" number_to_count_to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("The for loop updates a counter, "),e("code",[t._v("i")]),t._v(", and repeats a block of code until some condition is met.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("i")]),t._v(" stands for 'iterator.' Each time the loop runs is an 'iteration.'")]),t._v(" "),e("p",[t._v("There are three parts in the head of the for loop, separated by semicolons.")]),t._v(" "),e("ul",[e("li",[t._v("The first is a statement when the loop first starts, usually to set the initial value of the iterator.")]),t._v(" "),e("li",[t._v("The second is a "),e("RouterLink",{attrs:{to:"/workshop_guide/programming/learning_path/data_types.html#booleans-true-or-false-values"}},[t._v("boolean")]),t._v(" expression meaning 'should the loop end now?'")],1),t._v(" "),e("li",[t._v("The third is a statement run each time the loop finishes, usually updating the iterator.")])]),t._v(" "),e("p",[t._v("You most often use a for loop to access each value of an array, by counting through each index, and accessing the value at that\nindex.")]),t._v(" "),e("div",{staticClass:"language-gml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-gml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" my_array "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("array_length")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("my_array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" item "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" my_array"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"/assistant"}},[t._v("The Assistant")]),t._v(" has a way to generate for loops over an array, by\ntyping "),e("code",[t._v("$foreach <array name>$")]),t._v(", such as "),e("code",[t._v("$foreach my_array$")]),t._v(".")]),t._v(" "),e("p",[t._v("("),e("a",{attrs:{href:"https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/401_11_for.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official Docs"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("h2",{attrs:{id:"ds-datastructures"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ds-datastructures"}},[t._v("#")]),t._v(" DS datastructures")]),t._v(" "),e("p",[t._v("You may come across other datastructures, starting with "),e("code",[t._v("DS_")]),t._v(", such as "),e("code",[t._v("DS_list")]),t._v(".")]),t._v(" "),e("p",[t._v("GML provides more powerful\ndatastructures that "),e("strong",[t._v("require great care to use, and are typically not recommended.")]),t._v(" These structures always require a\nfunction call to safely destroy them. There are "),e("em",[t._v("many")]),t._v(" ways this can not occur, which will lead to gradual memory issues\neven after the match ends!")]),t._v(" "),e("p",[t._v("Try to use an array or "),e("RouterLink",{attrs:{to:"/workshop_guide/programming/learning_path/struct.html"}},[t._v("struct")]),t._v(" instead.")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);