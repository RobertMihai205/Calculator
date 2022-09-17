//Calculator functions to add, subtract etc.
function calculator (a, b, c) {
    let output = 0;
  
    try {
  
      switch(c) {
        case '+':
          output = a + b
          break;
  
        case '*':
          output = a * b
          break;
  
        case '-':
          output = a - b
          break;
  
       case '/': 
          if (b === 0) {
            throw "Can't divide by 0!"
          } else {
            output = a / b
          }
          break;
      }
    }
    catch(e) {
      console.log("There's an error: ", e)
    }
  
    return output;
  }
  
//Create a new function operate that takes an operator and 2 numbers 
//and then calls one of the above functions on the numbers.
