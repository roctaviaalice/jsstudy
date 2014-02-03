//factorial function
var init;

var aFactorial = function(number) {
    init = number;
    
    if (number === 0 || number === 1) {
        return 1;
    } else {
    
        for (i = 1; i < init; i++) {
            number = number * i;
        }
    }
    return number;
};

var input = prompt("Enter a number.");
aFactorial(input);