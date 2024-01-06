const readline = require('readline');

function numberChecker(numbersArray) {
  return function(checkNumber) {
    return numbersArray.includes(checkNumber);
  };
}

// Function to get user input
const getUserInput = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
};

// Example usage with user-defined values and a loop:
(async () => {
  const inputNumbers = await getUserInput('Enter numbers separated by spaces (e.g., 1 2 3 4 5): ');
  const arr = inputNumbers.split(' ').map(Number);

  let found = false;
  while (!found) {
    const checkNumber = await getUserInput('Enter a number to check: ');
    const checkNum = numberChecker(arr);

    if (checkNum(Number(checkNumber))) {
      console.log('Number found in the array!');
      found = true;
    } else {
      console.log('Number not found in the array. Try again.');
    }
  }
})();
