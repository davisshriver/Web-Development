// highlow.js
// Contains essential JavaScript for the Higher Lower program
// Author: Davis Shriver
// Date: 1/26/2023

let number;
let valid_input = false;
let max = 0;
let i = 0;
let guesses =[];

// Starts the process
start();

// Retrieves max number, validates input, and generates random number
function start()    {
    while(!valid_input) {
        // Only runs the first time.
        if(i < 1)   {
            input = window.prompt("Enter maximum number below.");
            max = Number(input);
            max = Math.round(max);
            i++;
        }
            
            
        if(max != NaN && max >= 1) {
            valid_input = true;
            // Change message
            let instructions = document.getElementById("instructions");
            instructions.innerText = `Guess a number between 1 and ${max}`;
        }
        else {
            input = window.prompt("Invalid input, try again.");
            max = Number(input);
            max = Math.round(max);
        }
    }
    
    // Generate random number based on max
    number = Math.floor(Math.random() * max) + 1;

    // Use for debugging/testing
    console.log(number);
}



// Compares guesses and validates guess input
function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");
    let instructions = document.getElementById("instructions");
    
    // Check for duplicates
    if(dupeCheck(guess) == false)    {  
        // Valid Input
        if(guess >= 1 && guess <= max)  {
            if(guess == number) {
                guesses.push(guess);
                message.innerText = `You got it! It took you ${guesses.length} tries and your guesses were: ${guesses}`;
            }
            else if(guess > number) {
                message.innerHTML = "You guessed too high, try again.";
                guesses.push(guess);

            }
            else if(guess < number)   {
                message.innerHTML = "You guessed too low, try again.";
                guesses.push(guess);
            }
        }
        // Invalid Input
        else if (guess > max || guess < 1)  {
            message.innerHTML = "That number is not in range, try again.";
        }
        else    {
            message.innerHTML = "That is not a number!";
        }
    }
    // Duplicate guess
    else {
        message.innerHTML = `You already tried to guess ${guess}, try a different number.`;
    }

}

// Function to check for duplicates
function dupeCheck(checked) {
    for(let i = 0; i < guesses.length; i++) {
        if(checked == guesses[i]) {
            return true;
        }
    }
    return false;
}
