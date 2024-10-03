const txt=document.querySelector(".container");
const carrers=["Engineer","Web Developer","FreeLancer","YouTuber"];
let carrerIndex=0;
let txtIndex=0;
function updateText(){
    txtIndex++;
    txt.innerHTML=`<h1>I am a ${carrers[carrerIndex].slice(0,txtIndex)}</h1>`;
    setTimeout(updateText,400);
    if(txtIndex===carrers[carrerIndex].length){
        carrerIndex++;
        txtIndex=0;
    }
    if(carrerIndex===carrers.length){
        carrerIndex=0;
    }
}
updateText();