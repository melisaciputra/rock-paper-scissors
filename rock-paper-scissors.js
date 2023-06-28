
const hand = ["rock","paper","scissors"];

function getComputerChoice(){
    let randomChoice = random(0,3);
    return hand[randomChoice];
}

function random(min, max){
    return (Math.floor(Math.random() * (max - min) + min))
}

function playRound(playerSelection, computerSelection) {
    // 0 is Lose, 1 is win, 2 is draw;
    let roundResult = "draw";
    let output = "It's a Draw!";
    
    if(playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "paper") roundResult = "win";
        else if (computerSelection === "scissors") roundResult = "lose";
    }
    else if(playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "rock") roundResult = "win";
        else if (computerSelection === "scissors") roundResult = "lose";
    }
    else if(playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "paper") roundResult = "win";
        else if (computerSelection === "rock") roundResult = "lose";
    }
    else{
        output = "Invalid Input. Choose between rock, paper, scissors.";
    }
    
    if (roundResult === "win") {
        winCount++;
        output = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (roundResult === "lose") {
        output = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    return output;
}

function singleGame(){
    let playerSelection = prompt("Please enter either rock, paper, scissors", "rock");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    gameRound++;
    console.log(`You won ${winCount} out of ${gameRound} games`);
}
   
let winCount = 0;
let gameRound = 0;

//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));

function game(number){
    for (let i=0; i<number; i++){
        singleGame();
    }
}
