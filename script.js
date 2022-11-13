let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const availableOptions = ['rock', 'paper', 'scissors'];
    return availableOptions[Math.floor(Math.random()*availableOptions.length)];
};

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection;
    computerSelection = getComputerChoice();

    console.log("Computer", computerSelection, "Player", playerSelection);

    if(playerSelection === computerSelection) return;
    else if(playerSelection === 'rock') {
        if(computerSelection === 'scissors') playerScore += 1;
        if(computerSelection === 'paper') computerScore += 1;
    }
    else if(playerSelection === 'scissors') {
        if(computerSelection === 'rock') computerScore += 1;
        if(computerSelection === 'paper') playerScore += 1;
    }
    else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') playerScore += 1;
        if(computerSelection === 'scissors') computerScore += 1;
    }
    else return 'Someone did not choose proper option';

    
    const playerScorePara = document.querySelector('.p-score');
    const computerScorePara = document.querySelector('.c-score');
    playerScorePara.innerHTML = playerScore;
    computerScorePara.innerHTML = computerScore;
    const winnerWrap = document.querySelector('.winner-wrapper');
    const winner = document.createElement('div');
    winner.classList.add('winner');
    const playerScoreWrap = document.querySelector('.player-score');
    const computerScoreWrap = document.querySelector('.comp-score');
    const winSound = document.querySelector('.win-sound-player');
    const loseSound = document.querySelector('.lose-sound-player')
    
    if(playerScore === 5) {
        winSound.play();
        playerScoreWrap.setAttribute('style', 'background-color: #24de24');
        computerScoreWrap.setAttribute('style', 'background-color: #df0a0a');
        winner.textContent = 'THE WINNER IS PLAYER!' 
        winnerWrap.appendChild(winner);
    }
    if(computerScore === 5) {
        loseSound.play();
        computerScoreWrap.setAttribute('style', 'background-color: #24de24');
        playerScoreWrap.setAttribute('style', 'background-color: #df0a0a');
        winner.textContent = 'THE WINNER IS COMPUTER!' 
        winnerWrap.appendChild(winner);
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => { 
        button.addEventListener('click', (e) => {
            console.log(playRound(e.target.className, getComputerChoice))
        })
})


