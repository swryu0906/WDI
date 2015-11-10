var isValidCard = function(num){
  // reverse the number and store in arrayNum
  var arrayNum = num.toString().split('').reverse().map(Number);

  // double the digit with odd indexes from the end
  for(var i = 0; i < arrayNum.length; i++) {
    if (i % 2 === 1) arrayNum[i] = arrayNum[i] * 2;
    arrayNum[i] = arrayNum[i].toString();
  }

  // split the each number in arrayNum to single digit number
  //  and store them back to arrayNum
  arrayNum = arrayNum.join('').split('').map(Number);

  // calculate the sum of elements in arrayNum
  var sum = arrayNum.reduce(function(prev, curr) { return prev + curr });

  // check whether sum is divisable by 10
  if(sum % 10 === 0) return true;
  else return false;
}


console.log(isValidCard(1234567890123456));
console.log(isValidCard(4408041234567893));
console.log(isValidCard(38520000023237));
console.log(isValidCard(4222222222222));
