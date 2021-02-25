// declare a constant letters
const letters = "abcdefghijklmnopqrstuvwxyz+";
// make letters as Array using Array.from()
let arrayLetters = Array.from(letters);
// bind div letters in html by querySelector
let lettersContainer = document.querySelector(".letters");
arrayLetters.forEach((letter) => {
  // create span element
  let letterSpan = document.createElement("span");
  // create Text Node
  let letterText = document.createTextNode(letter);
  // Append letterText inside letterSpan
  letterSpan.appendChild(letterText);
  // Append letterSpan inside lettersContainer
  lettersContainer.appendChild(letterSpan);
  // Add letter-style class to letterSpan
  letterSpan.className = "letter-style";
});

// create list of category which contains some of array of string

let categoryList = {
  programming_Languages: [
    "PHP",
    "C++",
    "JAVA",
    "JAVASCRIPT",
    "SWIFT",
    "PYTHON",
  ],
  movies: [
    "Becoming",
    "Horse Girl",
    "Miss Americana",
    "The Assistant",
    "The Invisible Man",
    "Titanic",
  ],
  scientists: [
    "Albert Einstein",
    "Newton",
    "Marie Curie",
    "Thomson",
    "Max Planck",
    "ahmed zewail",
  ],
  countries: ["Egypt", "Australia", "China", "France", "Italy", "Japan"],
};

let categorykeys = Object.keys(categoryList);
// get index of keys
let randomCategoryIndex = Math.floor(Math.random() * categorykeys.length);
// bind span in category in html by querySelector
let spanCategoryKey = document.querySelector(".category span");
//Append text (randomCategoryKey) inside span
spanCategoryKey.innerHTML = categorykeys[randomCategoryIndex];
// asign values of random key
let categoryValues = categoryList[categorykeys[randomCategoryIndex]];
// get index of values in array
let randomValueIndex = Math.floor(Math.random() * categoryValues.length);
// get name of value of target category
let targtValue = categoryValues[randomValueIndex];
// make targtValue string as Array using Array.from()
let arrayTargtValue = Array.from(targtValue);
// console.log(arrayTargtValue); ////////////console

// bind div letters in html by querySelector
let lettersGuessContainer = document.querySelector(".letter-guess");
arrayTargtValue.forEach((letterGuess) => {
  // create span element
  let letterSpan = document.createElement("span");
  // Append letterSpan inside lettersGuessContainer
  lettersGuessContainer.appendChild(letterSpan);
  // Add letterGuess-style class to letterSpan
  letterSpan.className = "letterGuess-span";
  if (letterGuess === " ") {
    letterSpan.className = "space";
  }
});

let wrongTries = 0;
let collectedLetter = "";
// Get array from letter guess span
let lettersGuessSpan = Array.from(
  document.querySelectorAll(".letter-guess span")
);
// console.log(lettersGuessSpan);
document.addEventListener("click", function (e) {
  if (e.target.className == "letter-style") {
    // get the status of choosen letter
    let theStatusChoosen = false;
    e.target.classList.add("clicked");
    let clickedletter = e.target.innerHTML.toLowerCase();
    arrayTargtValue.forEach((targetLetter, targetIndex) => {
      if (targetLetter.toLowerCase() == clickedletter) {
        // console.log(targetLetter +","+ targetIndex)
        theStatusChoosen = true;
        collectedLetter += clickedletter; // to use to appear success (Congratulation)
        lettersGuessSpan.forEach((GuessSpan, SpanIndex) => {
          if (
            arrayTargtValue.length == lettersGuessSpan.length &&
            targetIndex == SpanIndex
          ) {
            GuessSpan.innerHTML = clickedletter.toUpperCase();
          }
        });
      }
    });
    let thedraw = document.querySelector(".hangman-draw");
    if (theStatusChoosen !== true) {
      wrongTries++;
      thedraw.classList.add(`wrong-${wrongTries}`);
      document.getElementById("fail").play();
      if (wrongTries == 12) {
        lettersContainer.classList.add("finished");
        endGame();
      }
    } else {
      document.getElementById("success").play();
      if (collectedLetter.length == targtValue.length) {
        lettersContainer.classList.add("finished");
        success();
      }
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let textDiv = document.createTextNode(
    `Game Over , the word is ${targtValue}`
  );
  div.appendChild(textDiv);
  div.classList.add("gameOver");
  document.body.appendChild(div);
}

function success() {
  let div = document.createElement("div");
  let textDiv = document.createTextNode("Congratulation");
  div.appendChild(textDiv);
  div.classList.add("success-game");
  document.body.appendChild(div);
}


