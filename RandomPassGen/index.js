function generate(){
    const passlength=document.getElementById("Inp").value;
    const includeLow=document.getElementById("che1").checked;
    const includeUpp=document.getElementById("che2").checked;
    const includeNum=document.getElementById("che3").checked;
    const includeSym=document.getElementById("che4").checked;
    
    const Lowchar="abcdefghijklmnopqrstuvwxyz";
    const Uppchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numchar="0123456789";
    const Symchar="!@#$%^&*()_+/*-";

    let allchar="";
    let password="";

    allchar+=includeLow?Lowchar:"";
    allchar+=includeUpp?Uppchar:"";
    allchar+=includeNum?Numchar:"";
    allchar+=includeSym?Symchar:"";

    if(length<0){
        console.log(`Password length cant be Zero`);
    }
    if(allchar.length===0){
        console.log(`Select atleast one option`);
    }
    for(let i=0;i<passlength;i++){
        const randomInd=Math.floor(Math.random()*allchar.length);
        password+=allchar[randomInd];
    }
    document.getElementById("opt").textContent=`Password: ${password}`;
}