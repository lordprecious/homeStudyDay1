'use strict'

var file = {}

//the dataType function
file.dataTypes = function(data){

    if(typeof data == 'string'){            //checks if input is a string and returns the length of the string;
        return data.length;
    }
    else if ((data === null) || (data === undefined )){

        return 'no value';

    }
    else if (typeof data === 'boolean'){    //checks if input is a boolean value and returns that value;
        return data;
    }

    else if (typeof data == 'number'){      //condition that checks if input is a number;
        if(data < 100){
            return 'less than 100';         //returns "less than 100" if input is less than 100;
        }
        else if (data > 100){
            return 'more than 100';         //returns "more than 100" if input is more than 100;
        }
        else {
            return 'equal to 100';          //returns "equal to 100" if input is equals 100;
        }
    }



    else if (Array.isArray(data)){          //condition that checks if the input is an array;
        if(data.length > 2){
          if(data[2] === undefined || data[2] === null){    //condidtion that checks if the arrays 3rd is either undefined or null;
            return 'no value';
          } else {
            return data[2];                 //returns the 3rd index of the array;
          }
            
        }
        else {
            return undefined;
        }
        
    }

    
 else if (typeof data == 'function'){       //condition that checks if the input is a function;
        return data(true);
    }

}

//A function to get prime number from 2 to any given number;
file.getPrimes = function(num) {
  if(isNaN(num)) {                  //condition to check for invalid inputs such as strings;
    return "input is not a number";
  }
  if(num < 2){                      //condition to check if number is greater or equals 2; beacause prime numbers only start from 2, negetative numbers, zero and 1 are not included;
    return "prime number starts from 2";
  }
  var primeNumbers = [];

  for(var i = 2; i <= num; i++) {
    var isPrime = true;
    for(var j = 2; j < i; j++) {
      if(i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if(isPrime === true) {
      primeNumbers.push(i);
    }

  }
  return primeNumbers;
}

module.exports = file;
