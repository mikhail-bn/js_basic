// 1. Implement a function which convert the given boolean value into its string representation. Note: Only valid inputs will be given.

function booleanToString(b){
    b = String(b);
    return b;
  }

 // Another solutions
function booleanToString(b){
    return b.toString();
  }
  function booleanToString(b){    
    return String(b);
  }

// 2. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0 && Number.isInteger(number) && !(number = 0)) {
      return "Even";
    } else if (number % 2 != 0 && Number.isInteger(number) && !(number = 0)){
      return "Odd";
    }  
  }
  // Another solutions
  function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }