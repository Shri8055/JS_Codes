// class list has methods like add(),remove(),toggle(),replace(),contains().
let myBut=document.getElementById("mybutts");

// add()
myBut.classList.add("hover");

// remove()
// myBut.addEventListener("click",(event)=>{
//     event.target.classList.remove("hover");
// });

// toggle()
// myBut.addEventListener("mouseover",(event)=>{
//     event.target.classList.toggle('hover');
// });
// myBut.addEventListener("mouseout",(event)=>{
//     event.target.classList.toggle('hover');
// });

// replace()
// myBut.addEventListener("click",(event)=>{
//     event.target.classList.replace("hover","mouseout");
// });

// contains()
myBut.addEventListener("click",(event)=>{
    if(event.target.classList.contains("mouseout")){
        event.target.textContent+="😍";
    }
    else{
        event.target.classList.replace("hover","mouseout");
    }
});