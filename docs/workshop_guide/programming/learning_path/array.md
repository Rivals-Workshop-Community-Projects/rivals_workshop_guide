# Array

An array is an ordered sequence of variables.

In Rivals, arrays can be created with `[value1, value2, value3, ...]` such as:

```gml
hit_noise_names = [
    "oof",
    "ugh",
    "argh",
] 
```

Arrays are accessed like `my_array[0]` for the first item, `my_array[1]` for the second, and so on. That can be a bit
hard to remember at first. In programming, the first slot is *usually* index `0`.
\
`array_length(array)` gets the number of items in the array.

\
Arrays are usually accessed with a [for loop](#for-loop) (see below), which lets you access each item inside.

\
Items can be added to the end of an array with `my_array[array_length(my_array)] = new_value`, but be careful. Each time
the array grows larger, the language needs to completely rebuild it, which can become slow. If you're going to be adding
values often, then initialize the array with `my_array[<maximum number you expect to need>] = noone`, which will create
empty slots in the array up to that size. Be careful to check if the value is `noone` when later accessing the array.

::: construction

The Assistant will provide better tools for building and accessing arrays without the above concerns.

:::

## For Loop

For Loops are the primary way to access the contents of an array. At its simplest, a for loop counts from one number to
another, and repeats the code inside it for each value.

```gml
// prints each number from 0 to 9 (not 10)
var number_to_count_to = 10
for (var i = 0; i < number_to_count_to; i += 1) {
    print(i)
}
```

The for loop updates a counter, `i`, and repeats a block of code until some condition is met.

The `i` stands for 'iterator.' Each time the loop runs is an 'iteration.'

There are three parts in the head of the for loop, separated by semicolons.

- The first is a statement, usually to set the initial value of the iterator.
- The second is a [boolean](data_types.md#booleans-true-or-false-values) expression meaning 'should the loop end now?'
- The third is a statement run each time the loop finishes, usually updating the iterator.

It is used most often to access each value of an array, by counting through each index, and accessing the value at that
index.

```gml
var my_array = ["a", "b", "c", "d"]
for (var i = 0; i < array_length(my_array); i += 1) {
    var item = my_array[i]
    print(item)
}
```

[The Assistant](/assistant) has a way to rapidly generate for loops over an array, by
typing `$foreach <array name>$`, such as `$foreach my_array$`.

([Official Docs](https://docs.yoyogames.com/source/dadiospice/002_reference/001_gml%20language%20overview/401_11_for.html))

## DS datastructures

You may come across other datastructures, starting with `DS_`, such as `DS_list`. 

GML provides more powerful
datastructures that **require great care to use, and are typically not recommended.** These structures always require a
function call to safely destroy them. There are *many* ways this can not occur, which will lead to gradual memory issues
even after the match ends!

Try to use an array or [struct](struct.md) instead.