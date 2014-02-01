//fizzbuzz
/*
Write a program that prints the numbers from 1 to 100.
For multiples of three print Fizz instead of the number
For the multiples of five print Buzz.
For numbers which are multiples of both three and five print FizzBuzz.
*/

//print function
var tp = function(someodd) {
    console.log(someodd);
};

//fizzbuzz time
for (i = 1; i < 101; i++) {
    //if not divis by 3
    if (i % 3 !== 0) {
    
        //and not divis by 5
        if (i % 5 !== 0) {
            //print i
            tp(i);
            
        //else (if divis by 5 but not 3)
        } else {
            //print Buzz
            tp("Buzz");
        }

    //else (if divis by 3 )
    } else {

        //and also divis by 5
        if (i % 5 === 0) {
            //print FizzBuzz
            tp("FizzBuzz");

        //else (if divis by 3 but not 5)
        } else {
            //print Fizz
            tp("Fizz");
        }
    }
}