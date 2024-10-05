const imagecontainerEL=document.querySelector(".image-container");
const btnEl=document.querySelector(".btn");
btnEl.addEventListener("click",()=>{
    newImgs();
});
function newImgs(){
    for(let i=0;i<10;i++){
        const newimages=document.createElement("img");
        newimages.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imagecontainerEL.appendChild(newimages);
    }
}