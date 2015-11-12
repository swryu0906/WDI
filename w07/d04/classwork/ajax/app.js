// request.send();

// $.ajax({
//   url: 'http://localhost:3000/doughnuts',
//   data: {
//     format: 'json'
//   },
//   error: function() {
//     console.log('Error');
//   }
// }).done(function(data) {
//   console.log();
// });


$.ajax({
  url: 'https://api.doughnuts.ga/doughnuts',
  type: 'GET',
  error: function() {
    console.log('Error!');
  }
}).done(function(data){
  console.log(data)
});
