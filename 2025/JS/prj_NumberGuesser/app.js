/**
 * GAME FUNCTION:
 * -Player must guess a number between a min and a max
 * -Player gets a certain amount of guesses
 * -Notify player of guesses remaining
 * -Let player choose to play again
 */

// Game values  1
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements   2
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max  3
minNum.textContent = min;
maxNum.textContent = max;



// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){

        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');


  } else {
                // Wrong number
                guessesLeft -= 1;

                if(guessesLeft === 0){
                        // Game over - lost
                        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

                } else {
                            // Game continues - answer wrong

                            // Change border color
                            guessInput.style.borderColor = 'red';

                            // // Clear Input
                            guessInput.value = '';

                            // // Tell user its the wrong number
                            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
                }
        }
});




// Set a message 5
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// Game over
function gameOver(won, msg){

    let color;

    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg);

}