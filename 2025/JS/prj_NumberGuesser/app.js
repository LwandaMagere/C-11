/**
 * GAME FUNCTION:
 * -Player must guess a number between a min and a max
 * -Player gets a certain amount of guesses
 * -Notify player of guesses remaining
 * -Let player choose to play again
 */

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

    // UI Elements
    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('.message');
        
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max) {

     setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
if(guess === winningNum) {
  // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

} else {
  // Wrong number
  guessesLeft -= 1;

  if(guessesLeft === 0){
    // Game Over - lost 
    gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);

  } else {
    // Game continues - wrong

    // Change border color
    guessInput.style.borderColor = 'red';

    // Clear input
    guessInput.value = '';

    // Tell  the user it's the wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');         
  }
}
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
                  // Disable input
                  guessInput.disabled = true;
                  // Change border color
                  guessInput.style.borderColor = color;
                  // Set text color
                  message.style.color = color;
                  // Set Message
                  setMessage(msg);

  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
                  
}

// Get winning number
function getRandomNum() {
  return Math.floor(Math.random() * (max-min+1)+min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

