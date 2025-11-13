let guess = document.querySelector(".guess-input");
let submitButton = document.querySelector(".submit-button");
let quitButton = document.querySelector(".quit-button");
let resetButton = document.querySelector(".reset-button");
let info = document.querySelector(".info");
let result = document.querySelector(".result-message");
let count = document.querySelector(".number-of-tries");
let winsCount = document.querySelector(".track1amount");
let lossesCount = document.querySelector(".track2amount");
let roundsCount = document.querySelector(".track3amount");
let streakCount = document.querySelector(".track4amount");
let retriesCount = document.querySelector(".track5amount");
let tries = 0;
let wins = 0;
let losses = 0;
let rounds = 0;
let streak = 0;
let retries = 0;

let numberOfFish = Math.floor(Math.random() * 1000);

if (numberOfFish === guess.value) {
  result.innerHTML = "CONGRATS! YOU GUESSED RIGHT!";
} else
  function checkGuess() {
    if (numberOfFish % 2 === 0 && guess.value % 2 === 0) {
      result.innerHTML = "You're getting warmer! The number is even.";
    } else if (numberOfFish % 2 !== 0 && guess.value % 2 !== 0) {
      result.innerHTML = "You guessed almost right! The number is odd.";
    } else if (numberOfFish > guess.value) {
      result.innerHTML = "Your guess was too low. Try another number.";
    } else if (numberOfFish < guess.value) {
      result.innerHTML = "Your guess was too high. Try another number.";
    } else if (numberOfFish % 2 !== 0 && guess.value % 2 === 0) {
      result.innerHTML = "The number i. Try another number.";
    }
  }
console.log(numberOfFish);

function triesAmount() {
  tries += 1;
  count.innerHTML = tries;
}

function winsAmount() {
  if (numberOfFish === guess.value) {
    wins += 1;
    winsCount.innerHTML = wins;
  }
}

function lossesAmount() {
  if (numberOfFish !== guess.value) {
    losses += 1;
    lossesCount.innerHTML = losses;
  }
}

function roundsAmount() {
  rounds = 0;
  roundsCount.innerHTML = rounds;
  tries = 0;
  count.innerHTML = tries;
  losses = 0;
  lossesCount.innerHTML = losses;
  rounds = 0;
  roundsCount.innerHTML = rounds;
  streak = 0;
  streakCount.innerHTML = streak;
  retries += 1;
  retriesCount = retries;
  result.innerHTML = "^ Enter a number to begin!";
  guess.value = null;
}

function quitAmount() {
  tries = 0;
  count.innerHTML = tries;
  losses += 1;
  lossesCount.innerHTML = losses;
  rounds += 1;
  roundsCount.innerHTML = rounds;
  streak -= 1;
  streakCount.innerHTML = streak;
  retries += 1;
  retriesCount.innerHTML = retries;
}

submitButton.addEventListener("click", checkGuess);

submitButton.addEventListener("click", triesAmount);
submitButton.addEventListener("click", winsAmount);
submitButton.addEventListener("click", lossesAmount);
quitButton.addEventListener("click", quitAmount);
resetButton.addEventListener("click", roundsAmount);
