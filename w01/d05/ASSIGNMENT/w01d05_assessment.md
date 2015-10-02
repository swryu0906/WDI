# WDI Week 01 Assessment

![image](http://i.giphy.com/U5dt0Gc98oybK.gif)

Congratulations on your first week of WDI!

At the end of certain weeks we'll assess your progress through the week's
material with a series of short questions.  This gives us a data set to talk
about with you during one on one meetings and code reviews.

You'll be entering these questions in by hand.

| Topic |        |
| :--   | :--    |
| Bash  |  _ / 4 |
| Git   |  _ / 3 |
| Variables | _ / 5 |
| Arrays    | _ / 4 |
| Objects   | _ / 3 |
| Functions | _ / 2 |

> Write your answers in the prompts in the boxes below

# Bash

Imagine the following directory structure exists at `~/titanic`

```sh
titanic/
├── first_class
│   └── rose.md
├── second_class
└── third_class
    └── jack.md
```

```sh
# Imagine your present working directory is
# $ ~/titanic
# Create a file called `sos.txt` inside `titanic`.
$ touch sos.txt
# or $ touch ~/titanic/sos.txt

# Move `jack.md` from `third_class` to `first_class`.
$ mv ~/titanic/third_class/jack.md ~/titanic/first_class/

# Imagine your `pwd` displayed `~/titanic/third_class`. Enter the commands to
# move up to `~/titanic` and into `second_class`.
$ cd ../second_class
# or $ cd ..
# $ cd second_class

# Remove `titanic/` and everything in it.
$ rm -rf ~/titanic
```



# Git

```sh
# Write the commands to initialize a new git repo
$ git init

# Create a new file called `readme.md`
$ touch readme.md

# Add and commit the file with the message "Initial commit"
$ git add .
$ git commit -m 'Initial commit'

```

# Variables

```js
// Assign the string "Ahab" to a variable called `captain`
var captain = 'Ahab';

// Use string concatenation to form the phrase "Oh Ahab, my Ahab!"
var newString = 'Oh ' + captain + ', my ' + captain + '!';
```

```js
var a = "a";
var b = a;
a = "c"
var c = b.toUpperCase();

// What are the current values of `a`, `b`, and `c`?

// currentValueOfA == 'c'
// currentValueOfB == 'a'
// currentValueOfC == 'A'
```

# Conditionals

```js
var souls = 3;
var lifeRafts = 2;

// Write a conditional statement that console.logs "SOS!" if there are
// more souls than life rafts.

if(souls > liftRafts) {
   console.log('SOS!');
}


```

# Data structures

## Arrays

```js
// Create an array called `weekend` with just 'Friday' in it.
var weekend = ['Friday'];
// Add 'Saturday', and 'Sunday' to the array
weekend.push('Saturday', 'Sunday');
// How would you access 'Saturday'?
weekend[2];
// or weekend[weekend.indexOf('Saturday')];
// Remove 'Friday from the array'
weekend.shift();

```

## JavaScript Objects

```js
// Create an object literal called `brain` with a property of `energyLevel`
// that points to the number value 10
var brain = { energyLevel : 10 };

// Access the value 10 within the `brain` object
//
var energyLevelOfBrain = brain.energyLevel;
// or var energyLevelOfBrain = brain['energyLevel'];

// Add a `dream` property to the `brain` that points to the String value
// "electric sheep"
//
brain.dream = 'electric sheep';
brain['dream'] = 'electric sheep';  
```

## Functions

```js
// Write a function to calculate the area of a rectangle
// (the product of its length and its width).
//
//
//
var areaOfRect = function(length, width) {
  return length * width;
}
```

```js
// Invoke the function with 3 and 4 as arguments and
// save it to a variable
//
//
var area = areaOfRect(3, 4);
```
