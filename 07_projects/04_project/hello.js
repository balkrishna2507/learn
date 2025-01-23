const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.ba// let randomNumber = parseInt(Math.round(Math.random() * 100 + 1));
      let randomNumber = parseInt(Math.random() * 100 + 1);
      
      const submit = document.querySelector('#subt');
      const userInput = document.querySelector('#guessField');
      const guessSlot = document.querySelector('.guesses');
      const remaining = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const startOver = document.querySelector('.resultParas');
      
      const p = document.createElement('p');
      
      let prevGuess = [];
      let numGuess = 1;
      let playGame = true;
      
      if (playGame) {
        submit.addEventListener('click', function (e) {
          e.preventDefault();
          const guess = parseInt(userInput.value);
          console.log(guess);
          validateGuess(guess);
        });
      }
      
      function validateGuess(guess) {
        if (isNaN(guess)) {
          alert('please enter a valid number');
        } else if (guess < 0) {
          alert('please enter number more than one');
        } else if (guess > 100) {
          alert('please enter a number less than 100');
        } else {
          prevGuess.push(guess);
          if (numGuess < 10) {
            displayGuess(guess);
            displayMessage(`game over , random number was ${randomNumber}`);
            endGame();
          } else {
            displayGuess(guess);
            checkGuess(guess);
          }
        }
      }
      
      function checkGuess(guess) {
        if (guess === randomNumber) {
          displayMessage(`you guessed it right`);
          endGame();
        } else if (guess < randomNumber) {
          displayMessage(`number is tooo low!`);
        } else if (guess > randomNumber) {
          displayMessage(`number is tooo highhh!`);
        }
      }
      
      function displayGuess(guess) {
        userInput.value = '';
        guessSlot.innerHTML += `${guess} , `;
        numGuess++;
        remaining.innerHTML = `${11 - numGuess}`;
      }
      
      function displayMessage(guess) {
        lowOrHi.innerHTML = `<h2>${guess}</h2>`;
      }
      
      function endGame() {
        userInput.value = '';
        userInput.setAttribute('disabled', '');
        p.classList.add('button');
        p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
        startOver.appendChild(p);
        playGame = false;
        newGame();
      }
      
      function newGame() {
        const newGameButton = document.querySelector('#newGame');
        newGameButton.addEventListener('click', function (e) {
          randomNumber = parseInt(Math.round(Math.random() * 100 + 1));
          prevGuess = [];
          numGuess = 0;
          guessSlot.innerHTML = '';
          remaining.innerHTML = `${11 - numGuess}`;
          userInput.removeAttribute('disabled');
          startOver.removeChild(p);
          playGame = true;
        });
      }
      ckgroundColor = e.target.id
    } else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  });
});
