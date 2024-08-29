// step 1 create element
const myh1 = document.createElement("h1");
myh1.id="heading1";
myh1.style.color="orange";
myh1.style.textAlign="center";
// step 2 add attributes/properties
myh1.textContent="I like MAHARASHTRA !";

// step 3 append element to DOM
// appending to body
document.body.append(myh1);

// to BOX 1
// appending to box 1 as last children
//document.getElementById("box1").append(myh1);
// appending to box 1 as first children
//document.getElementById("box1").prepend(myh1);

// to BOX 2
// appending to box 2 as last children
//document.getElementById("box2").append(myh1);
// appending to box 2 as first children
//document.getElementById("box2").prepend(myh1);

// to BOX 3
// appending to box 3 as last children
//document.getElementById("box3").append(myh1);
// appending to box 3 as first children
//document.getElementById("box3").prepend(myh1);

// to BOX 4
// appending to box 4 as last children
//document.getElementById("box4").append(myh1);
// appending to box 4 as first children
//document.getElementById("box4").prepend(myh1);

// insert in between boxes or elements
// const box2=document.getElementById("box2");
//document.body.insertBefore(myh1,box2);

// what id we don't have id's
// const boxes=document.querySelectorAll(".box");
//document.body.insertBefore(myh1,boxes[1]);

// step 4 remove HTML
//document.body.removeChild(myh1);

// what if append is in another attribute consider div
//document.getElementById("box1").append(myh1);
// use specific id and use removeChild method, no matter the attribute is appended or prepended
//document.getElementById("box1").removeChild(myh1);