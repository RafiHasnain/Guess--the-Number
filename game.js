// random value generated
var y = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 0;

//user name
var Uname = "";

function playAgain() {
  y = Math.floor(Math.random() * 10 + 1);
  guess = 0;
  document.getElementById("uGuess").innerHTML = "";
  document.getElementById("guess").innerHTML = "";
  document.getElementById("hint").innerHTML = "";
  document.getElementById("guessField").disabled = false;
  document.getElementById("submitGuess").disabled = false;
  document.getElementById("gameOver").innerHTML = "";
  document.getElementById("playAgain").style.display = "none";
  document.getElementById("CGuess").innerHTML = "";
}

document.getElementById("submitGuess").onclick = function () {
  // number guessed by user
  var x = document.getElementById("guessField").value;
  if (x == y) {
    document.getElementById("hint").innerHTML =
      "CONGRATULATIONS " + Uname + "!!! YOU MADE IT!";
    document.getElementById("gameOver").innerHTML = "Game Over";
    document.getElementById("CGuess").innerHTML =
      "The Guessed Number was: " + y;
    document.getElementById("fireworkAnimation").style.display = "block";
    document.getElementById("guessField").disabled = true;
    document.getElementById("submitGuess").disabled = true;
    // document.getElementById("startGame").style.display = "block";
    document.getElementById("playAgain").style.display = "block";
  } else if (x == y + 1 || x == y - 1) {
    guess++;
    document.getElementById("hint").innerHTML = "BOILING, " + Uname + "!";
  } else if (x == y + 2 || x == y - 2) {
    guess++;
    document.getElementById("hint").innerHTML = "HOT, " + Uname + "!";
  } else if (x > y) {
    /* if guessed number is greater
            than actual number*/
    guess++;
    document.getElementById("hint").innerHTML =
      "OOPS SORRY " + Uname + "!! TRY A SMALLER NUMBER";
  } else if (x < y) {
    guess++;
    document.getElementById("hint").innerHTML =
      "OOPS SORRY " + Uname + "!! TRY A GREATER NUMBER";
  } else {
    guess++;
    document.getElementById("hint").innerHTML =
      "OOPS WRONG INPUT " + Uname + "!! TRY WITH NUMBER";
  }

  if (guess == 4) {
    document.getElementById("gameOver").innerHTML = "Game Over";
    document.getElementById("CGuess").innerHTML =
      "The Guessed Number was: " + y;
    document.getElementById("fireworkAnimation").style.display = "block";
    document.getElementById("guessField").disabled = true;
    document.getElementById("submitGuess").disabled = true;
    // document.getElementById("startGame").style.display = "block";
    document.getElementById("playAgain").style.display = "block";
  }

  document.getElementById("guess").innerHTML = guess;
  document.getElementById("guessField").value = "";
  document.getElementById("uGuess").innerHTML = x;
};

function startGame() {
  // Get the value of the input field with id="uname"
  Uname = document.getElementById("uName").value;
  document.getElementById("gameBoxes").style.display = "flex";
  document.getElementById("userName").innerHTML = "Player's Name: " + Uname;
  document.getElementById("gameOver").innerHTML = "";

  // document.getElementById("guessField").disabled = false;
  // document.getElementById("submitGuess").disabled = false;

  document.getElementById("startGame").style.display = "none";
  document.getElementById("modeForm").style.display = "block";

  //   document.getElementById("uName").disabled = true;
  //   document.getElementById("submitUserName").disabled = true;
  //   document.getElementsByClassName("uname").destroy = true;
  var element = document.body;
  element.style.backgroundImage = "none";
}
function darkMode() {
  var element = document.body;
  element.className = "dark-mode";
  // document.getElementsByClassName("guesses").className = "guesses-dark-mode";
  // document.getElementById("guessDiv").ClassName = "guesses-dark-mode";
}
function lightMode() {
  var element = document.body;
  element.className = "light-mode";
}

function darkModeGuesses() {
  var element = document.getElementById("guessDiv");
  element.className = "guesses-dark-mode";
}
function darkModeInput() {
  var element = document.getElementById("inputDiv");
  element.className = "input-dark-mode";
}
function darkModeHint() {
  var element = document.getElementById("hintDiv");
  element.className = "hint-dark-mode";
}
function lightModeGuesses() {
  var element = document.getElementById("guessDiv");
  element.className = "guesses-light-mode";
}

function lightModeInput() {
  var element = document.getElementById("inputDiv");
  element.className = "input-light-mode";
}
function lightModeHint() {
  var element = document.getElementById("hintDiv");
  element.className = "hint-light-mode";
}
