let inp=document.getElementById("inp");
let cel=document.getElementById("rad1");
let fer=document.getElementById("rad2");
let disp=document.getElementById("opt");
let temp;
function convert(){
    if(cel.checked){
        temp=Number(inp.value);
        temp=(temp*1.8)+32;
        disp.textContent=temp+"°F";
    }
    else if(fer.checked){
        temp=Number(inp.value);
        temp=(temp-32)/1.8;
        disp.textContent=temp+"°C";
    }
    else{
        disp.textContent="Select Unit First !";
    }
}