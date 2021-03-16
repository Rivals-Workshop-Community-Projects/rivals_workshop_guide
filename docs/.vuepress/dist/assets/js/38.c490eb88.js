(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{419:function(e,a,o){"use strict";o.r(a);var r=o(26),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"data-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[e._v("#")]),e._v(" Data Types")]),e._v(" "),o("p",[e._v("There are a few different kinds of data, playing by different rules.")]),e._v(" "),o("h2",{attrs:{id:"booleans-true-or-false-values"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#booleans-true-or-false-values"}},[e._v("#")]),e._v(" Booleans (True or False values)")]),e._v(" "),o("p",[e._v("A boolean value is simply "),o("code",[e._v("true")]),e._v(" or "),o("code",[e._v("false")]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("is_on_fire = true")]),e._v(" or "),o("code",[e._v("weapon_held = false")]),e._v(".")]),e._v(" "),o("p",[o("br"),e._v("\nThe "),o("code",[e._v("!")]),e._v(" operator inverts a boolean between true and false. "),o("code",[e._v("!true")]),e._v("\nis "),o("code",[e._v("false")]),e._v(". "),o("code",[e._v("is_toggled = !is_toggled")]),e._v(" would switch between true and false.")]),e._v(" "),o("p",[e._v("Booleans can also be combined, described "),o("a",{attrs:{href:"#logical-operators"}},[e._v("below")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"variable-comparison"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#variable-comparison"}},[e._v("#")]),e._v(" Variable Comparison")]),e._v(" "),o("p",[e._v("All variables can be compared for equality, which returns a boolean value.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("==")]),e._v(' means "are equal?" '),o("code",[e._v("2 == 3")]),e._v(" will be read as "),o("code",[e._v("false")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("!=")]),e._v(' means "are not equal?" '),o("code",[e._v("2 != 3")]),e._v(" will be read as "),o("code",[e._v("true")]),e._v(". (Remember "),o("code",[e._v("!")]),e._v(", the 'not' operator. "),o("code",[e._v("!=")]),e._v(" means 'not equal')")])]),e._v(" "),o("p",[o("br"),e._v("\nPeople sometimes compare booleans with "),o("code",[e._v("true")]),e._v(" or "),o("code",[e._v("false")]),e._v(". That's just plain silly. "),o("code",[e._v("is_active == true")]),e._v(" means the same\nthing as "),o("code",[e._v("is_active")]),e._v(". "),o("code",[e._v("is_active == false")]),e._v(" means the same as "),o("code",[e._v("!is_active")]),e._v(".")]),e._v(" "),o("p",[o("br"),e._v("\nNumbers have more operators, "),o("code",[e._v(">")]),e._v(", "),o("code",[e._v(">=")]),e._v(", "),o("code",[e._v("<")]),e._v(", and "),o("code",[e._v("<=")]),e._v(", described "),o("a",{attrs:{href:"#reals-numbers"}},[e._v("below")]),e._v(".")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/workshop_guide/programming/language/control_flow.html#if"}},[o("code",[e._v("if")])]),e._v(" statements use variable comparison extensively.")],1),e._v(" "),o("h3",{attrs:{id:"logical-operators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logical-operators"}},[e._v("#")]),e._v(" Logical Operators")]),e._v(" "),o("p",[e._v("You can combine booleans with logical operators.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("&&")]),e._v(" means 'and'. "),o("code",[e._v("can_use_fireball = fireball_ready && state_cat != SC_HITSTUN")])]),e._v(" "),o("li",[o("code",[e._v("||")]),e._v(" means 'or'. "),o("code",[e._v("bomb_should_explode = fuse_timer <= 0 || should_die")])])]),e._v(" "),o("p",[o("br"),e._v("\nIt is technically possible to use "),o("code",[e._v("0")]),e._v(" and "),o("code",[e._v("1")]),e._v(" as "),o("code",[e._v("false")]),e._v(" and "),o("code",[e._v("true")]),e._v(" respectively. "),o("strong",[e._v("Don't.")]),e._v(" It makes the intention of the\ncode much less clear. Numbers are for things that you can count. If a value is true or false, use "),o("code",[e._v("true")]),e._v(" and "),o("code",[e._v("false")]),e._v(".")]),e._v(" "),o("p",[o("br"),e._v(" "),o("a",{attrs:{href:"https://forum.yoyogames.com/index.php?threads/how-not-to-use-and.12871/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Some misconceptions."),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"reals-numbers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reals-numbers"}},[e._v("#")]),e._v(" Reals (Numbers)")]),e._v(" "),o("p",[e._v("Most variables hold numbers, such as speed or percent or x position.")]),e._v(" "),o("p",[e._v("In addition to the "),o("code",[e._v("==")]),e._v(" 'is equal?' and "),o("code",[e._v("!=")]),e._v(" is not equal?` operators, numbers can be compared by their relative size.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v(">")]),e._v(" - 'is greater than?'")]),e._v(" "),o("li",[o("code",[e._v(">=")]),e._v(" - 'is greater than or equal to?")]),e._v(" "),o("li",[o("code",[e._v("<")]),e._v(" - 'is less than?',")]),e._v(" "),o("li",[o("code",[e._v("<=")]),e._v(" - 'is less than or equal to?'")])]),e._v(" "),o("p",[e._v("Numbers can use math operators "),o("code",[e._v("+")]),e._v(", "),o("code",[e._v("-")]),e._v(", "),o("code",[e._v("*")]),e._v(" and "),o("code",[e._v("/")]),e._v(".")]),e._v(" "),o("p",[e._v("When increasing or decreasing a variable, "),o("code",[e._v("+=")]),e._v(", "),o("code",[e._v("-=")]),e._v(", "),o("code",[e._v("*=")]),e._v(" and "),o("code",[e._v("/=")]),e._v(" can be used as a shortcut. "),o("code",[e._v("x += 1")]),e._v(" increases x 1,\nthe same as "),o("code",[e._v("x = x+1")]),e._v(".")]),e._v(" "),o("p",[o("code",[e._v("my_var++")]),e._v(" or "),o("code",[e._v("my_var--")]),e._v(" are shorthand for "),o("code",[e._v("my_var+=1")]),e._v(" and "),o("code",[e._v("my_var-=1")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"integers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#integers"}},[e._v("#")]),e._v(" Integers")]),e._v(" "),o("p",[e._v("All numbers are reals. Integers are a subset of reals with no decimal value. "),o("code",[e._v("1")]),e._v(", "),o("code",[e._v("-100")]),e._v(", "),o("code",[e._v("4140")]),e._v(" are integers,\nwhile "),o("code",[e._v("2.5")]),e._v(" is not.")]),e._v(" "),o("p",[e._v("Some Rivals variables are meant to be integers, such as "),o("code",[e._v("x")]),e._v(" and "),o("code",[e._v("y")]),e._v(" positions. If you ever need to convert a real to an\ninteger, you can\nuse "),o("a",{attrs:{href:"https://docs.yoyogames.com/source/dadiospice/002_reference/maths/real%20valued%20functions/index.html#:~:text=lengthdir_y-,Rounding%20Functions,These%20are%20all%20functions%20that%20round%20or%20select%20values,-%3A",target:"_blank",rel:"noopener noreferrer"}},[e._v("rounding functions"),o("OutboundLink")],1),e._v("\nlike "),o("code",[e._v("round")]),e._v(", "),o("code",[e._v("floor")]),e._v(" and "),o("code",[e._v("ceil")]),e._v(".")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.yoyogames.com/source/dadiospice/002_reference/maths/real%20valued%20functions/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GML Reals Official docs"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"strings-text"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#strings-text"}},[e._v("#")]),e._v(" Strings (text)")]),e._v(" "),o("p",[e._v("Strings are text. Rivals doesn't need a lot of text processing, but they're used when using "),o("code",[e._v("print")]),e._v(" or displaying text\nas part of a "),o("RouterLink",{attrs:{to:"/workshop_guide/programming/scripts/animation_scripts.html#draw-hud-gml"}},[e._v("HUD")]),e._v(".")],1),e._v(" "),o("p",[e._v("String value are anything between quotes, either single "),o("code",[e._v("'...'")]),e._v(" or double "),o("code",[e._v('"..."')]),e._v(".")]),e._v(" "),o("p",[e._v("Strings can be added together with "),o("code",[e._v("+")]),e._v(". "),o("code",[e._v('"a" + "b" == "ab"')]),e._v(".")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://docs.yoyogames.com/source/dadiospice/002_reference/strings/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official docs"),o("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);