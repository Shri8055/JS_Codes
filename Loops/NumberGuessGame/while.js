let min=1,max=100,guess,attempts=0,answer;
answer=Math.floor(Math.random()*(max-min)+1)+min;
let running=true;
console.log(answer);
while(running){
    guess=window.prompt("Enter number between 1 - 100");
    guess=Number(guess);
    if(isNaN(guess)){
        console.log("Enter valid number between 1 - 100");
    }
    else if(guess>max || guess<min){
        console.log("Enter valid number between 1 - 100");
    }
    else{
        attempts++;
        if(guess<answer){
            console.log("Too low! try again");
        }
        else if(guess>answer){
            console.log("Too High! try again");
        }
        else{
            console.log(`Congrats! U guessed it right in ${attempts} attempts !!!`);
            document.getElementById("num").textContent=`Congrats! U guessed it right in ${attempts} attempts !!!`;
            running=false;
        }
    }
}