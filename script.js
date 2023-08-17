function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)

    if (number == 0) {
        console.log("rock")
        return "rock"
    }
    else if (number == 1) {
        console.log("paper")
        return "paper"
    }
    else {
        console.log("scissors")
        return "scissors"
    }
}

function getPlayerChoice() {
    return prompt("Your turn: ").toLowerCase()
}

function Match(a, b) { 
    if (a == "rock" && b == "scissors") 
    {
        console.log("You win")
        return "You Win!"
    }
    else if (a == "paper" && b == "rock") 
    {
        console.log("You win")
        return "You Win!"
    }
    else if (a == "scissors" && b == "paper") 
    {
        console.log("You win")
        return "You Win!"
    }
    else if (a == "paper" && b == "scissors") 
    {
        console.log("You lose")
        return "You Lose!"
    }
    else if (a == "rock" && b == "paper") 
    {
        console.log("You lose")
        return "You Lose!"
    }
    else if (a == "scissors" && b == "rock") 
    {
        console.log("You lose")
        return "You Lose!"
    }
    else if (a == b){
        console.log("Tie")
        return "It's a Tie!"
    }
}

function game (Match){
   
    let computerScore = 0
    let playerScore = 0

    for(i =0; i < 100; i++){

        let round = Match(getPlayerChoice(), getComputerChoice())

        if (round == "You Win!"){
            playerScore++
        }
        else if(round == "You Lose!"){
                computerScore++
            }
        
            if (computerScore == 5){
                return "computer wins"
            }
            else if (playerScore == 5){
                return "Player wins"
            }
    }

}

console.log(game(Match))