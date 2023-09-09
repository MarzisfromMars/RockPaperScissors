const playerText = document.querySelector("#PText")
const computerText = document.querySelector("#CText")
const ResultText = document.querySelector("#resultText")

const choiceBtns = document.querySelectorAll(".choicebutton")
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click",() => {
    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    ResultText.textContent = `Winner: ${CheckWinner()}`;
}));

function getComputerChoice()
{
    const picked = Math.floor(Math.random() * 3)
    switch(picked)
    {
        case 0:
            computer = "Rock"
        break;
        case 1:
            computer = "Paper"
            break;
            case 2 :
                computer = "Scissors"
                break;
    }
}
function  CheckWinner()
{
    if(player == computer)
    {
        return "Draw!";
    }
    else if (computer == "Rock")
    {
        return(player == "Paper") ? "You Win!" : "You Lose!"
    }
    else if (computer == "Paper")
    {
        return(player == "Scissors") ? "You Win!" : "You Lose!"
    }
    else if (computer == "Scissors")
    {
        return(player == "Rock") ? "You Win!" : "You Lose!"
    }
}