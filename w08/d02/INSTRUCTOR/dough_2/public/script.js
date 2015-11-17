$(function(){

  var renderTemplate_donuts = Handlebars.compile($('template#donuts').html());

  $('.donuts').click(function(e){
    e.preventDefault()

    $.get('/doughnuts', renderDounuts, 'json')
  })

  var renderDounuts = function(data) {
    var $list = $('.response')
    // console.log(data)
    // console.log({donuts: data})
    var compiledTemplate = renderTemplate_donuts({donuts: data})
    $list.html('').append(compiledTemplate)
  }











})
