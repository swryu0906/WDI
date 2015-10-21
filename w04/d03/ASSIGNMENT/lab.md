# SHIP PILOT LAB

##### Learning Objectives
- Practice modeling a problem domain in an object-oriented way
- Practice defining classes with attributes and behaviors
- Practice debugging using `pry`

### Pilot Class

**Attributes**

* `@name` - A string, the name of the pilot
* `@age` - A number, the age of the pilot
* `@callsign` - A string, the nickname of the pilot
* `@badasspoints` - A number, should be set to 0 by default

**Behaviors**

* `initialize(name, age, callsign)`
	* Should take the arguments and set them to the instance methods
	* badasspoints should be set to 0
* `info` 
	* Should return a string saying "My name is WHATEVER, I am WHATEVER years old, and my callsign is WHATEVER"
* `train`
	* Should increase the badasspoints by 1
* The pilot class should have getter and setter methods for all its attributes

### Ship Class

**Attributes**

* `@name` - A string, the name of the ship
* `@ship_type` - A string, the type of ship (destroyer, tie-fighter, x-wing, carrier, etc...)
* `@pilot_limit` - A number, the limit of pilots the ship can have
* `@pilot_list` - An array of pilot objects, starts out empty

**Behaviors**

* `initialize(name, ship_type, pilot_limit)`
	* Should take the arguments and set them to the instance methods
	* Should create an instance method `@pilot_list` and set it to an empty array. It will hold your Pilot objects.
* `assign_pilot(name, age, callsign)`
	* Should create a new Pilot object with the arguments.
	* Check to see if the ammount of pilots is less than the pilot limit. If theres less pilots than the pilot limit, push the created Pilot object into `@pilot_list`
* `pilot_info` 
	* Should loop through the array of pilots and display the info of each pilot
* `most_badass`
	* Should loop through the list of pilots, find the one with the most badasspoints, and return a string that says ... "WHOEVER is the most badass pilot"
* `walk_the_plank(name)`
	* Should remove the pilot with the name that matches the argument
* `battle_against_ship(ship_object)`
	* Should accept one arguemnt, which should be an already instantiated Ship object
	* You want to loop through both ships and see which ship has pilots with more badasspoints
	* The ship with the most badasspoints is the winner
* The Ship class should have getter and setter methods for all its attributes

### PLAYGROUND

* Load your code into Pry, so you can play around with the code
* Make atleast 3 different ships
* Each ship should have ATLEAST 3 pilots (some may have more, depending on the pilot_limit)
* Make sure to train your pilots so they can be badass
* Have the ships battle each other ¯\\_(ツ)_/¯