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

    if(passlength<=5){
        document.getElementById("opt").textContent=`Length can't be less than 5`;
        return;
    }
    if(allchar.length===0){
        document.getElementById("opt").textContent=`Select atleast one option`;
        return;
    }
    for(let i=0;i<passlength;i++){
        const randomInd=Math.floor(Math.random()*allchar.length);
        password+=allchar[randomInd];
    }
    document.getElementById("opt").textContent=`Password: ${password}`;
}
