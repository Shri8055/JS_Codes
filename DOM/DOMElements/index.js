// getElementById() html element
const myH1=document.getElementById("my-heading");
myH1.style.backgroundColor="pink";
myH1.style.width="50%";
myH1.style.textAlign="center";

// getElementByClassName(): html collection -> this are iterable but don't support forEach method.
const fruits=document.getElementsByClassName("fruits");
const fruitsId=document.getElementById("fruitsId");
// fruitsId.style.width="50%";
// fruits[0].style.backgroundColor="orange";
// fruits[1].style.backgroundColor="skyblue";
// fruits[2].style.backgroundColor="lightgreen";

// for(let fruit of fruits){
//     fruit.style.backgroundColor="yellow";
// }

// to convert classNames useful for forEach method we use...
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor="yellow";
// })

// getElementByTagName() : html collection -> DOM using HTML tag elements
const H4Elements=document.getElementsByTagName("h4");
const liElements=document.getElementsByTagName("li");
// below is styled using index of tag names
// H4Elements[1].style.backgroundColor="yellow";

// to make all style at once use for loop.
// for(let h4elem of H4Elements){
//     h4elem.style.backgroundColor="Yellow";
// }
// for(let lielem of liElements){
//     lielem.style.backgroundColor="lightgreen";
// }

// querySelector() : html first matching elements or null -> returns first element of matching class,Id,etc..i.e passed in function
// const elems=document.querySelector(".fruits");
// elems.style.backgroundColor="yellow";

// const elems1=document.querySelector("h4");
// elems1.style.backgroundColor="yellow";

// const elems2=document.querySelector("ul");
// elems2.style.backgroundColor="yellow";

// const elems3=document.querySelector("li");
// elems3.style.backgroundColor="pink";

// querySelectorAll() : html NODELIST -> this method has build-in functions, this are static and html collections are live they can update dynamically, html method return all elements that matches a CSS selector
const fruit=document.querySelectorAll(".fruits");
fruit[1].style.backgroundColor="yellow";

const fruit1=document.querySelectorAll("li");
// fruit1[0].style.backgroundColor="yellow";
// fruit1[1].style.backgroundColor="yellow";
// fruit1[2].style.backgroundColor="yellow";
// fruit1[3].style.backgroundColor="yellow";
// fruit1[4].style.backgroundColor="yellow";
// fruit1[5].style.backgroundColor="yellow";

// forEach Method
fruit1.forEach(fruit=>{
    fruit.style.backgroundColor="pink";
})