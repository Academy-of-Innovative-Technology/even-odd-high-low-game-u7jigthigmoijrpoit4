let guess = document.querySelector('.guess-input');;
let submitButton = document.querySelector('.submit-button');
let quitButton = document.querySelector('.quit-button');
let resetButton = document.querySelector('.reset-button');
let info = document.querySelector('.info');
let result = document.querySelector('.result-message');
let tries = 0;
let count = document.querySelector('.number-of-tries');



let numberOfFish = Math.floor(Math.random() * 1000);

if(numberOfFish === guess.value){
result.innerHTML = "CONGRATS! YOU GUESSED RIGHT!";
}
else 

    function checkGuess(){
        if(numberOfFish % 2 === 0 && guess.value % 2 === 0){
            result.innerHTML = "You're getting warmer! The number is even.";
        }
        else if(numberOfFish % 2 !== 0 && guess.value % 2 !== 0){
            result.innerHTML = "You guessed almost right! The number is odd.";
        }
        else if(numberOfFish > guess.value){
            result.innerHTML = "Your guess was too low. Try another number.";
        }
        else if (numberOfFish < guess.value){
            result.innerHTML = "Your guess was too high. Try another number.";
    }
    else if(numberOfFish % 2 !== 0 && guess.value % 2 === 0){
            result.innerHTML = "The number i. Try another number.";
    }
    }
console.log(numberOfFish);

function triesAmount(){
    tries += 1;
    count.innerHTML = tries;
}

submitButton.addEventListener('click', checkGuess);

submitButton.addEventListener('click', triesAmount);
