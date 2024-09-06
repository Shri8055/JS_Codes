const choices=['rock','paper','sissor'];
const playerDisp=document.getElementById("playerDisp");
const computerDisp=document.getElementById("computerDisp");
const resultDisp=document.getElementById("resultDisp");

function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice){
        result="TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice==="sissor")? "You win" : "You lose";
                break;

            case "paper":
                result=(computerChoice==="rock")? "You win" : "You lose";
                break;

            case "sissor":
                result=(computerChoice==="paper")? "You win" : "You lose";
                break;
        }
    }
    playerDisp.textContent=`PLAYER : ${playerChoice}`;
    computerDisp.textContent=`COMPUTER : ${computerChoice}`;
    resultDisp.textContent=result;
    switch(result){
        case "You win":
            resultDisp.classList.add("win");
            resultDisp.classList.remove("lose");
            resultDisp.classList.remove("tie");
            break;

        case "You lose":
            resultDisp.classList.add("lose");
            resultDisp.classList.remove("win");
            resultDisp.classList.remove("tie");
            break;

        case "TIE!":
            resultDisp.classList.add("tie");
            resultDisp.classList.remove("win");
            resultDisp.classList.remove("lose");
            break;
    }
}