let butts=document.querySelectorAll(".mybutts");
butts.forEach(but=>{
    but.textContent=" 😀 ";
    but.style.backgroundColor="tomato";
});

// click event listners
butts.forEach(but=>{
    but.addEventListener("click",(event)=>{
        event.target.style.backgroundColor="red";
    });
});

// mouse hover event listners
butts.forEach(but=>{
    but.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor="rgb(90, 90, 246)";
    });
});

// add new button, here new button is added but since nodelists are static they are not added in nodelists
const newButt=document.createElement("button");
newButt.textContent="Button 5";
newButt.classList="mybutts";
document.body.append(newButt);
console.log(butts);
// we have to manually add new items by rewriting queryselectorAll().
butts=document.querySelectorAll(".mybutts");
console.log(butts);

// removing elements from nodelists, this only Temporarily remove elements from nodelists see in console
butts.forEach(but=>{
    but.addEventListener("click",(event)=>{
        event.target.remove();
    });
});

// remove elements permently see in console
butts.forEach(but=>{
    but.addEventListener("click",(event)=>{
        event.target.remove();
        butts=document.querySelectorAll(".mybutts");
        console.log(butts);        
    });
});