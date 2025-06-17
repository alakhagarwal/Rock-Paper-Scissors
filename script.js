let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const genComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];

}

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const drawGame = () => {
    msg.innerText = "Game was DRAW! Play Again"
    msg.style.backgroundColor = "#081b31";
    
}

const shoWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }

    else
    {
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;;   
        msg.style.backgroundColor = "red";     
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate Computer choice
    const compChoice = genComputerChoice()
    console.log("Computer choice = ", compChoice);

    if (userChoice==compChoice) {
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }

        else {
           userWin = compChoice === "rock" ? false : true; 
        }
         shoWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.id;       
        playGame(userChoice);        
    })
})