let age;
document.getElementById("but").onclick=function(){
    age=document.getElementById("inp").value;
    if(age>=100){
        document.getElementById("result").textContent=`You are TOO OLD enough to enter site`;
    }
    else if(age>=18){
        document.getElementById("result").textContent=`You are OLD enough to enter site`;
    }
    else if(age<=0){
        document.getElementById("result").textContent=`You are just born cant to enter site`;
    }
    else if(age<=18){
        document.getElementById("result").textContent=`You are NOT that OLD enough to enter site`;
    }
    
}