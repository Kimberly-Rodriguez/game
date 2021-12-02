let wins = 0;
let losses = 0;
let ties = 0;

//Array showing the option available for the computer to select from
let options = [ "Rock", "Paper", "Scissors"]; 




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