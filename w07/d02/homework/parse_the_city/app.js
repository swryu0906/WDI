var express = require('express');
var app = express();

var datasetObj = require('./dataset.json');
var dataObj = datasetObj.data;


// search for wifi by zip code /zipcode/
// app.get('/zipcode/:')


// iterate through the dataObj and
// compare the keyword with index data and
// it they are matched, push the whole row of data to resultArray and
// return the resultArray
var getParsedArray = function(index, keyword) {
  var resultArray = [];
  for(var i = 0; i < dataObj.length; i++) {
    if(dataObj[i][index] === keyword) resultArray.push(dataObj[i]);
  }
  return resultArray;
}

// iterate through the resultArray and
// display the summary of wifi hotspts information
var parsedArrayToHtml = function(resultArray) {
  var html = '';
  for(var i = 0; i < resultArray.length; i++) {
    html += '<p>' + (i + 1).toString() +
      '. type: ' + resultArray[i][10] +
      ', provider: ' + resultArray[i][11] +
      ', city: ' + resultArray[i][12] +
      ', borough: ' + resultArray[i][20] + '</p>';
  }
  return html;
}




// total wifi hotspots total/hotspots
app.get('/total/hotspots', function(req, res) {
  var html = '<h1>The total wifi hotspots in NYC is ' + dataObj.length.toString() + '.</h1>';
  res.send(html);
});
// by type /type/free or type/limited
app.get('/type/:type', function(req, res) {
  var type = req.params.type.toLowerCase();
  var resultArray = [];
  var html = '';


  if(type === 'free') {
    resultArray = getParsedArray(10, 'Free');
    html = '<h1>The number of free wifi hotspots in NYC is ' + resultArray.length.toString() + '</h1>'
  }
  else if(type === 'limited') {
    resultArray = getParsedArray(10, 'Limited Free');
    html = '<h1>The number of limited free wifi hotspots in NYC is ' + resultArray.length.toString() + '</h1>'
  }
  html += parsedArrayToHtml(resultArray);
  res.send(html);
});



// by provider with most hot spots in the city /provider
app.get('/provider', function(req, res) {
  // get the top provider from dataset.json meta
  var topProvider = datasetObj.meta.view.columns[11].cachedContents.largest;
  var resultArray = getParsedArray(11, topProvider);

  var html = '<h1>The provider with most hot spot in NYC is ' + topProvider +
    ' which has ' + resultArray.length.toString() + ' hotspots.</h1>';
  html += parsedArrayToHtml(resultArray);
  res.send(html);
});

var server = app.listen(3000, function() {
  var address = server.address().address;
  var port = server.address.port;

  console.log('parse the city app is running......');
});
