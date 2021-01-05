//if you're helping me, thank you. Don't judge my code, I'm still learning. Help me solve the problem
//OF WHY THE FUCK THIS WON'T BE RECOGNIZED IN MY HTML, I'M LOSING MY SHIT


const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

//this is what sets the computers choice to be a random selection from the array
function computerPlay () {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return(computerChoice);

}

let computerSelection  = computerPlay();
let playerSelection = '';
numberOfRounds = 0;

let buttonList = document.querySelectorAll('.button');
const para = document.querySelector('p');
const scoreboard = document.querySelector('.scoreboard');

/*
for (let i = 0; i < btn.length ; i++){
    btn[i] = btn.addEventListener('click', function(){
        btn[i].forEach(function(btn){
            alert('hello');
}
*/



buttonList.forEach(function(button) {
    buttonList.addEventListener('click', function(){
        alert('hello');
    } )
});

/* document.querySelectorAll('.button').addEventListener('click', function () {
    alert('hello');
  }, false);

*/

//  const highlightedItems = userList.querySelectorAll(".highlighted");

/*highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});
*/

/*
btn.addEventListener('click', function(){
    btn.forEach(function(btn){
        alert('hello');
    })
})
*/


function playRound (playerSelection, computerSelection) {
    //sets winning parameters
    

    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection==='scissors' && computerSelection==='paper' ||
    playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore ++;
        numberOfRounds++;
        para.textContent = `Hey! Congratulations! You won. Because you chose ${playerSelection} and the computer chose ${computerSelection}. Your 
        score is now: ${playerScore} and the computer's score is now ${computerScore}`;
        
    }   //right here starts the tie outcome
        else if (playerSelection === computerSelection) {
            endGame();
        para.textContent =  `Hey! It was a tie, try again!`;
            
    }   else  {
        computerScore++;
        numberOfRounds++;
        para.textContent = `Hey! Sorry! You lost! Because you chose ${playerSelection} and the computer chose ${computerSelection}, you were
        hilariously defeated. The computer's score is now: ${computerScore} and your score is now ${playerScore}`;
       
    }
}


    
    
