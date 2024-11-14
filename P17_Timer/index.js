function start(){
    let min=parseInt(document.getElementById('min').textContent);
    let sec=parseInt(document.getElementById('sec').textContent);
    const minElement = document.getElementById('min');
    const secElement = document.getElementById('sec');
    function timer(){
        if(sec===0){
            if (min===0){
                clearInterval(timerInterval);
                alert("time out!");
                return;
            }
            sec=60;
            min--;
        }sec--;
        minElement.textContent=min<10?'0'+min:min;
        secElement.textContent=sec<10?'0'+sec:sec;
    }
    let timerInterval=setInterval(timer, 1000);
}
start();