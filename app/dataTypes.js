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


module.exports = file;
