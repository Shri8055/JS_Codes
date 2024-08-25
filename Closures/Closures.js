// function inside function, variables declared inside function remains in that functions only
function outer(){
    let msg="shrinivas";
    function inner(){
        console.log(msg);        
    }
    inner();
}
outer();