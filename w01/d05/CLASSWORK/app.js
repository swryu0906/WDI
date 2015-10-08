// console.log(1);
// console.log(1.5);
// console.log('syed');
// console.log(true);
// console.log(false);
// console.log(1 === 1);
// var someVar = 1;
// console.log(someVar);
// console.log(someVar++);
// console.log(someVar);
// console.log(++someVar);
// console.log(1 + 1);
// console.log(5 / 3);
// console.log(5 % 3);
// console.log('string' + 'string');
// console.log('How\'s it going');

// var someNum = 1;
// var anotherNum = 2;
//
// if(someNum > anotherNum){
//   console.log('someNum is greater than anotherNum.');
// }
// else {
//   console.log('someNum is not greater than anotherNum.');
// }
//
// if(someNum > anotherNum){
//   console.log('somdNum is greater than anotherNum.');
// }
// else if(someNum === anotherNum){
//   console.log('someNum is same as anotherNum.');
// }
// else {
//   console.log('someNum is less than anotherNum.');
// }


// var someArray = [1, 3, 5];
//
// var count = 0;
// while(count < someArray.length) {
//   console.log(someArray[count]);
//   count++;
// }
//
// for(var count = 0; count < someArray.length; count++){
//   console.log(someArray[count]);
// }


// function
//
// var sum = function(num1, num2){
//   return num1 + num2;
// }
//
// var num1 = 234;
// var num2 = 111;
// console.log(sum(num1 + num2));


// var david = {
//   firstName: 'David',
//   lastName: 'Brodsky',
//   age: 25,
//   greet: function() {
//     console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName +'.');
//   }
// }
//
// var colin = {
//   firstName: 'colin',
//   ....
// }


function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.greet = function(){
    console.log('Hello, my name is ' + this.firstName + ' ' + this.lastName + '.');
  }
}

var david = new Person('David', 'Brodsky', 25);
var colin = new Person('Colin', 'bro', 25);

console.log(david.firstName);
david.greet();
colin.greet();
