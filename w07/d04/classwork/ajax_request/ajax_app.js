var request = new XMLHttpRequest();

request.open('GET', 'http://api.open-notify.org/iss-now.json', true);

request.onload = function() {
  if(request.status >= 200 && request.status < 400) {
    var resp = request.responseText;
    console.log(resp);
  }
  else {
    console.log('Errors: ' + request.status);
  }
}

request.send();
