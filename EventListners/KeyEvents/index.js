const myBox=document.getElementById("myBox");
const moveAmount=50;
let x=0;
let y=0;
document.addEventListener("keydown",(event)=>{
    myBox.textContent="🤨";
    myBox.style.borderRadius="50px";
    myBox.style.backgroundColor='tomato';
});
document.addEventListener("keyup",(event)=>{
    myBox.textContent="😴";
    myBox.style.borderRadius="10px";
    myBox.style.transition=".2s";
    myBox.style.backgroundColor='skyblue';
});
document.addEventListener("keydown",(event)=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;

            case "ArrowDown":
                y+=moveAmount;
                break;

            case "ArrowRight":
                x+=moveAmount;
                break;
            
            case "ArrowLeft":
                x-=moveAmount;
                break;
        }
        myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;
    }
});