var startTimer = function() {

	stopWatchHandle = setInterval(function() {
		var currentTime = Number(document.getElementById('stopwatch').textContent);
		currentTime++;
		document.getElementById('stopwatch').textContent = currentTime;
	}, 1000);
};

var stopTimer = function() {
	clearInterval(stopWatchHandle);
};

var resetTimer = function() {
	// stopTimer();
	document.getElementById('stopwatch').innerHTML = "0";
};


window.onload = function() {
  console.log("The world, like this file, is your oyster.");

  document.getElementById('start').addEventListener('click', startTimer);
  document.getElementById('stop').addEventListener('click', stopTimer);
  document.getElementById('reset').addEventListener('click', resetTimer);
};
