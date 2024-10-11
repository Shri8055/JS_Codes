const url="https://official-joke-api.appspot.com/random_joke";
const setupElement=document.getElementById("setup");
const punchlineElement=document.getElementById("punchline");
const guessButton=document.getElementById("guess-btn");
const span=document.getElementById("emoji");
async function getEmoji(){
    try{
        let response=await fetch("https://emoji-api.com/emojis?access_key=e0dcaa38142f9e272ad00b2fac2ece0a9c5ca864");
        let data=await response.json();
        let randomIndex=Math.floor(Math.random()*500);
        let randomEmoji=data[randomIndex].character;
        span.textContent=randomEmoji;
    }catch(error){
        console.log("Error fetching emoji:", error);
    }
}
getEmoji();
function fetchJoke(){
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            setupElement.textContent=data.setup;
            let countdown=4;
            guessButton.textContent=`Guess in ${countdown}s`;
            const intervalId=setInterval(()=>{
                countdown--;
                guessButton.textContent=`Guess in ${countdown}s`;
                if(countdown===0){
                    clearInterval(intervalId);
                    guessButton.textContent="Show Punchline 🥊";
                    guessButton.disabled=false;
                    guessButton.onclick=()=>{
                        punchlineElement.textContent=data.punchline;
                    };
                }
            },1000);
        })
        .catch(error=>console.log("Error fetching joke:",error));
}
fetchJoke();