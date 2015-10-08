// stopWatchHandle is global
var stopWatchHandle;

var startTimer = function() {
  console.log('Start click works');

  stopWatchHandle = setInterval(function() {
    var stopwatch = document.getElementById('stopwatch');
    var currentTime = Number(stopwatch.textContent);
    currentTime++;
    stopwatch.textContent = currentTime;
  }, 1000);
};

var stopTimer = function() {
  console.log('Stop click works');

  clearInterval(stopWatchHandle);
};

var resetTimer = function() {
  console.log('Reset click works');

  stopTimer();
  document.getElementById('stopwatch').textContent = 0;
};

window.onload = function() {
  console.log("The world, like this file, is your oyster.");

  document.getElementById('start').addEventListener('click', startTimer);
  document.getElementById('stop').addEventListener('click', stopTimer);
  document.getElementById('reset').addEventListener('click', resetTimer);
};
