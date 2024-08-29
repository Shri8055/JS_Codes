// step 1 create element
const fruit=document.createElement("li");
fruit.id="mango";

// step 2 add attributes/properties
fruit.textContent="Mango";

// step 3 append element to DOM
// added 4th li to HTML at last of li using append
//document.getElementById("fruits").append(fruit);
// adding 4th li to HTML at first of li using prepend
//document.getElementById("fruits").prepend(fruit);

// insert between li elements
//const li2=document.getElementById("banana");
//document.getElementById("fruits").insertBefore(fruit,li2);

// what if we don't have id's will use queryselectall
//const lielements=document.querySelectorAll("#fruits li");
//document.getElementById("fruits").insertBefore(fruit,lielements[2]);
// appending to body
//document.body.append(fruit);
// step 4 remove HTML
//const lielements=document.querySelectorAll("#fruits li");
//document.getElementById("fruits").insertBefore(fruit,lielements[2]);
//document.getElementById("fruits").removeChild(fruit);