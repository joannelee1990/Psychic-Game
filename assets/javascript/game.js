window.onload = function(){ 
  alert("Are you ready to beat the computer?");
}

//This function is run whenever the user presses a key.
      var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
     
      // Creating variables to hold the number of wins, losses, and ties. They start at 0.
      var wins = 0;
      var losses = 0;
      var guessesLeft = 9;
      var guessesSoFar = [];
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.onkeyup = function(event) {
      var userGuess = event.key;
      guessesSoFar.push(userGuess);
      
        if ((userGuess === computerGuess)) { 
          wins++;
          guessesLeft = 9;
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          guessesSoFar = [];
          console.log("WON");         
          }

        else if ((userGuess !== computerGuess)) {
          guessesLeft--;
            function guess() {
            guessesSoFar.push(userGuess);  
            }
          console.log("LOST");
        };

        if ((guessesLeft === 0)) {
          losses++;
          guessesLeft = 9;
          computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          guessesSoFar = [];
          console.log("START A NEW GAME, YOU LOST");
        }
        




        var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +         
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: : " + guessesSoFar + "</p>" ;

      document.querySelector("#game").innerHTML = html
    };
    
    
    
   