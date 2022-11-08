const getComputerChoice = () => {
    const availableOptions = ['Rock', 'Paper', 'Scissors'];

    return availableOptions[Math.floor(Math.random()*availableOptions.length)];
};

getComputerChoice();

const getPlayerChoice = () => {
    const choice = prompt('Type your choice:');
    return choice[0].toUpperCase() + choice.slice(1).toLocaleLowerCase();
}


const playRound = (playerSelection, computerSelection) => {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    console.log("Computer", computerSelection, "Player", playerSelection)
    if(playerSelection === computerSelection) return 'Draw';
    else if(playerSelection === 'Rock') {
        if(computerSelection === 'Scissors') return 'Player won';
        if(computerSelection === 'Paper') return 'Computer won';
    }
    else if(playerSelection === 'Scissors') {
        if(computerSelection === 'Rock') return 'Computer won';
        if(computerSelection === 'Paper') return 'Player won';
    }
    else if(playerSelection === 'Paper') {
        if(computerSelection === 'Rock') return 'Player won';
        if(computerSelection === 'Scissors') return 'Computer won';
    }
    else return 'Someone did not choose proper option';

}

const game = () => {
    for (let i=0; i<5; i++) {
        console.log(playRound());
    };
}

game();


