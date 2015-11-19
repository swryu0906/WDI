'use strict'
// parallax code goes here
$(document).ready(function() {
  let $bg = $(".bg");

  // top dogs
  let $majorTom = $(".top-left");
  let $midLab   = $(".top-center");
  let $ghostDog = $(".top-right");

  // based dogs
  let $botLeft     = $(".bottom-left");
  let $davesBeagle = $(".bottom-center");
  let $botRight    = $(".bottom-right");

  let scrolled; //define it once, instead of everytime a scroll event fires

  // when scrolling, get the number of pixels scrolled, and use it to mess with the css
  $(window).on('scroll', function() {
    scrolled = $(window).scrollTop();

    //.css() takes two values, css poperty, and value(s)

    // top dogs
    $ghostDog.css("opacity", 1 - (scrolled / 500));

    // you can set multiple styles by passing the css() method an object with "property": "value" pairs
    $midLab.css({     "top": scrolled * 2,
                     "left": scrolled * 0.5,
                  "z-index": scrolled * 2
                });

    //multiple values for the same property are typically comma separated. for "transform", they are space separated. it depends on the specific css rule i.e:
    // .top-left{ transform: rotate(10deg) scaleX(5); }
    $majorTom.css("transform", "rotate(" + scrolled * 1 + "deg)" +
                  "scaleY(" + scrolled /100 + ")");

    //.css() also takes an array of styles and properties, so check the docs if you need

    $botLeft.css( "right", scrolled * 0.1);
    $davesBeagle.css("left", scrolled);
    $botRight.css( "bottom", scrolled);

  });

  // mouse move events are legit too
  $(window).mousemove(function(event) {
    let xMove = -(event.pageX) / 15;
    let yMove = -(event.pageY) / 15;
    // console.log('x:'+event.pageX+' y:'+event.pageY);
    $bg.css('left', xMove);
    $bg.css('top', yMove);
  })

});
