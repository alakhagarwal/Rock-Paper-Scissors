function getComputerChoice() {
    return Math.floor(Math.random()*3)
}

function getHumanChoice() {
    const choice = (prompt("Enter Rock,Paper or Scissors"))
    if (choice.toLowerCase()=="rock") {
        return 0;
    }
    if (choice.toLowerCase()=="paper") {
        return 1;
    }
    if (choice.toLowerCase()=="scissors") {
        return 2;
    } 

    return -2;   
}

let Humanchoice
let Computerchoice

let humanscore = 0
let computerscore = 0


function playRound(humanchoice,computerchoice) {

    if (humanchoice==computerchoice) {
        console.log("It's a Draw!");
    }

    else if (humanchoice==0&&computerchoice==1) {
        console.log(`You lose! Paper beats Rock`);
        computerscore++;
    }
    else if (humanchoice==1&&computerchoice==2) {
        console.log(`You lose! Scissor beats Paper`);
        computerscore++;
    }
    else if (humanchoice==2&&computerchoice==0) {
        console.log(`You lose! Rock beats Scissor`);
        computerscore++;
    }
    else if (humanchoice==0&&computerchoice==2) {
        console.log(`You Won! Rock beats Scissor`);
        humanscore++;
    }
    else if (humanchoice==1&&computerchoice==0) {
        console.log(`You Won! Paper beats Rock`);
        humanscore++;
    }
    else if (humanchoice==2&&computerchoice==1) {
        console.log(`You Won! Scissors beats Paper`);
        humanscore++;
    }

}

function playGame() {
    humanscore = 0
    computerscore = 0

    for (let i = 0; i < 5; i++) {
        Humanchoice = getHumanChoice()
        Computerchoice = getComputerChoice()
        playRound(Humanchoice,Computerchoice)        
    }  
    
}

playGame()

if (humanscore>computerscore) {
    console.log(`Yay You Won!\n You Score - ${humanscore}\n Computer Score - ${computerscore}`);
       
}
else if (humanscore<computerscore) {
    console.log(`You Lost!\n You Score - ${humanscore}\n Computer Score - ${computerscore}`);
       
}
else{
    console.log(`It's a Draw!\n You Score - ${humanscore}\n Computer Score - ${computerscore}`);
       
}


