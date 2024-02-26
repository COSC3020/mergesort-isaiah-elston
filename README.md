# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

### Answer

The first `for` loop in the implementation would have a worst case time complexity of $\mathrm{\Theta}(\log_{2}(n))$ because each time the `for` loop iterates it is incrementing `size *= 2` which essentially does the same thing as a function with two recursive calls. It can still be directly applied to the binary tree concept that we discussed in lecture. `size` will increase by a factor of two until it exceeds the input size of $n$ which is partitioning the array into "sub-arrays" without ever actually splitting the array up.

The second `for` loop in the implementation would have a time complexity of $\mathrm{\Theta}(n)$ in the worst case because for every "sub-array" that the outer loop creates, it would have to parse through the entire input size to ensure complete sortedness, and the input size of each "sub-array" will always add up the input size of the original array: $n$.

Next, we have to analyze the `while` loop and the final `for` loop nested within the aforementioned `while` loop. The `while` loop is really only ever taking a constant amount of work because all it is doing is checking conditions about the array, so the `while` loop is asymptotically insignificant **by itself**. However, anytime that the `for` loop is called within the `while` loop, it will have a worst-case time complexity of $\mathrm{\Theta}(n)$ as well. The reason for this is because in the worst case, the innermost `for` loop will have to move the `k`th term across the entire array to get it in the correct position.

In conclusion, by disregarding any and all constant factors of the implementation, the worst case time complexity would be $\mathrm{\Theta}(n^{2}\log(n))$ because all of the loops are nested which means we would get: $\log(n) * n * n = n^{2}\log(n)$.