// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), 
// and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS
const randNum = Math.floor(Math.random() * 10 + 1); {
console.log('random', randNum);
};

var allowedGuess = 3;
var guessCount = 0;
let guessNum = document.getElementById('guessNum').value;

function guess(){
    
    if (guessCount <= allowedGuess) {
        // var guessNumber = guessNum.value;
        if (guessCount < 0 ){guessNum=0;}
        if((guessCount < allowedGuess) && (guessNum != randNum)) {
            // guessNum = document.getElementByType('number').value;
            guessNum = parseInt(guessNum);
        };
        if(guessCount > allowedGuess) {
            alert('Game over, bro!! GAME OVER!!!');
        };
        
        } if(guessNum > randNum) { 
            alert("Whoops! Guess again (lower)!");
            guessCount++;
        } else if(guessNum < randNum) {
            alert('Whoops! Try again (higher)!');
            guessCount++;
        } else if(guessNum.value === randNum.value) {
            alert("BOOM! That is correct");
            guessCount++;
    } else { 
        guessCount--;
    }
};

document.getElementById('submitGuess').addEventListener('click', e => {
    e.preventDefault();
})

const btn = document.querySelector('button');
btn.addEventListener('click', guess); {
    console.log('guessed', guess)
};

// document.getElementById('submitGuess').onclick = guess();
