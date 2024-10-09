const res=document.getElementById("display");
const container=document.querySelector(".container");
let numOfwords;
function generator(n){
    let text='';
    const letters="abcdefghijklmnopqustuvwxyz";
    for(let i=0;i<n;i++){
        text+=letters[(Math.random()*(letters.length-1)).toFixed(0)];
    }
    return text;
}
function generate(){
    const input=document.getElementById("inpnums").value;
    const para=document.createElement("p");
    let numOfwords=Number(input);
    if(numOfwords==0){
        res.innerText="Enter numbers to generate text";
        res.setAttribute("class","alert");
        container.append(res);
    }
    else{
        let data="";
        res.remove();
        for(let i=0;i<numOfwords;i++){
            data+=generator((Math.random()*15).toFixed(0));
            data+=" ";
        }
        para.innerText=data;
        para.setAttribute("class","para");
        container.append(para);
    }
}