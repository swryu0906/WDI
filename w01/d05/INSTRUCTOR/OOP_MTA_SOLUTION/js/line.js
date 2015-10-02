function Line(name, stations) {	
	this.name = name;
	this.stations = stations;

	this.showStations = function() {
		for(var i = 0; i < this.stations.length; i++) {
			console.log(this.stations[i]);
		}
	};

	this.addStation = function(stationName) {
		this.stations.push(stationName);
	};

	this.whereIs = function(stationName) {
		var index = this.stations.indexOf(stationName);
		if (index == -1) {
			return false;
		} else {
			return index;
		}
	};

	this.calcTrip = function(start, stop) {
		var indexStart = this.whereIs(start);
		var indexStop = this.whereIs(stop);
		if (indexStop == -1 || indexStart == -1) {
			return false;
		}
		return Math.abs(indexStart - indexStop);
	};

};