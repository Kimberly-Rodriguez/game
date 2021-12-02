// set score chart
let wins = 0;
let losses = 0;
let ties = 0;

//Array showing the option available for the computer to select from
let options = ["R", "P", "S"];

let playGame = function () {
  // ask user for choice
  let userOptions = window.prompt("Enter R, P, or S");

  // if user selects Cancel -- end function
  if (!userOptions) {
    return;
  }
  // Convert to uppercase to make the comparison easier to do
  userOptions = userOptions.toUpperCase();

  // Get random index from array of options
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];

  window.alert("the computer selected " + computerChoice);

  // If there is a tie between user and computer
  if (userOptions === computerChoice) {
    ties++;
    window.alert("it's a tie! ");

  // verifying every win condion possible for the player
  } else if (
    (userOptions === "R" && computerChoice === "S") ||
    (userOptions === "P" && computerChoice === "R") ||
    (userOptions === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");
  //If above condition didn't render assume player lost points
  } else {
    losses++;
    window.alert("You lost!");
  }
  // print stats with line breaks
   window.alert (
     "Stats:\nWinds: " + wins + "\nLosses:" + losses + "\nTies:" + ties
   );
  // Ask user to play again
  let playAgain = window.confirm("Do you want to play again?");

  //if user pressed ok, start the function again
  if (playAgain){
    playGame();
  }
};

// start the game for the 1st time
playGame();
