var changeGoogle = function() {
  document.body.style.background = 'yellow';

  var nav = document.querySelector('.gb_0d');
  var newDivLink = document.createElement('div');
  newDivLink.style.width = '44px';
  newDivLink.classList.add('gb_Q', 'gb_R');
  var newLink = document.createElement('a');
  newLink.textContent = 'CatWorld';
  newLink.setAttribute('class', 'gb_P');
  newDivLink.appendChild(newLink);
  nav.appendChild(newDivLink);

  var linkGmail = document.querySelector('.gb_P');
  linkGmail.textContent = 'Catmail';
  linkGmail.style.fontSize = '20px';

  var linkSignin = document.getElementById('gb_70');
  linkSignin.textContent = 'Get out!'


  var divLga = document.querySelector('div#lga');
  divLga.style.backgroundColor = 'black';



  var imgLogo = document.getElementById('hplogo');
  imgLogo.setAttribute('src', 'https://petsfans.com/wp-content/uploads/2014/11/edfsaf.jpg');

  var btnGoogleSearch = document.querySelector('#tsf div div center input');
  btnGoogleSearch.setAttribute('value', 'Sungwon\'s Search');

  var btnIamFeelingLucky = document.getElementById('gbqfbb');
  btnIamFeelingLucky.setAttribute('value', 'I hate Goooooogle!');
}

changeGoogle();
