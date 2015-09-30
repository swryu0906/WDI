# REPS ON REPS ON REPS!!!

![reps](https://s-media-cache-ak0.pinimg.com/236x/c6/8e/4c/c68e4c13e2b79067b9f309c16c6d74a6.jpg)

#### Subjects covered.

- Creating functions
- Iteration and nesting
- Functions on numbers, strings, arrays

## Setup

Read [the MDN guide to functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

Open your `w01/d03` folder and create a folder called `homework`.
In your `homework` folder create an `app.js` file; this is where you will be writing your code.

## Part 1

Write a *for* loop that iterates in *reverse*. Console.log a countdown from 1000 to 0. 

## Part 2

Write a function `justDoIt` that accepts one parameter an argument. The function should return a string that has your argument and the phrase "JUST DO IT".

```javascript
//example usage
justDoIt("will");
// => "will JUST DO IT!";
```

## Part 3

Write a function `twoLengths` that accepts two parameter as an argument. The function should return an array of numbers where each number is the length of the corresponding string.

```javascript
// example usage
twoLengths("Hank", "Hippopopalous");
// => [4, 13]
```

## Part 4

Write a Javascript function called `transmogrifier`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
power of 2` is 225.

Use your function to find the following answers.

```javascript
transmogrifier(5, 3, 2)
```

## Part 5

Write a function `wordReverse` that accepts a single argument, a string. The
method should return a string with the order of the words reversed. Don't worry
about punctuation.

```javascript
// example usage
wordReverse("Ishmael me Call")
// => "Call me Ishmael"
```

## Part 6

Write a function `longest` that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```javascript
// example usage
longest(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);
// => "Peanutbutter"
```

## Part 7

Write a function called `toonify` that takes two parameters, `accent` and `sentence`.
- If `accent` is the string `"daffy"`, return a modified version of `sentence` with all "s" replaced with "th".
- If the accent is not daffy, just return the sentence as-is.

```javascript
// example usage
toonify("daffy", "so you smell like sausage")
// => "tho you thmell like thauthage"
```

## Part 8

Write a function `forDigitSum` that accepts a number and returns the sum of its digits using a `for` loop.

```javascript
// example usage
var num = 421;
forDigitSum(num)
// => 7;
```
## Part 9

Write a function `testPrime` that accepts a number as a parameter and returns `true` if the number is prime or `false` if it's not.

Hint: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

```javascript
testPrime(37);  
// => true;
```
## Part 10 (Super Bonus)

Write a function `insertDash` that accepts a number as a parameter and returns the parameter with a dash inserted between 2 odd numbers.

```javascript
insertDash(454793);
// => 4547-9-3
```

#### Finished? :trophy:

Awesome! Please submit your evening assignment via a GitHub issue. In the body of your submission, make sure to leave your comfortability (0–5), completeness (0–10), a win, a challenge and maybe a comment about this assignment.

