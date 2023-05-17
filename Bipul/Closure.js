function counter() {
    let count = 0; // private counter variable
  
    return function() {
      count++; // increment the counter
      return count;
    };
  }
  
  // Create counter1 and call it three times
  const counter1 = counter();
  console.log(counter1()); // Output: 1
  console.log(counter1()); // Output: 2
  console.log(counter1()); // Output: 3
  
  // Create counter2 and call it five times
  const counter2 = counter();
  console.log(counter2()); // Output: 1
  console.log(counter2()); // Output: 2
  console.log(counter2()); // Output: 3
  console.log(counter2()); // Output: 4
  console.log(counter2()); // Output: 5
  