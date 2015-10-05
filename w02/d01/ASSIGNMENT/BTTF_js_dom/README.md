![bttf](http://i.giphy.com/UOk61gfRlI1sA.gif)

## Fun with Javascript and the DOM

#### Objectives
 - Create functions that generate/manipulate HTML and CSS elements/selectors.
 - Practice using js methods, which manipulate the DOM.
 - Test code in the browser  and use Chrome dev tools to see how js can change what's on the page.


### "When this baby hits 88 miles per hour... you're gonna see some serious shit."

For tonight's homework you will be using javascript to generate HTML elements and edit their CSS selectors while seeing the results of this mayhem on the web page.

COMPLETE AT LEAST THROUGH PART 5.  The More the better, but your health and well-being come first.

You won't be hard coding HTML or CSS. If you are asked to give an element an id or class, etc., you will do it using javascipt (awesome, right?).

The instructions are also in the `outtatime.js` Put all your code in the `outtatime.js` file.

Before you start, make sure your `style.css` and your `outtatime.js` files are connected in your `index.html` file.


#### Part 1 - Save the Clock Tower!
If you open your html file in the browser, you will see an assortment of images representing points of interest in 1985 Hill Valley.  Generate labels for all of these images.

 - Create a section tag with an id of `hillValley`.

 - Add each point of interest from the `pointsOfInterest` array as an article tag.

 - Inside each article tag include an `<h1>` with the name of the point of interest.

 - Append `hillValley` to your document body.

#### Part 2 - Hello? McFly! Anybody Home?

Make a constructor function, and assign each name in the `family` array to the key `fname` and assign the last name 'McFly' to the key `lname`.

For example, Marty's dad might be assigned to a variable dad; therefore, `dad.fname + ' ' + dad.lname` should print 'George McFly'.

 - Create a `<ul>` called familyList.

 - Create a function that displays an unordered list of Marty's family(including Marty).

 - Give each McFly a class of `family`

 - Give Marty an id of `marty`.

#### Part 3 - Great Scott!
 - Take Marty from his home and place him at the Twin Pines Mall, with Doc and Doc's dog, Einstein.

 - Find the element with id 'timer' and set its display to `block`.

 - Create an `<li>` and put 'The Libyan nationalists' from the `enemies` array inside it.  Add this `<li>` to the Twin Pines Mall article.

 - Add a text decoration which puts a line through Doc's name since the Libyans shot him :(

#### Part 4 - Good night, future boy!
Marty takes the deLorean and skidaddles to 1955.

 - Find an element with id `nineteen-eighty-five`.

 - Find an element with id `nineteen-fifty-five`.

 - Change the element with the id `nineteen-eighty-five` so that it now has the class `last-time-departed`.

 - Change the element with the id `nineteen-fifty-five` so that is now has the class `present-time`.

 - Set the `Twin Pines Mall` element to display none.

 - Set the element with the id `mall` to display none.

 - Set the `Peabody Farm` element to display block.

 - Set the element with the id `farm` to display block.

 - Remove Marty's family from the `Lyon Estates` article.

 - Find Marty and put him in the `Peabody Farm`.


#### Part 5 - It's 'Make like a tree, and leave', Biff!

 - Give Marty the property `aka`, and assign 'Calvin' to it.

 - Change Marty's mom's last name from 'McFly' to her maiden(1955) name, 'Baines'.

 - Create a new div called `enchantment-dance` within the Hill Valley HighSchool article.

 - Add each enemy(especially Max Peterson, but omit the Libyan nationalists) one at a time to the enchantment dance.  After each enemy is added, make an alert that warns Marty of each enemy's arrival. (Remember in part 2 how you created a familyList?  That same logic would probably help in generating a goons list here.)

 - Take the line-through text decoration off of Doc's name and put him at the Clock Tower along with his dog(circa 1955), Copernicus.

#### Part 6 - It's your cousin, Marvin; Marvin Berry
 - Find the element with the id `marty-fade` and set its
display to block.

George knocks Biff out!
 - Change the color of the 'i' in Biff to black so that Biff now has a black i (get it?)

#### Part 7 - 1.21 Gigawatts
Use `setInterval` to give the clock tower image the appearance of being in a lightning storm.

`setInterval` takes 2 arguments.  The first argument is a function that will change the opacity of the image.  The second argument is the interval of time between each invocation of the function.  For instance,
```javascipt
  window.setInterval(function(){
    alert('hello');
  }, 1000);
```
will alert 'hello' once every second(or 1000ms). Hint: one `setInterval` is probably not enough.

 - Set the element with the id `nineteen-eighty-five` to now have the class `destination-time`.

#### Part 8 - See you in about 30 years
 - Set the element with the id `nineteen-fifty-five` to now have the class `last-time-departed`.

 - Set the element with the id `nineteen-eighty-five` to now have the class `present-time`.

 - Use `clearInterval` to stop the flickering of the clock tower image.

 - Set the Peabody Farm element to display none.

 - Set the element with the id `farm` to display none.

 - Set the Twin Pines Mall element to display block.

 - Set the element with the id `mall` to display block.

 - Put Marty, Doc, Einstein, and the Libyan nationalists at the mall.

Doc is wearing a bulletproof vest thanks to Marty.
 - Give Doc a 3px solid white border around his name.

 - Put a line through the Libyan nationalists since they crashed into a film lab.

 - Dance up and down like Doc! You finished the homework!

**Bonus:**  
 - Add a single button to the DOM that invokes each of the functions you created when clicked. For instance, the first click would fire off the `makeHillValley` funciton; the second click would fire off the `makeMcFlys` function and so on.
 - Add an event listener that plays music from Back to the Future when the mouse hovers over Marty's name.

### Resources

- [DOM Reference](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference)
- [Events Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [DOM Cheatsheet](http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)
