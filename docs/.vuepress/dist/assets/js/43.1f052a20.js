(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{430:function(t,a,e){"use strict";e.r(a);var i=e(26),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"advancing-frames"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advancing-frames"}},[t._v("#")]),t._v(" Advancing Frames")]),t._v(" "),e("p",[t._v("This page is for principles on the changes from one frame to the next, like when you're adding in-between frames to\nsmooth things.")]),t._v(" "),e("h2",{attrs:{id:"how-many-frames"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-many-frames"}},[t._v("#")]),t._v(" How Many Frames?")]),t._v(" "),e("p",[e("em",[t._v("As many as it needs.")])]),t._v(" "),e("p",[t._v('There\'s no fixed framerate that is "good enough" when animating, the goal is to find a middle ground between looking\nchoppy, and taking too long to animate.')]),t._v(" "),e("p",[t._v("A good way to find that point is\nby "),e("RouterLink",{attrs:{to:"/workshop_guide/art/workflow.html#starting-with-low-framerate"}},[t._v("starting with few frames, and gradually adding inbetweens as needed")]),t._v(" to\nmake the animation look smooth.")],1),t._v(" "),e("div",{staticClass:"custom-block quote"},[e("p",[t._v("Most attacks in rivals can get away with very few total frames. A simple punch can have as few as 5 or even 4 animation\nframes.")]),t._v(" "),e("p",[t._v("You should try to optimize your development by using as few frames as possible to [smoothly] convey a motion.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/workshop_guide/art/anticipation_action_recovery.html#fast-transitions"}},[t._v("This may actually end up making your character look better.")])],1),t._v(" "),e("p",[t._v("Here is the jab animation of a character i am working on currently, as an example:")]),t._v(" "),e("img",{attrs:{src:"https://media.discordapp.net/attachments/659932047741157406/891534467699712070/jab.gif",height:"100"}}),t._v(" "),e("p",[t._v("This loop of 2 punches uses only 8 frames, because the attack is fast, cancellable and repeatable. This is all that's\nnecessary to make it look smooth and clear in-game")]),t._v(" "),e("p",[t._v("~ Trail Mix (paraphrased)")])]),t._v(" "),e("h2",{attrs:{id:"redrawing-or-adjusting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redrawing-or-adjusting"}},[t._v("#")]),t._v(" Redrawing or Adjusting")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/workshop_guide/art/pose.html"}},[t._v("Communicating with the keyframes is very important")]),t._v(", and each keyframe should be drawn from scratch for\nmaximum impact and readability.")],1),t._v(" "),e("p",[t._v("However, when adding in-betweens, you can save time by copy-pasting the neighboring frames and adjusting to show the\nmovement.")]),t._v(" "),e("p",[t._v("Be careful of making the character look stiff, static, or robotic. You can look at the animations of character's you\nlike for reference of how much they move between each frame.")]),t._v(" "),e("h2",{attrs:{id:"follow-through-and-overlapping-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#follow-through-and-overlapping-action"}},[t._v("#")]),t._v(" Follow Through and Overlapping action")]),t._v(" "),e("p",[t._v("Soft parts of the character drag behind a character's movements, and keep moving after the character stops.")]),t._v(" "),e("p",[t._v("This is most visible with details like hair or clothes.")]),t._v(" "),e("p",[t._v("When something long and soft, like a scarf or tentacle, is pulled back and forth, the drag can make it take a wavy S\nshape.")]),t._v(" "),e("cimg",{attrs:{src:"https://media.discordapp.net/attachments/895523201784897578/895524392296153148/claire_fstrong.gif",height:"100",caption:"Follow through on cape - by Mr Nart"}}),t._v(" "),e("p",[e("a",{attrs:{href:"https://youtu.be/4OxphYV8W3E?t=7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Short Video Guide"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"subpixel-animation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subpixel-animation"}},[t._v("#")]),t._v(" Subpixel animation")]),t._v(" "),e("cimg",{attrs:{src:"https://saint11.org/img/pixel-tutorials/Subpixel.gif",caption:"Tutorial by saint11"}}),t._v(" "),e("p",[t._v("For subtle animations like an idle, there may be times when moving a full pixel is too big a movement, making things\nlook jumpy.")]),t._v(" "),e("p",[t._v("While you can't change a fraction of a pixel, you can use tricks to make the change less jarring.")]),t._v(" "),e("img",{attrs:{src:"https://i.pinimg.com/originals/32/41/6c/32416c5168f35cafda9047a40350bc85.gif",height:"200"}}),t._v(" "),e("img",{attrs:{src:"https://images-ext-2.discordapp.net/external/yyAlwiDC6Eg9e1hyuBV6KVh5a11if5VGwWOw_bKLrLY/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2ZjhmODRjLWZiMzYtNGNmYi1iYzg4LTc2YmMyZDMxNmY2N1wvZGNyYzg0Zy1mNGFkOWIzZS01NTNhLTRkMTYtOGYxZS0wYjIxYTE0MDM1YjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ww6vr-vCA5-qVHSzek7YTwdBrwXAyhS4Bab3KLuMW60/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6f8f84c-fb36-4cfb-bc88-76bc2d316f67/dcrc84g-f4ad9b3e-553a-4d16-8f1e-0b21a14035b2.gif?width=300&height=300"}}),t._v(" "),e("p",[e("br"),t._v(" "),e("br"),t._v(" "),e("img",{attrs:{src:"https://tinywarriorgames.com/wp-content/uploads/2019/01/subpixel-bad.gif",height:"200/"}}),t._v(" "),e("img",{attrs:{src:"https://tinywarriorgames.com/wp-content/uploads/2019/01/subpixel.gif",height:"200/"}})]),t._v(" "),e("div",{staticClass:"custom-block construction"},[e("p",{staticClass:"custom-block-title"},[t._v("Under Construction")]),t._v(" "),e("p",[t._v("I'd like examples from rivals characters here")])]),t._v(" "),e("div",{staticClass:"custom-block sources"},[e("p",{staticClass:"custom-block-title"},[t._v("Sources")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://saint11.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Saint11"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://tinywarriorgames.com/2019/01/04/game-development-pixel-art-sub-pixel-animation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tinywarriorgames"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.deviantart.com/doa687/gallery",target:"_blank",rel:"noopener noreferrer"}},[t._v("doa687"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);