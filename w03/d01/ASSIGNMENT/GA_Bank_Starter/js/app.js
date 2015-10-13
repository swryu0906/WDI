var newUser = new User();


$('.account').on('click', '.deposit', function() {
  var accountDiv = $(this).closest('.account');
  var amount = +accountDiv.find('input').val();
  if(accountDiv.hasClass('checking')) {
    newUser.deposit('checking', amount);
    // accountDiv.find('.balance').html('$' + newUser.accounts['checking'].balance.toString());
  }
  else {
    newUser.deposit('saving', amount);
    // accountDiv.find('.balance').html('$' + newUser.accounts['saving'].balance.toString());
  }
  updateAccount();
});

$('.account').on('click', '.withdraw', function() {
  var accountDiv = $(this).closest('.account');
  var amount = +accountDiv.find('input').val();
  if(accountDiv.hasClass('checking')) {
    newUser.withdraw('checking', amount);
    // accountDiv.find('.balance').html('$' + newUser.accounts['checking'].balance.toString());
  }
  else {
    newUser.withdraw('saving', amount);
    // accountDiv.find('.balance').html('$' + newUser.accounts['saving'].balance.toString());
  }
  updateAccount();
});


var updateAccount = function() {
  var checkingAcct = $('.account.checking');
  checkingAcct.find('.balance').html('$' + newUser.accounts['checking'].balance.toString());
  var savingAcct = $('.account.saving');
  savingAcct.find('.balance').html('$' + newUser.accounts['saving'].balance.toString());
}
