
var init = function(){
  var hourHand = document.getElementById('hourhand');
  var minuteHand = document.getElementById('minutehand');
  var secondHand = document.getElementById('secondhand');

  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var hourDeg = hour * 30 + min * 0.5 + sec * 0.00833333333333;
  var minDeg = min * 6 + sec * 0.1;
  var secDeg = sec * 6;

  console.log(hour + ':' + min + ':' + sec + 'just checing');

  var updateHours = function(){
    hourDeg += 0.00833333333;
    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
  };

  var updateMinutes = function(){
    minDeg += 0.1;
    minuteHand.style.transform = 'rotate(' + minDeg + 'deg)';
  };

  var updateSeconds = function(){
    secDeg += 6;
    secondhand.style.transform = 'rotate(' + secDeg + 'deg)';
  };


  setInterval(function(){
    updateSeconds();
    updateMinutes();
    updateHours();
  }, 1000);
};
// document.getElementById('button').addEventeListener('click', load);
window.onload = function(){
  init();
};
