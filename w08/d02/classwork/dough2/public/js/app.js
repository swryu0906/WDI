$(function(){

  var renderTemplate_donuts = Handlebars.compile($('template#donuts').html());
  var renderTemplate_styles = Handlebars.compile($('template#styles').html());
  var renderTemplate_flavors = Handlebars.compile($('template#flavors').html());

  $('.donuts').on('click', function(e){
    e.preventDefault();
    $.get('/donuts', renderDonuts, 'json');
  });

  $('.styles').on('click', function(e){
    e.preventDefault();
    $.get('/styles', renderStyles, 'json');
  });

  $('.flavors').on('click', function(e){
    e.preventDefault();
    $.get('/flavors', renderFlavors, 'json');
  });

  var renderDonuts = function(data){
    var $list = $('.response');
    console.log(data);
    console.log({ donuts: data });
    var html = renderTemplate_donuts({ donuts: data });
    $list.html('').append(html);
  };

  var renderStyles = function(data){
    var $list = $('.response');
    console.log(data);
    console.lgo({ donuts: data });
    var html = renderTemplate_styles({ donuts: data });
    $list.html('').append(html);
  };

  var renderFlavors = function(data){
    var $list = $('.response');
    console.log(data);
    console.lgo({ donuts: data });
    var html = renderTemplate_flavors({ donuts: data });
    $list.html('').append(html);
  };
});
