function weightedAverageCalculator(grades, weights) {
  // checking entries

  // checking if were enter all grades and weights
  if (grades.length !== weights.length) {
    return "Enter all grades and weights";
  }

  // checking whether all grades entered are numbers
  for (let grade of grades) {
    if (typeof grade !== "number") {
      return "Enter a valid number";
    }
  }

  // checking whether all weights entered are numbers
  for (let weight of weights) {
    if (typeof weight !== "number") {
      return "Enter a valid number";
    }
  }

  // checking whether all grades entered are in the range between 0 and 10
  for (let grade of grades) {
    if (grade < 0 || grade > 10) {
      return "Invalid grade";
    }
  }

  // checking if all reported weights are in the range between 0.1 and 1.0
  for (let weight of weights) {
    if (weight <= 0 || weight > 1) {
      return "Invalid weight";
    }
  }

  // checking if the sum of the weights is equal to 1
  let weightSum = 0;
  for (let weight of weights) {
    weightSum += weight;
  }
  if (Math.ceil(weightSum) !== 1) {
    return "The sum of the weights must be equal to 1";
  }

  // implementing the calculation logic

  // creating a variable that will receive the final grade
  let finalGrade = 0;

  // Multiplying each grade by its due weight and adding it to the final grade
  for (let i = 0; i < grades.length; i++) {
    for (let j = 0; j < weights.length; j++) {
      if (i === j) {
        finalGrade += grades[i] * weights[j];
      }
    }
  }

  // returning the final grade with two decimal places
  return finalGrade.toFixed(2);
}

//Tests

console.log(weightedAverageCalculator([1, 2, 3], [0.1])); // Should return the message: Enter all grades and weights
console.log(weightedAverageCalculator([], [0.1, 0.6, 0.7])); // Should return the message: Enter all grades and weights
console.log(weightedAverageCalculator(["dois", 2, 3], [0.1, 0.1, 0.8])); // Should return the message: Enter a valid number
console.log(weightedAverageCalculator([1, 2, 3], ["0.1", 0.1, 0.8])); // Should return the message: Enter a valid number
console.log(weightedAverageCalculator([-1, 2, 3], [0.1, 0.1, 0.8])); // Should return the message: Invalid grade
console.log(weightedAverageCalculator([123, 2, 3], [0.1, 0.1, 0.8])); // Should return the message: Invalid grade
console.log(weightedAverageCalculator([1, 2, 3], [-0.1, 0.1, 0.8])); // Should return the message: Invalid weight
console.log(weightedAverageCalculator([1, 2, 3], [-0.1, 0.1, 0.8])); // Should return the message: Invalid weight
console.log(weightedAverageCalculator([1, 2, 3], [0.0, 0.1, 0.8])); // Should return the message: Invalid weight
console.log(weightedAverageCalculator([1, 2, 3], [1.45, 0.1, 0.8])); // Should return the message: Invalid weight
console.log(weightedAverageCalculator([1, 2, 3], [-0.1, 0.1, 0.8])); // Should return the message: Invalid weight
console.log(weightedAverageCalculator([1, 2, 3], [0.8, 0.8, 0.8])); // Should return the message: The sum of the weights must be equal to 1
console.log(weightedAverageCalculator([1, 2, 3], [0.8, 0.8, 0.8])); // Should return the message: The sum of the weights must be equal to 1
console.log(weightedAverageCalculator([10, 7.5, 5], [0.7, 0.2, 0.1])); // Should return 9.00
console.log(weightedAverageCalculator([9.54, 3.13, 5.49], [0.8, 0.1, 0.1])); // Should return 8.49
