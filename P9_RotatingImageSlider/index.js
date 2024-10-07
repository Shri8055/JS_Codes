const imageContainerEl=document.querySelector(".image-container");
const prevEl=document.getElementById("prev");
const nextEl=document.getElementById("next");
let x=0;
let timer;
prevEl.addEventListener("click",()=>{
    x+=45;
    clearTimeout(timer);
    updateGall();
});
nextEl.addEventListener("click",()=>{
    x-=45;
    clearTimeout(timer);
    updateGall();
});
function updateGall(){
    imageContainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`
    timer=setTimeout(()=>{
        x-=45;
        updateGall();
    },3000);
}
updateGall();