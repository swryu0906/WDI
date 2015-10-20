function User() {
  // this.checking = new Account('checking');
  // this.saving = new Account('saving');
  this.accounts = {
    checking : new Account('checking'),
    saving : new Account('saving')
  };
  this.overdraftProtection = true;

  this.getTotalBalance = function() {
    return this.accounts['checking'].balance + this.accounts['saving'].balance;
  };

  this.deposit = function(accountType, amount) {
    this.accounts[accountType].balance += amount;
  }

  this.withdraw = function(accountType, amount) {
    if(this.overdraftProtection && (this.getTotalBalance() >= amount)) {
      if(this.accounts[accountType].balance < amount) {
        if(accountType === 'checking') {
          // console.log('acountType balance = ' + this.accounts[accountType].balance.toString());
          // console.log('saving balance = ' + this.accounts['saving'].balance.toString());
          // console.log('amount = ' + amount.toString());
          // console.log((amount - this.accounts[accountType].balance).toString());
          this.accounts['saving'].balance -= (amount - this.accounts[accountType].balance);
        }
        else {
          this.accounts['checking'].balance -= (amount - this.accounts[accountType].balance);
        }

        this.accounts[accountType].balance = 0;
        // console.log(this.accounts[accountType].balance);
      }
      else
        this.accounts[accountType].balance -= amount;
    }
  }
}

// var newUser = new User();
// console.log(newUser.overdraftProtection);
// console.log(newUser.accounts['checking']);
// console.log(newUser.accounts['saving']);
// console.log(newUser.getTotalBalance());
// newUser.deposit('checking', 2000);
// console.log(newUser.accounts['checking'].balance);
// newUser.deposit('saving', 3000);
// console.log(newUser.accounts['saving'].balance);
// newUser.withdraw('saving', 1000);
// console.log(newUser.accounts['saving'].balance);
// console.log(newUser.getTotalBalance());
// newUser.withdraw('checking', 3000);
// console.log(newUser.accounts['checking'].balance);
// console.log(newUser.accounts['saving'].balance);
