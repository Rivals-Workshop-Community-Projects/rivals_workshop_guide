# Visuals

::: construction

This should probably cover

- Designing idle specifically.
- Visual design principles.

The below is rough notes.
:::


## Design References

### Design references

Some modders spend a lot of time

\
<details>
<summary>Example of how references can guide a character design</summary>

Say that you want to make a twisty, tricky witch character.

Google images "witch" doesn't help much, looking halloweeny, but google images "hag" has some helpful pictures such as:

<cimg src="https://lordsofnether.com/wp-content/uploads/2020/08/Hag-1920x2560.png" height=300 caption="Hag - by Lords Of Nether" />

You might decide the hunched back fits, and remember a similar posture from dota's witch doctor.

<cimg src="https://i.pinimg.com/originals/ff/7c/cd/ff7ccd5b2ed2e16c4845fdfc6b5d7396.png" height=300 caption="Witch doctor from Dota"/>

Leaning on the staff might be interesting. That and the twisty-misshapen look reminds of you of spooky old trees, so you
search for "gnarled wood."

<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/432ac0f9-fa1f-4654-abcd-ece09fbe141c/dphaj7-b1defe12-d5f2-4d0a-bda3-8fdc0b164e8c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDMyYWMwZjktZmExZi00NjU0LWFiY2QtZWNlMDlmYmUxNDFjXC9kcGhhajctYjFkZWZlMTItZDVmMi00ZDBhLWJkYTMtOGZkYzBiMTY0ZThjLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.o8lZX0CFfNJgLm2lakH-K64yFdCMC3ybSJV12EBc1wU" height=300 alt="Gnarled Wood">

That might work for body shape, or a staff, or at the very least for some cool attack vfx, like black lightning.

No animal immediately jumps to mind as fitting this weird body shape. Ferrets are long, and sorta shifty looking, so you
look for ferret characters.

<cimg src="https://static.wikia.nocookie.net/toothandtail_gamepedia/images/0/09/Ferret.png" height=300 caption="from Tooth and Tail"/>

Not quite right but could maybe work with some adjustments. Carrying something large on their back could be interesting.
Maybe a cauldron or big sack.

Thinking less about body shape and more in terms of 'witchyness', a raven or toad or black cat might be better choices,
giving more things to search.

</details>








# Entire process

*Definitely doesn't belong in design page...*

- Idea
- Concept art
- Keyframes (tested in game)
    - One anticipation, one active, one recovery?
- Gradually polish and add inbetweens

The early stages of a character's visual design are difficult and important. Your first idea is probably not the best
you can do. Spend some time improving your design before committing.

While you're drafting thoughts on paper, don't get attached to specific details. Not everything communicates well in
spritework. A neat patterned belt in concept art might just look like noise in a sprite.

# Communication

The primary function of character visuals are to communicate what's happening quickly and clearly.

::: quote
**Make It Obvious**

You can make characters feel more intuitive by tying clues and hints into the character itself. Well made animations,
sound cues and pointers can seamlessly make a character more understandable, even when being picked up or fought against
for the first time. If done well, an experienced player should be able to figure out the majority of a character's tools
with only minimal reading beforehand.

![](https://storage.ko-fi.com/cdn/useruploads/display/13ea369e-7d3d-487d-a51c-ecab76604c6b_int5.png)

The majority of a character's hints should be conveyed through the character's animation and audio. A good rule of thumb
is to have the character look in the direction they are attacking in, and exaggerate the character's action as much as
possible so that it reads clearly. Use effects or smears to lead the eye, and have flashes or sound cues to warn
opponents of an imminent threat. When the attack hits, use appropriate hitpause, hitsparks and sound effects to tell the
player how strong that attack was. All of this feedback amounts to the player getting a full impression of a move from
the moment they press the button.

More obvious cues may be needed in some cases, such as glowing auras, big icons and pointer arrows to tell players about
important mechanics. I think that it is best to use obvious cues for abstract, videogame-esque concepts, such as meters,
charge attacks, status effects and other gimmicks that don't follow real-world logic. Adding too many obvious cues can
be distracting however, and it can lessen the fun of figuring out a character naturally. It is up to the creator to find
a good balance between helping the player find the character's tools, and risking mechanics that the player won't
discover on their own.

~ [Mawral](https://ko-fi.com/post/Rivals-Workshop-Guide-Making-Intuitive-Characters-F1F62NFM1)
:::

Everything needs to be clear. Even details of the character's design should be larger and clearer.

# Base Idle Pose

Focus first on finding a base idle pose, but the advice here should inform all visuals.

https://ko-fi.com/post/RoA-Workshop-Guide--Designing-an-Idle-Sprite-N4N43NG85

## Form and Personality

> Getting a character's design to feel right can be difficult even before touching pixel art.
> I start with a general kinda idea I want and then make a pose, and then try to fit the idea to the pose
> ~ Shplurmff

> ... Fighting games should tell as much story as they can in their gameplay.
> ... It’s up to the designers and the artists to explain as much about a character as possible through their visuals.
> ~ Dan Fornace

> The early concepts determine the physique of your character.
> Are they thin? Are they strong? Are they human or are they made of another material? How do they move? Do they have legs? Are they fast? Are they slow? Do they stand out compared to the rest of your roster? Do they stand out compared to other fighting games?
> ~ Dan Fornace

## Pose Design

### Base Idle Pose

The idle sprite's pose is extremely important in communicating what the character is about. It expresses the character's
personality and capabilities.

> The latter idle pose concepts determine the personality and style of your character.
> Are they arrogant? Are they scared? Are they reckless or are they prepared? Do they lumber or do they prance?
> Does their stance match the personality that you want this character to have?
> ~ Dan Fornace

> We worked on idle sprites that would show off personality when we could.
> Absa stands tall and aloof to act like the fight is beneath her.
> Maypul stands hunched and prepared to show that she can react and move at a moment’s notice.
> ~ Dan Fornace

> With a strong idle pose, you can use that as a guide for the rest of movement of the character.
> The personality that you have determined should influence everything that the character is going to do.
> ~ Dan Fornace

> I think having a good idle sprite is essential.
> The base idle frame really helps me understand what the character should be physically capable of.
> It's easier for me to imagine what the future moves look like.
> ~ Pandabomb

![Image for post](https://miro.medium.com/max/1001/1*vEoDEqq_ZKMYNj25z-995w.png)

> You don’t have to be able to predict a character’s moveset just from the silhouette of their idle pose.
> But you should be able to get a high level idea what the character is going to be about.

![Image for post](https://miro.medium.com/max/1695/1*0XWtl4LWoFvpVMiMdp0w_A.jpeg)

`Sources:
https://fornace.medium.com/fighting-game-design-with-dan-fornace-the-power-of-silhouettes-915fde48318f#77eb`

### Other Poses

::: quote
**Similar Attack Startup Poses**

In fighting games, it is incredibly important for each attack to have a unique, recognizable starting pose. This lets
players identify which attack is being used and respond to it correctly. If the startup poses are too similar, certain
attacks could be mistaken for other ones until after they've hit the opponent. Attacks that are 'obscured' in this way
will frustrate opponents trying to counter them, and can make the character much harder to beat than they would be
otherwise.

Pay special attention to the first couple frames of your attacks, making sure their outlines stand out from each other
and from their 'idle' pose. Strong attacks especially should have clear, unmistakable poses to properly communicate to
the opposing player.

~ [Mawral](https://ko-fi.com/post/RoA-Workshop-Guide--5-Common-Character-Flaws-Ho-Y8Y23QCQX)
:::

Body parts that the character uses to attack should be especially visible, as they make attacks clearer. Etalus, maypul.
Find quote from Dan I think. Ranno and Wrastor's legs use highly contrasting colors.

Todo, clear poses with stubby limbs. Other challenges.

::: construction

unsorted stuff below

:::

Designing to be easier to draw.

- Avoid lots of secondary motion, scarfs capes hair
- Avoid complex shapes or patterns

::: construction

Ask about this

:::

Designing to be easier to pose.

- Avoid stubby limbs (?)
- Avoid capes and silhouette noise