
const hand = ["rock","paper","scissors"];
let winCount = 0;
let gameRound = 0;
const notification = document.querySelector('#notification');
let result = document.createElement('h2');

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

/** PROMPT VERSION */
/*
function singleGame(){
    let playerSelection = prompt("Please enter either rock, paper, scissors", "rock");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    gameRound++;
    console.log(`You won ${winCount} out of ${gameRound} games`);
}

function game(number){
    for (let i=0; i<number; i++){
        singleGame();
    }
}
*/

/** GUI VERSION */

function singleGameInput(playerSelection){
    let computerSelection = getComputerChoice();

    result.textContent = playRound(playerSelection, computerSelection);
    result.textContent +=`\n Tally: You won ${winCount} out of ${gameRound} games`;
    gameRound++;

    if (gameRound > 4) {
        gameRound = 0;
        if (winCount > 2) result.textContent += '\n Congrats! You Win the Game!';
        else result.textContent += '\n Game Over! You Lost!';
    } 

    notification.appendChild(result);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(){
    let buttonPressed = this.getAttribute('id');
    singleGameInput(buttonPressed);
 }
 ));


