//console.log("Linked.");

// Dramatis Personae
var friends = [
  'Doc Brown',
  'Einstein',
  'Copernicus',
  'Marvin Berry'
];

var enemies = [
  'Biff Tannen',
  'Max Peterson',
  'Match',
  'Skinhead',
  'The Libyan nationalists'
];

//Make into an object with fname:  and lname: "McFly"
var family = [
  'Marty',
  'Geroge',
  'Lorraine',
  'Dave',
  'Linda'
]

var pointsOfInterest = [
  'Clock Tower',
  'Twin Pines Mall',
  'Lyon Estates',
  'Peabody Farm',
  'Hill Valley HighSchool'
];

var body = document.querySelector('body');

//------ Part 1 - Save the Clock Tower!--------

function makeHillValley() {
  // Create a section tag with an id of hillValley;
  var sectionHillValley = document.createElement('section');
  sectionHillValley.id = 'hillValley';

  // body.appendChild(sectionHillValley);

  // Add each point of interest as an article tag
  var articlePointsOfInterest = [];
  for(var i = 0; i < pointsOfInterest.length; i++) {
    articlePointsOfInterest.push(document.createElement('article'));
    articlePointsOfInterest[i].id = pointsOfInterest[i];

    sectionHillValley.appendChild(articlePointsOfInterest[i]);
  }
  // Inside each article tag include an h1 with the name of the point of interest
  for(var i in articlePointsOfInterest) {
    var h1 = document.createElement('h1');
    h1.innerHTML = pointsOfInterest[i];
    articlePointsOfInterest[i].appendChild(h1);
  }

  // Append hillValley to your document body
  body.appendChild(sectionHillValley);
};
makeHillValley();


// If makeHillValley worked then the below will be useful.
var theClockTower = body.querySelectorAll('article')[0];
var mall          = body.querySelectorAll('article')[1];
var mcFlyhome     = body.querySelectorAll('article')[2];
var peabodyFarm   = body.querySelectorAll('article')[3];
var hillValHi     = body.querySelectorAll('article')[4];

// ------ Part 2 - Hello, McFly! Anyone Home? -----


// Make a constructor function, and assign each name in the `family` array to the key `fname` and assign the last name 'McFly' to the key `lname`. For example, Marty's dad might be assigned to the variable dad; `dad.fname + ' ' + dad.lname` should print 'George McFly'.

function makeMcFlys(fname){
  this.fname = fname;
  this.lname = 'McFly';
}

var familyArray = [];
for(var i = 0; i < family.length; i ++) {
  familyArray.push(new makeMcFlys(family[i]));
}

// Create a <ul> called familyList( Notice I'm outside of a function so other functions can see/use me).
var familyList = document.createElement('ul');
familyList.id = 'family';


function displayMcFlys() {
  // Display an unorded list of Marty's family.
  for(var i = 0; i < familyArray.length; i++) {
    var familyMember = document.createElement('li');
    familyMember.innerHTML = familyArray[i].fname + ' ' + familyArray[i].lname;
    familyList.appendChild(familyMember);
    // Give each McFly a class of 'family'
    familyMember.className = 'family';
    // Give Marty an id of 'marty';
    familyMember.id = familyArray[i].fname;
  }
  // var mcFlyhome = document.querySelector('#Lyon Estates');
  var mcFlyhome = document.getElementById('Lyon Estates');
  // console.log(mcFlyhome);
  // console.log(familyList);
  mcFlyhome.appendChild(familyList);
}
displayMcFlys();

// ------ Part 3 - Great Scott! --------

function deLoreanTest() {
  // Take Marty from his home and place him at the Twin Pines Mall, with Doc and Doc's dog, Einstein.
  var friendsList = document.createElement('ul');

  var liMarty = document.querySelector('#Marty');
  var liDoc = document.createElement('li');
  var liEinstein = document.createElement('li');

  liDoc.innerHTML = friends[friends.indexOf('Doc Brown')];
  liEinstein.innerHTML = friends[friends.indexOf('Einstein')];
  liDoc.className = 'friends';
  liEinstein.className = 'friends';
  liDoc.id = friends[0];
  liEinstein.id = friends[1];

  friendsList.appendChild(liMarty);
  friendsList.appendChild(liDoc);
  friendsList.appendChild(liEinstein);

  // var articleTwinPinesMall = document.querySelector('#Twin Pines Mall');
  var articleTwinPinesMall = document.getElementById('Twin Pines Mall');
  articleTwinPinesMall.appendChild(friendsList);

  // Find the id 'timer' and set its display to `block`.
  // document.querySelector('#timer').style.display = 'block';
  document.getElementById('timer').style.display = 'block';
  // document.getElementById('timer').display = 'block';
};
deLoreanTest();

// Oh No!! The Libyan nationalists have arrived seeking revenge on Doc for doublecrossing them, and stealing their plutonium.

function ohNoTheyFoundMe(){
  // Create an `<li>` element and put the Libyan nationalists from the enemies array inside it.  Add this <li> to the Twin Pines Mall article.
  var liLibyanNationalists = document.createElement('li');
  liLibyanNationalists.innerHTML = enemies[enemies.indexOf('The Libyan nationalists')];
  // Add a text decoration which puts a line through Doc's name since the Libyans shot him :(
  document.getElementById('Doc Brown').style.textDecoration = 'line-through';
};

ohNoTheyFoundMe();

// ----- Part 4 - This is Heavy

function goingBackInTime(){
  // Use this function to get Marty to HillValley circa 1955.


 // Find an element with id `nineteen-fifty-five`.
 var fiftyFive = document.getElementById('nineteen-fifty-five');

 // Find an element with id `nineteen-eighty-five`.
 var eightyFive = document.getElementById('nineteen-fifty-five');

 // Change the element with the id `nineteen-eighty-five` so that it now has the class `last-time-departed`.
 fiftyFive.className = 'last-time-departed';

 // Change the element with the id `nineteen-fifty-five` so that is now has the class `present-time`.
 eightyFive.className = 'present-time';

// Set the `Twin Pines Mall` element to display none
document.getElementById('Twin Pines Mall').style.display = 'none';

// Set the element with the id `mall` to display none
document.getElementById('mall').style.display = 'none';

// Set the `Peabody Farm` element to display block
document.getElementById('Peabody Farm').style.display = 'block';

// Set the element with the id `farm` to display block
document.getElementById('farm').style.display = 'block';

// Remove Marty's family from the `Lyon Estate` article.
// var family = document.getElementById('family');
document.getElementById('Lyon Estates').removeChild(document.getElementById('family'));


// Find Marty and put him in the `Peabody Farm`.
var marty = document.getElementById('Marty');
document.getElementById('Peabody Farm').appendChild(marty)

};
goingBackInTime();


// ------ Part 5 - It's 'Make like a tree, and leave', Biff! -------

function makeLikeATree() {

  // People think Marty's name is Calvin Klein.  Give him the property `aka`, and assign 'Calvin' to it.
  // Also Marty's mom, Lorraine isn't a McFly yet.  Change her last name to 'Baines'.
  familyArray[0].aka = 'Calvin';
  familyArray[2].lname = 'Baines';

  // Marty needs to get to the Enchantment Under the Sea dance so his mom and dad can fall in love, but Biff and his goons have other plans.
  // Create a new div called 'enchantment-dance' within Hill Valley HighSchool.
  divEnchantmentDance = document.createElement('div');
  divEnchantmentDance.id = 'enchantment-dance';
  document.getElementById('Hill Valley HighSchool').appendChild(divEnchantmentDance);


  // Add each enemy(especially Max Peterson, and omit the Libyans!) one at a time to the enchantment dance.  After each enemy is added, make  an alert that warns Marty of each enemy's arrival.
  for(var i = 0; i < enemies.length; i++) {
    if(enemies[i] !== 'The Libyan nationalists') {
      var enemy = document.createElement('li');
      enemy.innerHTML = enemies[i];
      enemy.id = enemies[i];
      enemy.className = 'enemy';
      document.getElementById('Hill Valley HighSchool').appendChild(enemy);
    }
  }

  // Meanwhile, take the line-through text decoration off of Doc's name and put him at the Clock Tower along with his dog(circa 1955), Copernicus.
  var liDocBrown = document.getElementById('Doc Brown');
  liDocBrown.style.textDecoration = 'line-through';
  document.getElementById('Clock Tower').appendChild(liDocBrown);
  document.getElementById('Clock Tower').appendChild(document.getElementById('Einstein'));
  var liCopernicus = document.createElement('li');
  liCopernicus.id = 'Copernicus';
  liCopernicus.innerHTML = 'Copernicus';
  document.getElementById('Clock Tower').appendChild(liCopernicus);

};
makeLikeATree();

// ----- Part 6 - It's your cousin, Marvin; Marvin Berry ------

function itsMarvinBerry(){
  // Find the element with the id 'marty-fade' and set its display to block.
  var martyFade = document.getElementById('marty-fade');
  martyFade.style.display = 'block';

  // George knocks out Biff.
  // Change the color of the 'i' in Biff to black so that Biff now has a black i (get it?).
  var biffTannen = document.getElementById('Biff Tannen');
  biffTannen.innerHTML = biffTannen.innerHTML.substring(0, 1) + '<span id="i">' + 'i' + '</span>' +
                          biffTannen.innerHTML.substring(2);
  document.getElementById('i').style.color = 'black';                        



};
itsMarvinBerry()

// ------- Part 7 - 1.21 Gigawatts ----------


function outtaTime(){
  // The Clock Tower is about to get struck by lightning. Get Marty over there as quickly as possible!

 // Use setInteval to give the clock tower image the appearance of being in a lighting storm:
   // setInterval will take 2 arguments. The first argument is an anonymous function that will change the opacity of the image.  The second argument is the interval of time between each invocation of the function.  For instance, window.setInterval(function(){alert('hello')}, 1000) will alert "hello" once every second(or 1000ms). Hint: One setInterval is probably not enough.



  // Set the element with the id 'nineteen-eighty-five' and class `last-time-departed` to now have the class `destination-time`

};
outtaTime();


function getBackToTheFuture(){

  // Send Marty back to his time.
  // Set the element with the id `nineteen-fifty-five` to now have the class `last-time-departed`.
  // Set the element with the id nineteen-eighty-five to now have the class `present-time`.

  // Use clearInterval to stop the flickering of the clock tower image.


 // Set the `Peabody Farm` element to display none
   // Set the element with the id `farm` to display none
 // Set the `Twin Pines Mall` element to display block
  // Set the element with the id `mall` to display block


  // Put Marty, Doc, Einstein, and the Libyan nationalists at the mall.  Since Doc is wearing a bulletproof vest thanks to Marty, give Doc a 3px solid white border around his name.  Put a line through the Libyans since they crashed.



  // Dance up and down like Doc; You finished the homework!!!



};
getBackToTheFuture();
