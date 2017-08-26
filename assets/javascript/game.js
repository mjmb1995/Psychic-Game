// letter choices
var computerChoices = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = [];
var wins = 0;
var losses = 0;
var guess = 9;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

$(document).ready(function() {

    document.onkeyup = function(event) {
     
   		var userGuess = event.key;
   		document.getElementById('guessList').append(userGuess);

       	if(userGuess === computerGuess){
	        wins++;
	    }else{
	        guess--;
	    }

	    if(guess === 0){
	        losses++
	    }
	    
	document.getElementById('winCount').innerHTML =(wins);
    document.getElementById('lossCount').innerHTML =(losses);
    document.getElementById('guessCount').innerHTML =(guess);
	}
});

    


      

      // ...

   
// document.getElementById("startButton").addEventListener("click", start);
// document.onkeyup = function(event) {
// 	var userGuess = event.key;
// 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// 	console.log(computerGuess);

// 	for (var i = 9; i < 0; i - 1) {	
// 		document.getElementById('guessList').append(userGuess);

// 		if (userGuess === computerGuess) {
// 			wins++
// 			document.getElementById('winCount').innerHTML = wins;
// 			break;
// 		} else if (userGuess !== computerGuess) {
// 			guess - 1;
// 			document.getElementById('guessCount').innerHTML = guess;
// 		} else if (userGuess !== computerGuess && guess === 0){
// 			losses++
// 			alert("Sorry, machine wins...")
// 		}

// 	}
// }