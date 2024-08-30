const myBox=document.getElementById("myBox");
myBox.addEventListener("click",(event)=>{
    event.target.style.backgroundColor="tomato";
    event.target.textContent="Ouch! 😫";
});
myBox.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor="gray";
    event.target.style.transition=".5s";
    event.target.textContent="Don't do it 🙄";
});
myBox.addEventListener("mouseout",(event)=>{
    event.target.style.backgroundColor="rgb(255, 227, 127)";
    event.target.textContent="Click me 😁";
});