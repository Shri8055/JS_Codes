sum(disp,5,5);

function sum(callback,a,b){
    let sum=a+b;
    callback(sum);
}
function disp(sum){
    console.log(sum);
}