function game() {
    const options = ['Rock', 'Paper', 'Scissors']

    // function selects one of three options: Rock, Paper, or Scissors
    function getComputerInput(options) {
        let selection = Math.floor(Math.random() * options.length)
        return options[selection];
    }

    function playRound(userInput, computerInput) {
        let message = (" | " + "You: " + userInput + " vs Computer: " + computerInput);
        if(userInput === computerInput) {
            return "This round is a tie."  + message;
        } 
        else if(userInput == "rock") {
            if(computerInput == "paper") {
                return "You Lose - Paper beats rock." + message;
            } else {
                return "You Win." + message;
            }
        }
        else if(userInput == "paper") {
            if(computerInput == "scissors") {
                return "You Lose - Scissors beats paper." + message;
            } else {
                return "You Win." + message;
            }
        }
        else if(userInput == "scissors") {
            if(computerInput == "rock") {
                return "You Lose - Rock beats scissors" + message;
            } else {
                return "You Win." + message;
            }
        }
        else {
            return "Something didn't go right here... Make sure that your choice was spelt correctly."
        }
    }

    const userInput = prompt("Rock, Paper, or Scissors?").toLowerCase();
    const computerInput = getComputerInput(options).toLowerCase();

    return(playRound(userInput, computerInput))
}