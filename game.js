console.log("Hi")

const objects = ["rock","paper","scissors"];

function getComputerChoice() {
    const computerChoice = objects[Math.floor(Math.random()*objects.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let validInput = false;
    while(validInput==false) {
        const choice = prompt("Rock - Paper - SCISSORS !");
    if (choice==null) {
        continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (objects.includes(choiceInLower)) {
        validInput = true;
        return choiceInLower
    }
    }
}

function checkWinner(playerChoice,computerChoice) {
    if (playerChoice == computerChoice) {return "Tie"}
    
    else if (
        (playerChoice=="rock" && computerChoice=="scissors") ||
        (playerChoice=="paper" && computerChoice=="rock") ||
        (playerChoice=="scissors" && computerChoice=="paper")
        ) {
            return "Player"
        }
    else {
        return "Computer"
    }
}

function round(playerChoice,computerChoice) {
    const result = checkWinner(playerChoice,computerChoice);
    if (result=="Tie") {return "Tie"}
    else if (result=="Player") {return "You win! "+playerChoice+" beats "+computerChoice}
    else {return "You lose! "+computerChoice+" beats "+playerChoice}
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i=0;i<5;i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(round(playerChoice,computerChoice));
        if (checkWinner(playerChoice,computerChoice) == "Player") {
            scorePlayer++
        }
        else {scoreComputer++}
    }
    console.log("Game over")
    if (scorePlayer == scoreComputer) {console.log("TIE")}
    else if (scorePlayer > scoreComputer) {console.log("YOU WIN")}
    else {console.log("You lose")}
}

game()