//  Part 1.

// for (var i = 1000; i >= 0; i--) {
//   console.log(i);
// }


//  Part 2.

// var justDoIt = function(str) {
//   return str + ' JUST DO IT!';
// }
// var userInput = 'Sungwon';
// console.log(justDoIt(userInput));


//  Part 3.

// strArray = [
//   'Hank',
//   'Hippopopalous'
// ];
//
// var getStrLengths = function(strArray) {
//   var strLengths = [];
//   for(var i = 0; i < strArray.length; i++) {
//     strLengths.push(strArray[i].length);
//   }
//   return strLengths;
// }
//
// console.log(strArray);
// console.log(getStrLengths(strArray));


//  Part 4.

// var transmorgrifier = function(num1, num2, power) {
//   return Math.pow((num1 * num2), power);
// }
//
// var num1 = 5;
// var num2 = 3;
// var power = 2;
//
// console.log('( ' + num1 + ' * ' + num2 + ' ) to the power of ' + power + ' is ' +
//             transmorgrifier(num1, num2, power));


//  Part 5.

// var wordReverse = function(str) {
//   var wordReversedStr = str.split(' ').reverse().join(' ');
//   return wordReversedStr;
// }
//
// var str = 'Ishmael me Call';
// console.log('Original string is \'' + str + '\'');
// console.log('Word reversed string is \'' + wordReverse(str) +'\'');


//  Part 6.

// var longest = function(strArray) {
//   var longestStr = '';
//   for(var i = 0; i < strArray.length; i++) {
//     if(longestStr.length < strArray[i].length) longestStr = strArray[i];
//   }
//   return longestStr;
// }
//
// var strArray = [
//   "BoJack",
//   "Princess",
//   "Diane",
//   "a",
//   "Max",
//   "Peanutbutter",
//   "big",
//   "Todd"
// ];
// var longestStr = longest(strArray);
//
// console.log(strArray);
// console.log('The longest string in the array is\n' +
//             longestStr);


//  Part 7.

// var toonify = function(accent, sentence) {
//   var accentedSentence = '';
//   //  When accent is 'daffy'
//   if(accent === 'daffy') {
//     for(var i = 0; i < sentence.length; i++) {
//       if(sentence.charAt(i) === 's') {
//         accentedSentence += 'th';
//       }
//     else if(sentence.charAt(i) === 'S') {
//         accentedSentence += 'Th';
//       }
//     else accentedSentence += sentence.charAt(i);
//     }
//     return accentedSentence;
//   }
//   //  When accent is not 'daffy'
//   else return sentence;
// }
//
// var accent = 'daffy';
// var sentence = 'so you smell like sausage';
// var accentedSentence = toonify(accent, sentence);
//
// console.log('Accent is \'' + accent + '\' and ' +
//             '\nthe given sentence is \'' + sentence + '\'');
// console.log('Accented sentence is \'' + accentedSentence + '\'');


//  Part 8.

// var forDigitSum = function(num) {
//   var strNum = num.toString();
//   var digitSum = 0;
//   for(var i = 0; i < strNum.length; i++) {
//     digitSum += parseInt(strNum[i]);
//   }
//   return digitSum;
// }
//
// var num = 421;
// var digitSum = forDigitSum(num);
//
// console.log('The given number is ' + num +
//             '\nthe digit sum is ' + digitSum);


//  Part 9.

// var testPrime = function(num) {
//   //  Prime numbers have only 1 and itself as positive divisors.
//   for(var i = 2; i < num; i++) {
//     if((num % i) === 0) {
//       return false;
//     }
//   }
//   return true;
// }
//
// var max = 50;
// // var isPrime = testPrime(num);
//
// for( var i = 2; i <= max; i++) {
//   console.log(i + ' is ' + (testPrime(i) ? 'prime.' : 'not prime.'));
// }


//  Part 10.

var insertDash = function(num) {
  //  Convert the given number to string
  var strNum = num.toString();

  var str1, str2;

  for (var i = 0; i < (strNum.length - 1); i++) {
    //  Convert two consecutive letters to two single digit numbers
    //  and store them to variable digitNum1 and digitNum2
    digitNum1 = parseInt(strNum.charAt(i));
    digitNum2 = parseInt(strNum.charAt(i + 1));
    //  Check if two consecutice digits are all odd
    if( isOdd(digitNum1) && isOdd(digitNum2)) {
      //  Split strNum to two string and insert '-' between them
      str1 = strNum.slice(0, (i + 1));
      str2 = strNum.slice(i + 1);
      strNum = str1 + '-' + str2;
      //  Skip the next check because it will be '-'
      i++;
    }
  }
  return strNum;
}

var isOdd = function(num) {
  if(num % 2 == 1) return true;
  else return false;
}

var num = 449350538351387435;
var dashedNum = insertDash(num);

console.log('The given number is ' + num + '.' +
            '\nThe number with inserted dashes between 2 odd numers is ' + dashedNum);
