$('.flavors').click(function(event){
  event.preventDefault();

  $.ajax({
    url: 'http://localhost:3000/flavors'
  }).done(function(data){
    $('.response').find('ul').remove();
    var list = $('.response').append('<ul>').find('ul');
    for(var i = 0; i < data.length; i++){
      list.append($('<li>' + data[i] + '</li>'));
    }
  })
});

$('.styles').on('click', function(e){
  e.preventDefault();

  $.getJSON('http://localhost:3000/styles', function(data){
    $('.response').find('ul').remove();
    var list = $('.response').append('<ul>').find('ul');
    for(var i = 0; i < data.length; i++){
      list.append($('<li>' + data[i] + '</li>'));
    }
  })
})

$('.doughnuts').on('click', function(e){
  e.preventDefault();

  $.getJSON('http://localhost:3000/doughnuts', function(data){
    $('.response').find('ul').remove();
    var list = $('.response').append('<ul>').find('ul');
    for(var i = 0; i < data.length; i++){
      list.append($('<li>Style : ' + data[i].style +', flavor: ' + data[i].flavor + '</li>'));
    }
  })
});
