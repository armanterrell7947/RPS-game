const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);

}

let computerSelection  = computerPlay();
let playerSelection = computerPlay();



function playRound (playerSelection, computerSelection) {
    //sets winning parameters
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection==='scissors' && computerSelection==='paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++;
        return `Hey! Congratulations! You won. Because you chose ${playerSelection} and the computer chose ${computerSelection}. Your 
        score is now: ${playerScore} and the computer's score is now ${computerScore}`;
    }   //right here starts the tie outcome
        else if (playerSelection === computerSelection) {
        return `Hey! It was a tie, try again!`
    }   else {
        computerScore++;
        return `Hey! Sorry! You lost! Because you chose ${playerSelection} and the computer chose ${computerSelection}, you were
        hilariously defeated. The computer's score is now: ${computerScore} and your score is now ${playerScore}`;
    }
    
}

function game(game) {
    roundsTotal = 6;
    roundsPlayed = 0;
    while (roundsPlayed < roundsTotal) {
        playRound();
        roundsPlayed ++
    } 
    if (roundsPlayed === 5) {
        return `Refresh the page dammit!`;
    }
    if (playerScore < 5 || computerScore < 5){
        continue
    } else if (playerScore === 5) {
        return 'You won!';
    }   else {
        return 'You lost!';
    }
}

