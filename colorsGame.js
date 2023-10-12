// imports the redline library for the user to interact with the terminal
const readline = require("readline");

// create interaction interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to generate a random sequence of colors
function generateRandonString() {
  const colors = ["R", "G", "B", "Y"];
  let randonString = "";
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * colors.length);
    randonString += colors[index];
  }
  return randonString;
}

// Function to rate an attempt and provide tips
function rateTry(correctSequence, attempt) {
  let tips = [];
  for (let i = 0; i < 4; i++) {
    if (attempt[i] === correctSequence[i]) {
      tips.splice(i, 0, "B");
    } else if (correctSequence.includes(attempt[i])) {
      tips.splice(i, 0, "W");
    } else {
      tips.splice(i, 0, "X");
    }
  }
  return tips.join("");
}

// Main game function
function colorsGame() {
  const rightSequence = generateRandonString();
  let remainingAttempts = 10;

  console.log("Welcome to the color sequence guessing game!");
  console.log(
    "The possible colors are: R (red), G (green), B (blue) and Y (yellow)."
  );
  console.log("You have 10 attempts to guess the sequence.");

  // Function to record user attempts
  function makeAttempt() {
    rl.question(
      "Attempt #" +
        (11 - remainingAttempts) +
        ": Enter the color sequence (e.g. RGBY): ",
      (attempt) => {
        if (attempt.length !== 4 || !/^[RGBY]+$/i.test(attempt)) {
          console.log(
            "Please enter a valid sequence of 4 colors (R, G, B, Y)."
          );
          makeAttempt();
          return;
        }

        const tips = rateTry(rightSequence, attempt.toUpperCase());
        console.log("Dicas: " + tips);

        if (tips === "BBBB") {
          console.log("Congratulations! You guessed the correct sequence!");
          rl.close();
        } else {
          remainingAttempts--;
          console.log("Remaining attempts: " + remainingAttempts);
          if (remainingAttempts > 0) {
            makeAttempt();
          } else {
            console.log(
              "End of the game. You didn't guess the correct sequence."
            );
            console.log("The correct sequence was: " + rightSequence);
            rl.close();
          }
        }
      }
    );
  }

  makeAttempt();
}

// Start the game
colorsGame();
