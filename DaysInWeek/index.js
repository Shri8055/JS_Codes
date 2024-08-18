let day;
day=window.prompt("Enter day number: ");
day=Number(day);
switch(day){
    case 1:
        console.log("Today is Monday.");
        break;

    case 2:
        console.log("Today is Tuesday.");
        break;
    
    case 3:
        console.log("Today is Wednesday.");
        break;

    case 4:
        console.log("Today is Thusday.");
        break;

    case 5:
        console.log("Today is Friday.");
        break;

    case 6:
        console.log("Today is Saturday.");
        break;

    case 7:
        console.log("Today is Sunday.");
        break;

    default:
        console.log(`${day} is not a day not present in week !!.`);
        break;
}