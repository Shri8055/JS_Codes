// process of navigating through html structure.
// #1 // firstElementChild : used to get 1st child of element
// const fruit=document.getElementById("fruits");
// const firstChild=fruit.firstElementChild;
// firstChild.style.backgroundColor="Yellow";

// const vegetable=document.getElementById("vegetables");
// const firstChildveg=vegetable.firstElementChild;
// firstChildveg.style.backgroundColor="Yellow";

// const desert=document.getElementById("desserts");
// const firstChilddes=desert.firstElementChild;
// firstChilddes.style.backgroundColor="Yellow";

// another method to write first element child is...
// const UlElement = document.querySelectorAll("ul");
// UlElement.forEach(ulElement=>{
//     const firstChild=ulElement.firstElementChild;
//     firstChild.style.backgroundColor="yellow";
// })

// #2 // lastElementChild : used to get last child of element
// const fruit=document.getElementById("fruits");
// const lastChildfru=fruit.lastElementChild;
// lastChildfru.style.backgroundColor="Yellow";

// const vegetable=document.getElementById("vegetables");
// const lastChildveg=vegetable.lastElementChild;
// lastChildveg.style.backgroundColor="Yellow";

// const dessert=document.getElementById("desserts");
// const lastChilddes=dessert.lastElementChild;
// lastChilddes.style.backgroundColor="Yellow";

// another method to write last element child is...
// const UlElement = document.querySelectorAll("ul");
// UlElement.forEach(ulElement=>{
//     const lastChild=ulElement.lastElementChild;
//     lastChild.style.backgroundColor="yellow";
// })

// 3# // nextElementSibling : used to get next element sibling of selected element
// const fruits=document.getElementById("apple");
// const nextFruitSib=fruits.nextElementSibling;
// nextFruitSib.style.backgroundColor="Yellow";

// const vegetables=document.getElementById("carrots");
// const nextVegetableSib=vegetables.nextElementSibling;
// nextVegetableSib.style.backgroundColor="Yellow";

// const desserts=document.getElementById("cake");
// const nextdessertSib=desserts.nextElementSibling;
// nextdessertSib.style.backgroundColor="Yellow";

// 4# // previousElementSibling : used to get previous element sibling of selected element
// const fruits=document.getElementById("orange");
// const nextFruitSib=fruits.previousElementSibling;
// nextFruitSib.style.backgroundColor="Yellow";

// const vegetables=document.getElementById("onion");
// const nextVegetableSib=vegetables.previousElementSibling;
// nextVegetableSib.style.backgroundColor="Yellow";

// const desserts=document.getElementById("pie");
// const nextdessertSib=desserts.previousElementSibling;
// nextdessertSib.style.backgroundColor="Yellow";

// 5# // parentElement : used to get parent element of selected element
// const fruits=document.getElementById("orange");
// const parentFru=fruits.parentElement;
// parentFru.style.backgroundColor="Yellow";

// const vegetables=document.getElementById("carrots");
// const parentVeg=vegetables.parentElement;
// parentVeg.style.backgroundColor="Yellow";

// const desserts=document.getElementById("pie");
// const parentDes=desserts.parentElement;
// parentDes.style.backgroundColor="Yellow";

// 6# // children : used to get childern element of selected element
// const fruits=document.getElementById("fruits");
// const childFru=fruits.children;
// also can navigate through index numbers
// childFru[1].style.backgroundColor="yellow"
// Array.from(childFru).forEach(childFruits =>{
//     childFruits.style.backgroundColor="yellow";
// })

// const vegetables=document.getElementById("vegetables");
// const childVeg=vegetables.children;
// Array.from(childVeg).forEach(childVegetables =>{
//     childVegetables.style.backgroundColor="yellow";
// })

// const desserts=document.getElementById("desserts");
// const childDes=desserts.children;
// Array.from(childDes).forEach(childDesserts =>{
//     childDesserts.style.backgroundColor="yellow";
// })