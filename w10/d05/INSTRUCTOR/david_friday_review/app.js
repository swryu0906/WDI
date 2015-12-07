var allUserData = [];

function getInput(options, callback) {
	allUserData.push(options);
	callback(options);
};

function logStuff(userData) {
	if(typeof(userData) === "object") {
		for(var item in userData) {
			console.log(item + ":" + userData[item]);
		}
	} else {
		console.log(userData);
	}
};

getInput({name: "David", speciality: "loljavascript"}, logStuff);

