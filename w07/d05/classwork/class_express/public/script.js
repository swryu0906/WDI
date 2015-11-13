function ajax(){
  var request = new XMLHttpRequest();
  request.open('GET', '/dowjones', true);

  request.onload = function(){
    if(request.status >= 200 && request.status < 400){
      var res = request.responseText;
      console.log(res);
    }
    else {
      console.log('Oh, noes!');
    }
  };

  request.onerror = function(){
    console.log('oh noes!');
  };
}
