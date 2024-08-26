function seyHello(){
    window.alert("Hello");
}
setTimeout(seyHello,3000);

// another method to write function also can be written using =>
const timeout=setTimeout(function Goodbye(){window.alert("Goodbye");},6000)
clearTimeout(timeout);