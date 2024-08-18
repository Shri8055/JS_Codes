document.getElementById("heading").textContent="Helllo";
let firstname="Shrinivas",age=21,isStudent=true;
document.getElementById("p1").textContent=`Ur name is: ${firstname}`;
document.getElementById("p2").textContent=`Ur age is: ${age}`;
document.getElementById("p3").textContent=`Ur are Student: ${isStudent}`;
let username=window.prompt("Enter User name:  ");
console.log(`Your name is: ${username}`);
document.getElementById("heading").textContent=`Helllo ${username}`;

//user input
let username1;
document.getElementById("but").onclick=function(){
    username1=document.getElementById("input").value;
    console.log(username1);
    document.getElementById("heading1").textContent=` ${username1}`;
}