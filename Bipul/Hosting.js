// Call the function before its declaration
const birthYear = 1990;
const age = calculateAge(birthYear);
console.log(age);

// Function to calculate age
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
