// week 01 / day 02  homework



// 1.

var seasons = ['spring', 'summer', 'fall', 'winter'];



// 2.

// var legalDrinkingAge = 21;
// var buyerAge = prompt('Please, enter your age: ');
// if (buyerAge >= legalDrinkingAge) {
//   alert('You\'re older than or equal to ' + legalDrinkingAge + '.\nYou can buy any alcoholic beverages.');
// }
// else {
//   alert('You\'re younger than ' + legalDrinkingAge + '.\nYou can not buy any alcoholic beverages.');
// }



// 3.

// var a = 4;
// var b = 53;
// var c = 57;
// var d = 16;
// var e = 'Kevin';
//
// alert('a < b; is ' + (a < b) +
//       '\nc >= d; is ' + (c >= d) +
//       '\n\'Name\' === \'Name\'; is ' + ('Name' === 'Name') +
//       '\na * b > c; is ' + (a * b > c) +
//       '\na * a === d; is ' +  (a * a === d) +
//       '\ne === \'Kevin\'; is ' + (e === 'Kevin') +
//       '\n48 == \'48\'; is ' + (48 == '48'));



// 4.
//
// var sideA = 3;
// var sideB = 4;
// var sideC = Math.sqrt(sideA * sideA + sideB * sideB);
// alert('sideA = 3 and sideB = 4 on a right triangle.' +
//     '\nsideC = Math.sqrt(sideA * sideA + sideB * sideB) which is ' + sideC
// );



// 5.

// var userDay = prompt('Please, enter what day is today.: ').toUpperCase();
// var computerResponse;
// switch(userDay) {
//   case 'MONDAY':
//     computerResponse = 'It\'s Monday.\nWeek just started!';
//     break;
//   case 'TUESDAY':
//     computerResponse = 'It\'s Tuesday.\nSo far so good!';
//     break;
//   case 'WEDNESDAY':
//     computerResponse = 'It\'s Wednesday.\nHalfway there!';
//     break;
//   case 'THURDAY':
//     computerResponse = 'It\'s Thursday.\nAlmost there!';
//     break;
//   case 'FRIDAY':
//     computerResponse = 'It\'s Friday, Saturday or Sunday.\nWoooo, finally end of the week!';
//     break;
//   default:
//     computerResponse = 'Huh, sorry didn\'t get that?';
// }
// alert(computerResponse);



// 6.
//
// var trainRoutes = {
//   'L' : [ '8th Ave',
//           '6th Ave',
//           'Union Square',
//           '3rd Ave',
//           '1st Ave',
//           'Bedford Ave' ],
//   'N' : [ 'Times Square',
//           'Herald Square',
//           '28th St',
//           '23rd St - DAPS Nexus',
//           'Union Square',
//           '8th St' ],
//   'S' : [ 'Grand Central',
//           '33rd St',
//           '28th St',
//           '23rd St',
//           'Union Square',
//           'Astor Place' ]
// };
//
// var userInput, computerResponse;
//
// do {
//   userInput = prompt('Please, enter your train among (L) train, (N) train, (S)train' +
//                           '\nIf you want to exit, please type \'quit\'');
//   userInput = userInput.toUpperCase();
//
//   switch(userInput) {
//     case 'L':
//     case 'N':
//     case 'S':
//       computerResponse = 'You chose (' + userInput + ') train and the route is\n'
//                           + listToString(trainRoutes[userInput]);
//       break;
//     case 'QUIT':
//       computerResponse = 'Bye!';
//       break;
//     default:
//       computerResponse = 'Wrong choice, please choose among (L), (N) and (S).';
//   }
//   console.log(computerResponse);
//   alert(computerResponse);
// } while(userInput !== 'QUIT');
//
// function listToString(list) {
//   var str = '';
//   for( var i = 0; i < list.length; i++) {
//     str += list[i] + '\n';
//   }
//   return str;
// }



// 7.

var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
var median = nums[Math.floor(nums.length / 2)];
console.log('The median number in the array is ' + median);
alert('The median number in the array:\n[ ' + nums + ' ]' + '\nis ' + median);
