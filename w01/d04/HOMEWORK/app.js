// // Part 1.
//
// var snakewaterMontana = {
//   paleontologist: "Dr. Alan Grant",
//   depth: "10 meters",
//   specimen: "Velociraptor"
// };
//
// // 1.
// var guestOfHonor = snakewaterMontana.paleontologist;
//
// // 2.
// var = clerverGirl = snakewaterMontana.specimen;
//
// console.log(guestOfHonor);
// console.log(clerverGirl);




// // Part 2.
//
// var nicaragua = {
//   depth: "200 meters",
//   annualbudget: 1500000,
//   specimens: [
//     "Tyrannosaurus Rex",
//     "Stegosaurous",
//     "Triceratops",
//     "Velociraptor"
//   ]
// };
//
// // 1.
// var nicaraguanSpecimens = nicaragua.specimens;
//
// // 2. My favoirte dinosaur is "Triceratops"
// var favoriteSpecimen = nicaragua.specimens[2];
//
// // 3.
// nicaragua.annualbudget += 250000;
//
// console.log(nicaraguanSpecimens);
// console.log(favoriteSpecimen);
// console.log(nicaragua.annualbudget);



// // Part 3.
//
// var hammondsMines = {
//   buenosaires: {
//     depth: "400 meters",
//     annualbudget: 1000000,
//     specimens: [
//       "Dilophosaurus",
//       "Brachiosaurus"
//     ]
//   },
//  mexico: {
//     depth: "350 meters",
//     annualbudget: 900000,
//     specimens: [
//       "Gallimimus",
//       "Parasaurolophus"
//     ]
//   }
// };
//
// // 1.
// var depthOfMexicoMine = hammondsMines.mexico.depth;
// console.log(depthOfMexicoMine);
//
// // 2. (Description is not clear.
// // I just create a new variable and
// // assigned the value from the objec)
// var budgetBuenosairies = hammondsMines.buenosaires.annualbudget;
// console.log(budgetBuenosairies);
//
// // 3.
// var specimens = hammondsMines.buenosaires.specimens;
// console.log(specimens);
//
// // 4.
// hammondsMines.nicaragua = nicaragua;
// console.log(hammondsMines);
//
// // 5.
// var budgets = [];
// for(var i in hammondsMines) {
//   budgets.push(hammondsMines[i].annualbudget);
// }
// console.log(budgets);
//
// // 6.
// var totalCost = 0;
// for(var i = 0; i < budgets.length; i++) {
//   totalCost += budgets[i];
// }
// console.log(totalCost);
//
// // 7.
// var index = hammondsMines.mexico.specimens.indexOf('Parasaurolophus');
// var specimen = hammondsMines.mexico.specimens[index];
// console.log(specimen);




// Part 4.

// Object constructor that accepts 2 arguments
function Line(name, stations) {

  // Line - represents a subway line,
  // that will contain a bunch of stations
  // Subway - represents a subway system
  // that contains a bunch of lines
  this.name = name;
  this.stations = stations;

  // Return a string containing the station names
  this.showStations = function() {
    return this.stations.toString();
  }

  // Accepts a single argument, string stationName
  // Creates a station object with the argument and
  // pushes the station object into the line's stations
  this.addStation = function(stationName){
    this.stations.push(stationName);
  }

  // Accepts a single argument, a string, stationName
  // Returns a number, the index of the specified station_name in @stations
  // Returns false if the station is not found
  this.whereIs = function(stationName) {
    var currIndex = this.stations.indexOf(stationName);
    if(currIndex === -1 )
      return false;
    else
      return currIndex;
  }

  // Accepts two arguments, string, start and stop,
  // which represent the names of two stations
  // Returns the number of stops required to travel from start to stop
  // Returns false if either of the stops is incorrect
  this.calcTrip = function(start, stop) {
    var startIndex = this.whereIs(start);
    var stopIndex = this.whereIs(stop);
    if((stopIndex === false)||(startIndex === false))
      return false;
    else return Math.abs(startIndex - stopIndex);
  }
}



// Object constructor Subway() without argument
function Subway() {

  // lines should start as an empty object, but will be an object
  // where keys are the name of the line,
  // and values are Line objects
  // after utilizing the addLine() function
  this.lines = {};

  // Returns a string of the available lines
  // (the keys of the subway's lines property)
  this.showLines = function() {
    var arrayLines = [];
    for(i in this.lines) arrayLines.push(i);
    return arrayLines.toString();
  }

  // Accepts a single argument, string lineName
  // Returns a string containing the name of the line,
  // and the stations on the line
  // ex. "Q line: 42nd St, 34th St, Union Square, Canal St"
  this.showStations = function(lineName) {
    return lineName + ' line: ' + this.lines[lineName].showStations();
  }

  // Accepts two arguments - lineName is a string,
  // name of the new line, stations is an array of strings
  // Creates a new Line object using lineName and stations
  // Adds the new line just creates to the property lines
  this.addLine = function(lineName, stations) {
    var newLine = new Line(lineName, stations);
    // this.lines.push(newLine);
    this.lines[lineName] = newLine;
  }

  // Accepts three arguments, all strings
  // lineName - name of the line on which you wish to travel
  // start - name of station where you want to start
  // stop - name of station where you want to stop
  // Returns a number indicating how many stations from start to stop
  // If any of the input arguments are incorrect,
  // your method should return false
  this.calcTrip = function(lineName, start, stop) {
    // Check if lineName is valid
    // console.log(lineName + ', ' + start + ', ' + stop);

    var arrayLines = this.showLines().split(',');
    // console.log(arrayLines);

    if(arrayLines.indexOf(lineName) === -1) return false;

    var line = this.lines[lineName];
    // console.log(line);

    if(line.whereIs(start) === false || line.whereIs(stop) === false)
      return false;

    return line.calcTrip(start, stop);
  }
}


// Sample object including subway lines
var trainLines = {
  'L' : [ '8th Ave',
          '6th Ave',
          'Union Square',
          '3rd Ave',
          '1st Ave',
          'Bedford Ave' ],
  'N' : [ 'Times Square',
          'Herald Square',
          '28th St',
          '23rd St - DAPS Nexus',
          'Union Square',
          '8th St' ],
  'S' : [ 'Grand Central',
          '33rd St',
          '28th St',
          '23rd St',
          'Union Square',
          'Astor Place' ]
};


// Create a instance, nycSubway by using constructor function
var nycSubway = new Subway();

// Add new lines by for( in ) loop
for(i in trainLines) {
  nycSubway.addLine(i, trainLines[i]);
}

// Show all lines stored in the object nycSubway
console.log('Show all subway lines stored in the object nycSubway');
console.log(nycSubway.showLines());

// Show all stations in 'L' line
console.log('Show all stations in \'L\' line');
console.log(nycSubway.showStations('L'));

// Calculate the trip(the number of stops)
// by using a valid input
console.log('Calculate the trip(the number of stops) ' +
            'by using a valid input');
console.log(nycSubway.calcTrip('L', '8th Ave', '1st Ave'));

// Calculate the trip(the number of stops)
// by using a invalid input
console.log('Calculate the trip(the number of stops) ' +
            'by using a invalid input');
console.log(nycSubway.calcTrip('N', 'Skillman Ave', '1st Ave'));
