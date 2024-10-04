const date=new Date();
let month=document.getElementById("month-name");
let dayName=document.getElementById("day-name");
let dayNum=document.getElementById("day-number");
let year=document.getElementById("year");
const months=date.getMonth();
month.innerText=date.toLocaleString("en",{
    month:"long"
})
dayName.innerText=date.toLocaleString("en",{
    weekday:"long"
})
dayNum.innerText=date.getDate();
year.innerText=date.getFullYear();

function updateClock(){
    const now = new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const min=now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hours} : ${min} : ${sec}`;
    document.getElementById("clock").textContent=timeString;
}
updateClock();
setInterval(updateClock,1000);