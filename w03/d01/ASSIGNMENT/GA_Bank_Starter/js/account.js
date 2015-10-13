function Account(accountType) {
  this.balance = 0;
  this.accountType = accountType;

  this.deposit = function(amount) {
    this.balance += amount;
  };

  this.withdraw = function(amount) {
    if(this.balance >= amount)
      this.balance -= amount;
  };

  // this.getBalance = function() {
  //   return this.balance;
  // }
}


// var myAccount = new Account('checking');
// console.log(myAccount.balance);
// console.log(myAccount.accountType);
// myAccount.deposit(2000);
// console.log(myAccount.balance);
// myAccount.withdraw(3000);
// console.log(myAccount.balance);
// myAccount.withdraw(1000);
// console.log(myAccount.balance);
