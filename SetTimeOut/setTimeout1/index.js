let timeoutID;
function startTime(){
    timeoutID=setTimeout(()=>window.alert("hello"),3000);
    console.log("Started");    
}
function clearTime(){
    clearTimeout(timeoutID);
    console.log("Cleared");
}
