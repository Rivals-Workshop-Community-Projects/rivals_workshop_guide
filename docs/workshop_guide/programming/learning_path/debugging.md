# Troubleshooting

Much of programming is figuring out why things aren't working. Expect things to not work. When you
write something new, it'll probably be broken in obvious ways that you'll figure out and change.

The trouble is when the code is wrong in more subtle or complicated ways, where finding the source of the problem is its
own challenge.

**Always press Ctrl+8 to display debug messages when testing your character.**

## Types of Bugs

Bugs are either *Syntax* or *Semantic* problems.

### Syntax Errors

Syntax errors are when the computer can't understand the program.

Examples in English: "This sentence is sytanxicly. wrong", "there is mistakes tihs in ."

Examples in GML:

- `varr distance = 3` - `var` is misspelled.
- `if (charged { ...` - Start `(` is used but ending `)` is missing.
- `ammo = 3 + ` - The `+` operator only given one value.

These errors are usually easy to find (your editor should underline them for you in red) and easy to fix once you see what's
wrong. If your editor doesn't point them out to you, they should appear in the [error log](#error-log) as soon as the
game loads the script.

### Semantic

Semantic errors are when the program is sane, but doesn't mean what you want it to.

Classic example in English: "The panda eats, shoots and leaves" - Where the panda has a gun.

Most bugs that aren't printed at load time is a semantic bug, and they can be much harder to detect and solve.

## Diagnosis

To find the source of an error, you start with whatever clue you have about the incorrect behavior. When Rivals detects
the error, it will give you the line number, so you know where to start. When there is no error message, you'll
have to guess at what point you'll expect the wrong behavior to be visible.

Once you know what line to investigate, use `print` to show the content of variables and learn more about what's
happening at the time.

Sometimes the error makes it obvious what to check (`Type check failure` makes it clear that a value's type is wrong),
and other times you may need to explore.

If doing this in an update script, the log may become full of irrelevant noise. You can wrap the print in
an [`if`](conditionals.md#if) block to only print in certain situations.

If you find a variable with a wrong looking value, fix it if you know how, or repeat the process to find *why* it has
that value. This should lead you to the source of the problem.

It's sometimes helpful to 'comment out' lines of code with Ctrl+/ to prevent them from running, to see how the code
behaves without them. This is a messy process, but can help test your understanding of the code.

### Error Log

After you press Ctrl+8, errors will display in the log.

![](https://media.discordapp.net/attachments/659932047741157406/808387005007659125/unknown.png)

The game prints errors in the form `ERROR! <character> <script>[L<line number>,c<column on line>] <error description>`

After a script encounters an error, it will skip the rest of the script for that frame, possibly causing other strange
behavior.

### Crash Window

![](https://media.discordapp.net/attachments/630151697162960916/815258404057907210/unknown.png?width=653&height=609)

Sometimes Rivals isn't able to handle the error your code causes. Rather than just the script failing, the entire
program crashes.

These don't always give a line number, and may reference scripts in Rivals' inner workings, rather than your script
containing the problem.

This is often caused by passing invalid arguments to a built-in function, or trying to access undefined memory in
a [data structure](array.md).
