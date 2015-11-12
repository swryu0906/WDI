console.log("clock.js loaded");


window.addEventListener("load", function(){

 var secondHand = document.querySelector('#second-hand');
 var hourHand   = document.querySelector("#hour-hand");
 var minuteHand = document.querySelector("#minute-hand");

var date = new Date();

var secDeg  = date.getSeconds() * 6;
var minDeg  = date.getMinutes() * 6;
var hourDeg = date.getHours()   * 30;

var updateSeconds = function(){

  secDeg += 6
  secondHand.style.transform = "rotate(" + secDeg + "deg)";
}

var updateMinute = function(){
    minDeg += 0.16666;
    minuteHand.style.transform = "rotate(" + minDeg + "deg)";
  }

  var updateHour = function(){
      var date = new Date();
      console.log("Hour: " + date.getHours());
      hourDeg += ( 360/43200 );
      hourHand.style.transform = "rotate("+ hourDeg +"deg)";
    };


    setInterval( updateSeconds, 1000);
    setInterval( updateHour, 1000);
    setInterval( updateMinute, 1000);










});
