let num=0;
document.getElementById("Decbtn").onclick=function(){
    num--;
    document.getElementById("display").textContent=num;
}
document.getElementById("Resbtn").onclick=function(){
    num=0;
    document.getElementById("display").textContent=num;
}
document.getElementById("Incbtn").onclick=function(){
    num++;
    document.getElementById("display").textContent=num;
}