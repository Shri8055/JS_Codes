let displayValue='';
let history=[];
function updateDisplay(){
    document.getElementById('display').value=displayValue;
}
function appendNumber(number){
    displayValue+=number;
    updateDisplay();
}
function appendOperator(operator){
    displayValue+=operator;
    updateDisplay();
}
function clearDisplay(){
    displayValue='';
    updateDisplay();
}
function deleteLast(){
    displayValue=displayValue.slice(0,-1);
    updateDisplay();
}
function calculate(){
    try{
        let result=eval(displayValue);
        if(!isNaN(result)){
            let calculation=`${displayValue}=${result}`;
            history.unshift(calculation);
            if(history.length>5){
                history.pop();
            }
            updateHistory();
            displayValue=result.toString();
            updateDisplay();
        }
    } catch(error){
        displayValue='Error';
        updateDisplay();
    }
}
function updateHistory(){
    let historyList=document.getElementById('calculation-history');
    historyList.innerHTML='';
    history.forEach(calculation=>{
        let li=document.createElement('li');
        li.textContent=calculation;
        historyList.appendChild(li);
    });
}
