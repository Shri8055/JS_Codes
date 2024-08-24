hello(greet);
function hello(callback){
    console.log('Hello');
    callback();
}
function greet(){
    console.log('Good Morning !');
}