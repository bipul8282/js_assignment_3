function calculate(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  // Callback functions
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  // Use the calculate function with different callbacks
  console.log(calculate(5, 3, add)); // Output: 8
  console.log(calculate(10, 4, subtract)); // Output: 6
  console.log(calculate(7, 2, multiply)); // Output: 14
  