//Available choices
var computerChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// integer variables
var wins = 0;
var losses = 0;
var guess = 9;
var guessesLeft = 9;
// string variables
var guessedLetters = [];
var computerLetter = null;

//computer randomly chooses a letter

var computerLetter = computerChoices [Math.floor(Math.random()*computerChoices.length)];

//updates guesses left function

var updateGuessesLeft = function() {
    document.querySelector('#guessCount').innerHTML = guessesLeft;
};

//letter to guess function

var updatecomputerLetter = function(){
    this.computerLetter = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function(){
    document.querySelector('#guessList').innerHTML = guessedLetters.join(', ');
};

//reset the counters for next game

var resetCounters = function(){
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateletterToGuess();
    updateGuessesSoFar();
    updateGuessesLeft();

};

updateGuessesLeft();
updatecomputerLetter();

//user input key

document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = event.key;
    console.log(userGuess)

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess === computerLetter){
                wins++;
                document.querySelector('#winCount').innerHTML = wins;
                alert("Very good, you're very skillful!");
                resetCounters();
            }
        } else if (guessesLeft === 0){
            losses++;
            document.querySelector('#lossCount').innerHTML = losses;
            alert("Sorry, robots win!");

            resetCounters();
        }
}

