function calc(){
    inpage=document.getElementById("birthday").value;
    res=document.getElementById("result");
    if(inpage){
        currdate=new Date();
        bdate=new Date(inpage);
        const age=currdate.getFullYear()-bdate.getFullYear();
        res.textContent=`You are ${age} Years Old.`;
    }
    else{
        res.textContent=`Select valid date.`;
    }
}