function Account(name, balance) {
  this.name = name;
  this.balance = balance;
    }

    // a deposist function
    Account.prototype.deposit = function(amount) {
      if (this.isAmountPositive(amount)) {
        this.balance += amount;
        console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
        return true;
      }
      return false;
    }

    // function to check if the amount is valid, that is if it is greater than 0;
    Account.prototype.isAmountPositive = function(amount) {
      const isPositive = amount > 0;
      if (!isPositive) {
        console.error('Amount must greater than 0!');
        return false;
      }
      return true;
    }

    // function to withdraw
    Account.prototype.withdraw = function(amount) {
      if (this.isAmountValid(amount)) {
        this.balance -= amount;
        console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
        return true;
      }
      return false;
    }

    // function to check if the amount is valid and sufficient for withdrawal;
    Account.prototype.isAmountValid = function(amount) {
      if (!this.isAmountPositive(amount)) return false;
      const isAllowed = this.balance - amount >= 0;
      if (!isAllowed) {
        console.error('You have insufficent funds!');
        return false;
      }
      return true;
    }


module.exports = {
    Account: Account
}