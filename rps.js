//first some variables
let you = 0;
let comp = 0;
let tie = 0;

//Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return 
//either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

function computerPlay(){
  computerSelection = Math.floor(Math.random() * 3) + 1;
  if (computerSelection == 1){
    computerSelection = "rock"
    return computerSelection
  }
  else if (computerSelection == 2) {
    computerSelection = "paper"
    return computerSelection
  }
  else if (computerSelection == 3) {
    computerSelection = "scissors"
    return computerSelection
  }
}
      
      
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - 
//the playerSelection and computerSelection - and then return a string that declares the winner of the round l
function playRPS(playerSelection, computerSelection){

  console.log("Human Player chooses ")
  console.log(playerSelection)
  console.log("Computer chooses ")
  console.log(computerSelection)

  if (playerSelection === computerSelection){
      console.log("It's a tie!")
      tie = tie + 1;
      console.log("Tie " + tie);
  } else if (playerSelection === "rock" && computerSelection === "scissors"){
      console.log("Player Human wins! Rock beats Scissors")
      you = you + 1;
      console.log("You Win Round " + you);
      
  } else if (computerSelection === "rock" && playerSelection === "scissors"){
      console.log("Computer wins! rock beats Scissors")
      comp = comp +1 ;
      console.log("Computer Wins Round " + comp);
  } else if (playerSelection === "scissors" && computerSelection === "paper"){
      console.log("Player Human wins! scissors beats paper")
      you = you + 1;
      console.log("You Win Round " + you);
  } else if (computerSelection === "scissors" && playerSelection === "paper"){
      console.log("Computer wins! scissors beats Paper")
      comp = comp + 1;
      console.log("Computer Wins Round " + comp);
  } else if (playerSelection === "paper" && computerSelection === "rock"){
      console.log("Player Human wins! paper beats Rock")
      you = you + 1;
      console.log("You Win Round " + you);
  } else if (computerSelection === "paper" && playerSelection === "rock"){
      console.log("Computer wins! paper beats Rock")
      comp = comp + 1;
      console.log("Computer Wins Round " + comp);
  }
  displayWinner(comp, you)
}

//Display the running score, and announce a winner of the game once one player reaches 5 points.
function displayWinner(comp, you) {
  document.getElementById("CompScore").innerHTML = comp;
  document.getElementById("YouScore").innerHTML = you;
  document.getElementById("TieScore").innerHTML = tie; 

  if (comp >= 5) {
    document.getElementById("showwinner").innerHTML = "The Computer Wins The Game"; 
  } else if (you >= 5) {
    document.getElementById("showwinner").innerHTML = "You Win The Game"; 
  }

}
 


//user selects a button as their choice return as playerSelection
// add a click listener to get human selection
document.getElementById("selections").addEventListener("click", function(e) {
  let playerSelection;
  // e.target is the clicked element!
  if (e.target.id == "scissors"){
    playerSelection = e.target.id
    console.log(playerSelection)
  }else if (e.target.id == "paper"){
    playerSelection = e.target.id
    console.log(playerSelection) 
  }else if (e.target.id == "rock") {
    playerSelection = e.target.id
    console.log(playerSelection) 
  }
  //get computer selection
  computerSelection = computerPlay();
  playRPS(playerSelection, computerSelection)
});



