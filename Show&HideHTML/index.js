const mybut=document.getElementById("myButt");
const myimg=document.getElementById("myImg");
mybut.addEventListener("click",(event)=>{
    if(myimg.style.visibility==="hidden"){
        myimg.style.visibility="visible";
        mybut.textContent="Hide";
    }
    else{
        myimg.style.visibility="hidden";
        mybut.textContent="Show";
    }
});