// ==============================
//       Dramatis Personae
// ==============================

var hobbits = [
"Frodo Baggins",
"Samwise 'Sam' Gamgee",
"Meriadoc 'Merry' Brandybuck",
"Peregrin 'Pippin' Took"
];

var buddies = [
"Gandalf the Grey",
"Legolas",
"Gimli",
"Strider",
"Boromir"
];

var baddies = [
"Sauron",
"Saruman",
"The Uruk-hai",
"Orcs"
];

var lands = [
"The Shire",
"Rivendell",
"Mordor"
];

// ==============================
//           Chapters
// ==============================

var makeMiddleEarth = function() {
  console.log("Trying to make middle earth.");
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section');
  middleEarth.setAttribute('id', 'middle-earth');


  // ???? var land should be delcared outside of for?
  var land;
  for(var i = 0; i < lands.length; i++) {
    // add each land as an article tag
    land = document.createElement('article');
    // assign the name of the land as the id of the corresponding article tag
    land.setAttribute('id', lands[i]);
    // inside each article tag include an h1 with the name of the land
    var landName = document.createElement('h1');
    landName.innerHTML= lands[i];
    land.appendChild(landName);
    middleEarth.appendChild(land);
  }
  // append the section to the body
  document.body.appendChild(middleEarth);
};

var makeHobbits = function() {
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  var ulHobbits = document.createElement('ul');
  ulHobbits.setAttribute('id', 'hobbits');
  var hobit;
  for(var i = 0; i < hobbits.length; i++) {
    hobit = document.createElement('li');
    hobit.setAttribute('className', 'hobbit');
    hobit.setAttribute('id', hobbits[i]);
    hobit.innerHTML = hobbits[i];
    ulHobbits.appendChild(hobit);
  }
  document.getElementById('The Shire').appendChild(ulHobbits);
};

var keepItSecretKeepItSafe = function() {
  // create an empty div with an id of 'the-ring'
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  // add the ring as a child of Frodo
  document.getElementById('Frodo Baggins').appendChild(theRing);
};

var makeBaddies = function() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  var ulBaddies = document.createElement('ul');
  ulBaddies.setAttribute('id', 'baddies');
  var baddy;
  for(var i = 0; i < baddies.length; i++) {
    baddy = document.createElement('li');
    baddy.setAttribute('className', 'baddy');
    baddy.setAttribute('id', baddies[i]);
    baddy.innerHTML = baddies[i];
    ulBaddies.appendChild(baddy);
  }
  document.getElementById('Mordor').appendChild(ulBaddies);
};

var makeBuddies = function() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
  var aside = document.createElement('aside');
  document.getElementById('Mordor').appendChild(aside);
  var ulBuddies = document.createElement('ul');
  ulBuddies.setAttribute('id', 'buddies');
  var buddy;
  for(var i = 0; i < buddies.length; i++) {
    buddy = document.createElement('li');
    buddy.setAttribute('className', 'buddies');
    buddy.innerHTML = buddies[i];
    buddy.setAttribute('id', buddies[i]);
    ulBuddies.appendChild(buddy);
  }
  aside.appendChild(ulBuddies);
};

var leaveTheShire = function() {
  // grab the hobbits and move them to Rivendell
  document.getElementById('Rivendell').appendChild(document.getElementById('hobbits'));
};

var beautifulStranger = function() {
  // change the buddy 'Strider' textnode to "Aragorn"
  var strider = document.getElementById('Strider');
  strider.innerHTML = 'Aragorn';
  // strider.setAttribute('id', 'Aragorn');
};

var forgeTheFellowShip = function() {
  // move the hobbits and the buddies to Rivendell
  var rivendell = document.getElementById('Rivendell');
  rivendell.appendChild(document.getElementById('hobbits'));
  rivendell.appendChild(document.getElementById('buddies'));
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var addFellowship = function(name) {
    var theFellowship = document.createElement('div');
    // theFellowship.setAttribute('id', 'the-fellowship');
    var h1TheFellowship = document.createElement('h1');
    h1TheFellowship.innerHTML = 'The Fellowship';
    theFellowship.appendChild(h1TheFellowship);
    document.getElementById(name).appendChild(theFellowship);
  }

  for(var i = 0; i < hobbits.length; i++) addFellowship(hobbits[i]);
  for(var i = 0; i < buddies.length; i++) addFellowship(buddies[i]);
};

var theBalrog = function() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // add a class "the-white" to this element
  var gandalf = document.getElementById('Gandalf the Grey');
  gandalf.innerHTML = 'Gandalf the White';
  gandalf.setAttribute('class', 'the-white');
  // in the style.css, add a css rule to make elements of the class "the-white"
  // have a white background and a grey border
  var theWhite = document.getElementsByClassName('the-white')[0];
  theWhite.style.backgroundColor = 'white';
  theWhite.style.border = '2px solid grey';
};

var hornOfGondor = function() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert('The horn of gondor was blown!\n' +
        'Boromir was killed!');
  // put a linethrough on boromir's name
  document.getElementById('Boromir').style.textDecoration = 'line-through';
  // Remove the Uruk-Hai from the Baddies on the page
  document.getElementById('The Uruk-hai').remove();
};

var itsDangerousToGoAlone = function(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
};

var weWantsIt = function() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
};

var thereAndBackAgain = function() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
};

// ==============================
//         Miscellaneous
// ==============================

var itWhispers = function() {
  // add a class "whispered" to the hobbit that was clicked
  // add a CSS rule in style.css for the class "whispered" to turn the text
  // color to "goldenrod"
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  // Attach chapter event listeners here!
  document.getElementById('1').addEventListener('click', makeMiddleEarth);
  document.getElementById('2').addEventListener('click', makeHobbits);
  document.getElementById('3').addEventListener('click', keepItSecretKeepItSafe);
  document.getElementById('4').addEventListener('click', makeBaddies);
  document.getElementById('5').addEventListener('click', makeBuddies);
  document.getElementById('6').addEventListener('click', leaveTheShire);
  document.getElementById('7').addEventListener('click', beautifulStranger);
  document.getElementById('8').addEventListener('click', forgeTheFellowShip);
  document.getElementById('9').addEventListener('click', theBalrog);
  document.getElementById('10').addEventListener('click', hornOfGondor);
  document.getElementById('11').addEventListener('click');
  document.getElementById('12').addEventListener('click');
  document.getElementById('13').addEventListener('click');
};
