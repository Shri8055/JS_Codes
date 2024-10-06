const containerEl=document.querySelector(".container");
for(let i=0;i<30;i++){
    const newcontainerEl=document.createElement("div");
    newcontainerEl.classList.add("color-container");
    containerEl.appendChild(newcontainerEl);
}
function colorRandom(){
    const chars="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode="";
    for(let i=0;i<colorCodeLength;i++){
        const randomNums=Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomNums,randomNums+1);
    }
    return colorCode;
}
const newcolorContainersEl=document.querySelectorAll(".color-container");
generateColors();
function generateColors(){
    newcolorContainersEl.forEach((newcontainerEl)=>{
        const newColorCode=colorRandom();
        newcontainerEl.style.backgroundColor="#"+newColorCode;
        newcontainerEl.innerText="#"+newColorCode;
    });
}