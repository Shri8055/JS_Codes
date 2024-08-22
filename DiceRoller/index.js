function Rolld(){
    let num = document.getElementById("inp").value;
    let txtRes = document.getElementById("resultDisp");
    let imgRes = document.getElementById("imageDisp");
    let values=[];
    let images=[];
    for(let i=0;i<num;i++){
        let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="pngs/${value}.png">`)
    }
    txtRes.textContent=`Dice : ${values.join(', ')}`;
    imgRes.innerHTML=images.join('');
}