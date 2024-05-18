document.addEventListener("DOMContentLoaded", () => {

    // // Generate a random number between 1 and 100
    // const randomNumber = Math.floor(Math.random() * 100) + 1;

    // // Initialize a variable to store the user's guess


    // while (true) {
    //     // Prompt the user to enter their guess
    //     guess = parseInt(prompt(getGuesses() + "\nGuess a number between 1 and 100:"));
    //     //other syntax  (triesLeft-=1 or triesLeft--)

    //     guesses.push(guess)
    //     if (isValidNumber(guess)) {
    //         triesLeft = triesLeft - 1
    //         //check if youser lost
    //         if (triesLeft <= 0) {
    //             alert("Game Over! the correct number is: " + randomNumber)
    //         }

    //         // Check if the guess is correct
    //         if (guess === randomNumber) {
    //             alert("Congratulations! You guessed the correct number is " + randomNumber);
    //             break; // Exit the loop if the guess is correct
    //         } else if (guess < randomNumber) {
    //             alert(getGuesses() + "\nToo low! Try again you still have " + triesLeft + " tries"); // Provide feedback if the guess is too low
    //         } else {
    //             alert(getGuesses() + "\nToo high! Try again you still have " + triesLeft + " tries"); // Provide feedback if the guess is too high
    //         }

    //     }
    // }

    g = new Game()
    g.start()

});


