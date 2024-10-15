const temperatureField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");
form.addEventListener("submit",search);
let target="Kolhapur";
const fetchdata=async(target)=>{
    try{
        const url=`https://api.weatherapi.com/v1/current.json?key=1f3c74a3e3b04450aa4151626241410&q=${target}`;
        const response=await fetch(url);
        const data=await response.json();
        const {
            current:{temp_c,
                condition:{
                    text,icon
                }
            },
            location:{name,localtime}
        }=data;
        updateDom(temp_c,name,localtime,icon,text);
    }
    catch(error){
        alert("Location not found!");
    }
}
fetchdata(target);
function updateDom(temperature,city,time,emoji,text){
    const exactTime=time.split(" ")[1];
    const exactDate=time.split(" ")[0];
    const exactDay=new Date(exactDate).getDay();
    temperatureField.innerText=temperature+"°";
    cityField.innerText=city;
    dateField.innerText=`${exactTime} - ${getFullDayName(exactDay)} - ${exactDate}`;
    emojiField.src=emoji;
    weatherField.innerText=text;
}
function search(e){
    e.preventDefault();
    target=searchField.value;
    fetchdata(target);
}
function getFullDayName(DayNum){
    switch(DayNum){
        case 0:
            return "Sunday";

        case 1:
            return "Monday";

        case 2:
            return "Tuesday";

        case 3:
            return "Wednesday";

        case 4:
            return "Thusday";

        case 5:
            return "Friday";

        case 6:
            return "Saturday";

        default:
            return "404 can't get Day Name";
    }
}