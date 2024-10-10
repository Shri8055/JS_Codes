const url="https://official-joke-api.appspot.com/random_joke";
const h1=document.getElementById("res");
const span=document.getElementById("emoji");
async function getEmoji(){
    try {
        let response = await fetch("https://emoji-api.com/emojis?access_key=e0dcaa38142f9e272ad00b2fac2ece0a9c5ca864");
        let data = await response.json();
        let randomIndex = Math.floor(Math.random() * 500);
        let randomEmoji = data[randomIndex].character;
        span.textContent = randomEmoji;
    } catch (error) {
        console.log("Error fetching emoji:", error);
    }
}
getEmoji();
const fetchdata=()=>{
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            h1.textContent=data.setup;
            h1.textContent+=" ";
            h1.textContent+=data.punchline;
        })
        .catch((e)=>console.log(e));
}
fetchdata();