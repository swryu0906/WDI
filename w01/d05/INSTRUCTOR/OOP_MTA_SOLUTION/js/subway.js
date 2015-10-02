function Subway() {
	this.lines = {};

	this.showLines = function() {
		console.log("These are the lines that are currently running");
		for (var key in this.lines) {
			console.log(key);
		}
	};

	this.showStations = function(lineName) {
		console.log("There are the stations for the " + lineName + " line");
		this.lines[lineName].showStations();
	};

	this.addLine = function(lineName, stations) {
		var line = new Line(lineName, stations);
		this.lines[lineName] = line; 
	};

	this.calcTrip = function(lineName, start, stop) {
		var distance = this.lines[lineName].calcTrip(start, stop);
		if (distance == false) {
			console.log("Station not found");
		} else {
			console.log("You have to travel " + distance + " stops");
		}
	};

};