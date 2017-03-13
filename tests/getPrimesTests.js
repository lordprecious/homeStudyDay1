getPrimes = require('../app/library.js').getPrimes;
describe('prime of a number ', function () {

    describe('Return prime numbers from two to the given number in a array`[]`', function () {

      it('should return "prime number starts from 2" for 0', function () {
        expect(getPrimes(0)).toEqual([]);
      });

      it('should return "prime number starts from 2" for -1', function () {
        expect(getPrimes(-1)).toEqual([]);
      });

       it('should return "prime number starts from 2" for -5', function () {
        expect(getPrimes(-5)).toEqual([]);
      });

      it('should return "input is not a number" for "word"', function () {
        expect(getPrimes("word")).toEqual("input is not a number");
      });

      it('should return "input is not a number" for "!@#$%-gsdv"', function () {
        expect(getPrimes("!@#$%-gsdv")).toEqual("input is not a number");
      });

      it('should return "prime number starts from 2" for 1', function () {
        expect(getPrimes(1)).toEqual([]);
      });

      it('should return [2] for 2', function () {
        expect(getPrimes(2)).toEqual([2]);
      });

      it('should return [2,3,5,7] for 10', function () {
        expect(getPrimes(10)).toEqual([2,3,5,7]);
      });

      it('should return [2,3,5] for 5', function () {
        expect(getPrimes(5)).toEqual([2,3,5]);
      });

      it('should return [2,3,5,7,11,13] for 15', function () {
        expect(getPrimes(15)).toEqual([2,3,5,7,11,13]);
      });

      it('should return [2,3,5,7,11,13,17,19] for 20', function () {
        expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
      });

      it('should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] for 50', function () {
        expect(getPrimes(50)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
      });

      it('should return [ 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97] for 100', function () {
        expect(getPrimes(100)).toEqual([ 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
      });

      it('should return "prime number starts from 2" for -10', function () {
        expect(getPrimes(-10)).toEqual([]);
      });

      it('should return "prime number starts from 2" for 2', function () {
        expect(getPrimes(-10000)).toEqual([]);
      });



  });
});
