'use strict'

var Account = require('../app/accounts.js').Account


describe("tests for Account transactions", function(){

	it("The account  should be a type of `object`, and an instance of the `Account` class", function() {
      const acct = new Account('me', 100);
      expect(typeof acct).toEqual(typeof {});
      expect(acct instanceof Account).toBeTruthy();
    });


    describe("Account Class: that returns the amount of deposit", function() {
	    it("The class should return a balance of 100 for a deposit of 100", function() {
	      var acct = new Account('tom', 100);
	      expect(acct.balance).toEqual(100);
	    });

	    it("The class should return a balance of 200 for a deposit of 200", function() {
	      var acct = new Account('sarah', 200);
	      expect(acct.balance).toEqual(200);
	    });

	    it("The class should return a balance of 300 for a deposit of 300", function() {
	      var acct = new Account('presh', 300);
	      expect(acct.balance).toEqual(300);
	    });

	    it("The class should return a balance of 400 for a deposit of 40", function() {
	      var acct = new Account('presh', 400);
	      expect(acct.balance).toEqual(400);
	    });

	    it("The class should return a balance of 3000 for a deposit of 3000", function() {
	      var acct = new Account('simi', 3000);
	      expect(acct.balance).toEqual(3000);
	    });

	    it("The class should return a balance of 5000 for a deposit of 5000", function() {
	      var acct = new Account('maria', 5000);
	      expect(acct.balance).toEqual(5000);
	    });

	    it("The class should return false for a 0 value of deposit ", function() {
	      var acct = new Account('presh', 1000);
	      expect(acct.deposit(0)).toEqual(false);
	    });

	    it("The class should return false for a negative value of deposit", function() {
	      var acct = new Account('presh', 1000);
	      expect(acct.deposit(-100)).toEqual(false);
	    });

	    it("The class should return fasle for a negative value  of deposit", function() {
	      var acct = new Account('simi', 200);
	      expect(acct.deposit(-1000)).toEqual(false);
	    });

	    it("The class should return true for a valid value  of deposit", function() {
	      var acct = new Account('mikey', 500);
	      expect(acct.deposit(3000)).toEqual(true);
	    });

	    it("The class should return true for a valid value  of deposit", function() {
	      var acct = new Account('suzan', 1000);
	      expect(acct.deposit(1000)).toEqual(true);
	    });

	    it("The class should return fasle for a 0 value  of withdrawal", function() {
	      var acct = new Account('mikey', 500);
	      expect(acct.withdraw(0)).toEqual(false);
	    });

	    it("The class should return true for a valid value  of withdrawal", function() {
	      var acct = new Account('simi', 500);
	      expect(acct.withdraw(500)).toEqual(true);
	    });

	    it("The class should return true for a valid value  of withdrawal", function() {
	      var acct = new Account('presh', 5000);
	      expect(acct.withdraw(4500)).toEqual(true);
	    });

	    it("The class should return true for a valid value  of withdrawal", function() {
	      var acct = new Account('mikey', 500);
	      expect(acct.withdraw(200)).toEqual(true);
	    });
	});



})