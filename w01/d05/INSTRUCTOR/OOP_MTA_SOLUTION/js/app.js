var subway = new Subway();
subway.addLine("L", ['8th Ave','6th Ave','Union Square','3rd Ave','1st Ave','Bedford Ave']);
subway.addLine("N", ['Times Square','Herald Square','28th St','23rd St','Union Square','8th St']);
subway.addLine("S", ['Grand Central','33rd St','28th St','23rd St','Union Square','Astor Place']);

var greetingMessage = function() {
	console.log("*************************");
	console.log("Welcome to the MTA APP");
	console.log("(1) View Available Lines");
	console.log("(2) See Station Stops");
	console.log("(3) Add a Line");
	console.log("(4) Trip Calculator");
	console.log("(5) Quit");
	console.log("**************************");
}

var quit = false;

while(quit === false) {
	greetingMessage();
	var menuSelection = parseInt(prompt("What would you like to do? (5) to quit"));
	switch(menuSelection) {
		case 1: 
			subway.showLines();
			break;
		case 2:
			subway.showLines();
			var lineSelection = prompt("What line would you like to see the stations for?").toUpperCase();
			subway.showStations(lineSelection);
			break;
		case 3:
			var lineName = prompt("What is the name of the Line?");
			var stations = prompt("What are the stations? Seperate them by commas. EX. 'one stop,two stop,three stop,four stop'").split(",");
			subway.addLine(lineName, stations);
			console.log(lineName, " has been created");
			break;
		case 4:
			var lineName = prompt("What Line are you taking?");
			var startStation = prompt("Where are you getting on the train?");
			var stopStation = prompt("Where are you getting off?");
			subway.calcTrip(lineName, startStation, stopStation);
			break;
		case 5:
			quit = true;
		default: 
			console.log("Invalid Selection");	
			break;
	}
}