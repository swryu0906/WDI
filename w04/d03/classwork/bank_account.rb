class BankAccount
  def initialize(account_num, balance = 0)
    @account_num = account_num
    @balance = balance
  end

  def deposit(amount)
   @balance += amount
  end

  def withdraw(amount)
   @balance -= amount
  end

  def balance
    @balance
  end

  def account_num
    @account_num
  end
end



class ATM
  def initialize(bank_account)
    @bank_account = bank_account
  end

  def deposit(amount)
    @bank_account.deposit(amount)
  end

  def withdraw(amount)
    @bank_account.withdraw(amount)
  end

  def bank_account
    @bank_account
  end

  def bank_account= (bank_account)
    @bank_account = bank_account
  end
  # attr_reader :bank_account
  # attr_writer :bank_account
end




my_acct = BankAccount.new("123456")
puts "my_acct = BankAccount.new(\"123456\")"
puts "my_acct.balance = #{my_acct.balance}"
puts "my_acct.account_num = #{my_acct.account_num}"

my_acct.deposit(2000)
puts "my_acct.deposit(2000)"
puts "my_acct.balance = #{my_acct.balance}"

my_acct.withdraw(1000)
puts "my_acct.withdraw(1000)"
puts "my_acct.balance = #{my_acct.balance}"

your_acct = BankAccount.new("654321", 3000)
puts "your_acct = BankAccount.new(\"654321\", 3000)"
puts "your_acct.balance = #{your_acct.balance}"
puts "your_acct.account_num = #{your_acct.account_num}"

your_acct.withdraw(500)
puts "your_acct.withdraw(500)"
puts "your_acct.balance = #{your_acct.balance}"

your_acct.deposit(2000)
puts "your_acct.deposit(2000)"
puts "your_acct.balance = #{your_acct.balance}"


atm_1 = ATM.new(my_acct)
puts "atm_1 = ATM.bank_account(my_acct)"

puts "atm_1.bank_account.account_num = #{atm_1.bank_account.account_num}"
puts "atm_1.bank_account.balance = #{atm_1.bank_account.balance}"

atm_1.deposit(2000)
puts "atm_1.deposit(2000)"
puts "atm_1.bank_account.account_num = #{atm_1.bank_account.account_num}"
puts "atm_1.bank_account.balance = #{atm_1.bank_account.balance}"

atm_1.withdraw(1000)
puts "atm_1.deposit(1000)"
puts "atm_1.bank_account.account_num = #{atm_1.bank_account.account_num}"
puts "atm_1.bank_account.balance = #{atm_1.bank_account.balance}"


# change bank_account in atm
atm_1.bank_account = your_acct
puts "atm_1.bank_account(your_acct)"

puts "atm_1.bank_account.account_num = #{atm_1.bank_account.account_num}"
puts "atm_1.bank_account.balance = #{atm_1.bank_account.balance}"

atm_1.deposit(2000)
puts "atm_1.deposit(2000)"
puts "atm_1.bank_account.account_num = #{atm_1.bank_account.account_num}"
puts "atm_1.bank_account.balance = #{atm_1.bank_account.balance}"

atm_1.withdraw(1000)
puts "atm_1.deposit(1000)"
puts "atm_1.bank_account.account_num = #{atm_1.bank_account.account_num}"
puts "atm_1.bank_account.balance = #{atm_1.bank_account.balance}"
