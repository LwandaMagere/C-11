/*
 GAME FUNCTION:
 -Player must guess a number between a min and a max
 -Player gets a certain amount of guesses
 -Notify player of guesses remaining
 -Let player choose to play again
 */

 // Game values
 let min = 1,
     max = 10,
     winningNum = 2,
     guessLeft = 3;

// UI Elementst
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message =   document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess)|| guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`);
    }
});

// Set message
function setMessage(msg) {
    message.textContent = msg;
} 