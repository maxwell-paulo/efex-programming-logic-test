function primeNumber(number) {
  // checking entries

  // checking whether the value entered is a number
  if (typeof number !== "number") {
    return "Enter a valid number";
  }

  // checking if the number is negative, 0, 1 or even
  if (number <= 1 || (number !== 2 && number % 2 === 0)) {
    return false;
  }

  // implementing the logic for the other numbers
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  // If the number did not fall under any conditions it is prime
  return true;
}

console.log(primeNumber("dsd")); //Should return message asking to enter a valid integer
console.log(primeNumber(-1)); //Must return false (not prime)
console.log(primeNumber(0)); //Must return false (not prime)
console.log(primeNumber(1)); //Must return false (not prime)
console.log(primeNumber(2)); //Must return true (it is prime)
console.log(primeNumber(3)); //Must return true (it is prime)
console.log(primeNumber(4)); //Must return false (not prime)
console.log(primeNumber(5)); //Must return true (it is prime)
console.log(primeNumber(6)); //Must return false (not prime)
console.log(primeNumber(7)); //Must return true (it is prime)
console.log(primeNumber(8)); //Must return false (not prime)
console.log(primeNumber(9)); //Must return false (not prime)
console.log(primeNumber(10)); //Must return false (not prime)
