
const hand = ["rock","paper","scissors"];
let winCount = 0;
let lostCount = 0;
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
        document.getElementById("playerScore").textContent = winCount;
        output = `You Win!`;
    }
    else if (roundResult === "lose") {
        lostCount++;
        document.getElementById("cpuScore").textContent = lostCount;
        output = `You Lose!`;
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

function removeActiveIcons(){
    const activeIcons = document.getElementsByClassName("active");
    while (activeIcons.length)
        activeIcons[0].classList.remove("active");
}

 function highlightButton(playerSelection, computerSelection){
    const playerIcon = document.getElementById(playerSelection);
    const cpuIcon = document.getElementById("cpu-" + computerSelection);

    removeActiveIcons();
    playerIcon.classList.add('active');
    cpuIcon.classList.add('active');
 }

 function clearGameScores(){
    winCount = 0;
    lostCount = 0;
    gameRound = 0;
    document.getElementById("playerScore").textContent = "0";
    document.getElementById("cpuScore").textContent = "0";
 }

function singleGameInput(playerSelection){
    let computerSelection = getComputerChoice();
    highlightButton(playerSelection, computerSelection);
    result.textContent = playRound(playerSelection, computerSelection);
    gameRound++;
    document.getElementById("gameBoard").textContent=`Round ${gameRound}`;
    //result.textContent +=`\n Tally: You won ${winCount} out of ${gameRound} games`;


    if (gameRound > 4) {
        document.getElementById("gameBoard").textContent="Final Round";

        if (winCount > 2) result.textContent += '\n Congrats! You Win the Game!';
        else result.textContent += '\n Game Over! You Lost!';

    } 

    notification.appendChild(result);
}

/*Start Event Listener*/ 
const buttons = document.querySelectorAll('.playerinput');
buttons.forEach(button => button.addEventListener('click', function(){

    if (gameRound > 4) {
        //Reset Game
        clearGameScores();
    }

    let buttonPressed = this.getAttribute('id');
    singleGameInput(buttonPressed);
 }
 ));



