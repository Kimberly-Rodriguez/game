// set score chart 
let wins = 0;
let losses = 0;
let ties = 0;

//Array showing the option available for the computer to select from
let options = [ "R", "P", "S"]; 


let playGame = function() {
  // ask user for choice
 let userOptions = window.prompt("Enter R, P, or S");

 // if user selects Cancel -- end function
  if (!userOptions){
  return;
  }
  // Convert to uppercase to make the comparison easier to do
  userOptions = userOptions.toUpperCase();


  // Get random index from array of options
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = option[index];

  window.alert("the computer selected " + computerChoice);

 // If there is a tie between user and computer
 if (userOptions === computerChoice) {
   ties++
   window.alert("it's a tie");
  
 } else if ((userOptions === "R" && computerChoice === "S") ||
           (userOptions === "P" && computerChoice === "R")){

 }



}



let computer = function(){
if("Rock" === true ) {
  console.log ("R")
} else if ("Paper" === true){
  console("P")
} else if ("Scissors" === true){
  console.log("S")
} else {
  console.log("not match")
}
return computer
}

computer();

let player = function(){
  if("Rock" === true ) {
    console.log ("R")
  } else if ("Paper" === true){
    console("P")
  } else if ("Scissors" === true){
    console.log("S")
  } else {
    console.log("not match")
  }
  return player

}

player();

function tied(){
  if ("Rock" === "Rock"){
    console.log("tied")
  } else if ("Paper" === "Paper"){
    console.log("tied")
  } else if ("Scissors" === "Scissors"){
    console.log("tied")
  } else {
    console.log("not tied")
  }
  return
}

tied();