const tags = ['G', 'A', 'T', 'C'];

for (let x = 0; x < tags.length; x+= 1) {
  for (let y = 1; y < tags.length - 1; y += 1) {
    console.log(`${tags[x]}${tags[y]}`);
  }
}

/*
12
13
22
23
32
33
42
43
*/

//flipping to y and x returns:
/*
21
31
22
32
23
33
24
34
*/

// the outer loop iterates over all 4 letters, printing them as the second letter. The inner loop iterates over just ‘A’ and ‘T’.

//
x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);

//

1.) First iteration:
X is 0 and Y is 0.
0 = 0 + 0;
Prints 0

Now iterate one

2.) x is still zero, but 'i' becomes 1

x = x(0) + (y)1, which means x now = 1
Prints 1

Now iterate another one, which changes 'i' and 'i' becomes 2.

3.) x = x(1) + i(2), which means x now = 3
prints 3

Now iterate another one, which changes 'i' and 'i' becomes 3.

4.) x = x(3) + i(3), which means x now = 6
prints 6

now iterate another one, which changes 'i' and 'i' becomes 4.

5.) x = x(6) + i(4), which means x now = 10
