# Anticipation, Action, Recovery

![](https://miro.medium.com/max/700/1*EqRxLzPSZHAll3pA9bBUGA.png)

Many animations, especially attacks, involve the character performing an action and returning to a neutral position.

These animations have three parts:

- **Anticipation**, when the character is preparing to act.
- **Action**, when the character is performing the action, usually while the hitboxes are active.
- **Recovery**, after the action, when the character is not yet ready to act again.

In fighting games, each of these parts has an important mechanical meaning! The players must be able to quickly tell
when an attack is coming, and when a character is able to act.

These poses should highly readable, with [exaggerated](pose.md#exaggeration) and
distinct [silhouettes](pose.md#silhouette).

![](https://miro.medium.com/max/700/1*s-ASuJAPKPE41dZ8TgXbNA.png)

## Fast Transitions

### Clarity

Normally it's good for animations to flow smoothly, but it is more important that the character's current state is very
clear.

If the character smoothly moves between two poses, then during the frames in between it is unclear which state the
character is currently in.

The character needs to get into their pose *fast*, and stay clearly in that pose until they quickly transition to the
next.

Unclear posing is most common
in [the transition between recovery and idle](anticipation_action_recovery.md#transition-to-idle), because it tends to
last the longest.

### Slow In and Out

Slow In and Out is an animation principle based on how most motion accelerates and decelerates rather than moving at a
constant speed.

Sustaining the anticipation and recovery poses gives the impression of gradually changing speed, rather than immediately
reaching top speed.

[Short Video Guide](https://youtu.be/fQBFsTqbKhY?t=7)

### Power

Longer, slower movements show that there is less force behind them. This leads to weak, unimpressive attacks.

[Classic Skullgirls talk on using fewer transition frames to make more powerful animations.](https://www.youtube.com/watch?v=Mw0h9WmBlsw)

# Anticipation

<img src="https://i.gyazo.com/819ea1883ee24d83c71bcde1f8bcee6e.png" height=200 alt="zetter anticipation">


Anticipation is extremely important for **readability**. The few frames of anticipation before an attack are the only way
for the opponent to know that an attack is coming, and where it will hit.

Anticipation poses should always have a distinct [silhouette](pose.md#silhouette) that stands out from the
idle/jump/crouch stance it comes out of.

The stronger the attack, the more obvious the pose has to be, to give the opponent a fair chance to react.

\
<img src="https://c10.patreonusercontent.com/3/eyJ3Ijo2MjB9/patreon-media/p/post/34927686/318697c1bf9e41bdb644d1fc3577b410/1.gif?token-time=1619644269&token-hash=f4Lwny6D8aln8ToNjmb3VfzOm0h3M5kjgAdYBTBGKmg%3D" height=250 alt="anticipation gif">

A powerful anticipation also creates a feeling of physicality and power.

::: quote

A powerful attack deserves a powerful windup.

Your punch is not going to feel powerful if your character doesn't put their whole body into it.

...

Your big lumbering character is not going to feel massive if they just leave the ground with no motion in their jump
squat.

...

We try to focus on good distinct startup poses to make combat easier to follow. We also try to show some personality
when we can.

~ Dan Fornace

:::

[Short Video Guide](https://youtu.be/F8OtE60T8yU?t=7)

### Anticipation Showing Direction

Attack anticipation should not only show *that* an attack is coming, but *where* it will hit.

![](https://miro.medium.com/max/700/1*yHiRHJRmlnEqidLLKaW_0Q.png)

::: quote

<img src="https://i.gyazo.com/210c574a0b5a7539927e0edf3c594374.png" height=100 alt="Amber nondirectional anticipation">
<img src="https://i.gyazo.com/982fe72ace5c05dac02f8c4926cb5c24.png" height=100 alt="Amber direction anticipation">

In the first one, she's facing directly towards the camera. It's hard to tell where she's about to leap to.

The bottom one shows better where Amber is aiming towards. She's aiming to the right.

~ BountyXSnipe

:::

In addition to a clear pose, characters always look in the direction they're going to attack.

# Active

<img src="https://i.gyazo.com/b23b781057cbb4f6fe418425c7105d26.png" height=250 alt="zetter active">

The active pose needs to communicate the hitboxes size and duration.

If there are different kinds of hitboxes depending on position or time, the active frames should show them.

The active pose is often a very fast movement, shown with a [smear](pose.md#smears).

<img src="https://i.gyazo.com/baeddfa57866bdf284a82a95a8c65970.png" height=250 alt="absa fair active">

# Recovery

<img src="https://i.gyazo.com/2b03ba64f783db830ff30cd5a885483f.png" height=250 alt="zetter recovery">

Recovery poses are usually a continuation of the attack's motion, with the character off-balance over over-extended.

### Transition to Idle

The transition from recovery back to idle needs to be [fast and clear](anticipation_action_recovery.md#fast-transitions)
so that the player knows what frame they're able to act on.

The last frames of the recovery can't look similar to idle, or players will try to act while still in recovery and miss
inputs.

::: quote

If you set a linear scale between the recovery pose and idle, then it is impossible for the player to know when they can
act.

![](https://miro.medium.com/max/1858/1*wTQH2AFrkoaqfipXHNH03w.png)


Players will feel like they are stuck standing still, and the game will feel clunky and unresponsive.

Keep the player in the recovery pose for as long as possible.

\
Then after some time, have them pop back up quickly and return to idle.

This action of getting back up should follow the same rules of animation.

A little squash before they push off the ground and then stretch as their upper body moves back up. You can even have
them perform an overshoot or other flourishes to add personality to their recovery animations.

If your attack requires a long recovery, explore an elaborate animation. The character can spin, roll over or reassemble
themselves.

\
But they don’t get close to their idle pose until they are ready to act again.

~ [Dan Fornace](https://fornace.medium.com/fighting-game-design-with-dan-fornace-the-power-of-silhouettes-915fde48318f)

:::

### Animating Long Recoveries

::: quote

During [the recovery pose] you can have secondary parts of the character react to their action
with [Follow Through or Overlapping Action](advancing_frames.md#follow-through-and-overlapping-action). If they are
hunched down after a big swing, then have a cape or hair follow them.

The cape can hit them and flutter around as they stay hunched over showing off how much force was behind their swing.

~ [Dan Fornace](https://fornace.medium.com/fighting-game-design-with-dan-fornace-the-power-of-silhouettes-915fde48318f)

:::

::: sources

[Dan Fornace](https://fornace.medium.com/fighting-game-design-with-dan-fornace-the-power-of-silhouettes-915fde48318f)

[jasontomlee](https://www.patreon.com/posts/7-animation-p2-34927686)

:::

::: construction

This doesn't yet address held active poses, like Mario nair.

:::