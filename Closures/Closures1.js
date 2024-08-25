function counter(){
    let count=0;
    function variable(){
        count++;
        console.log(count);        
    }
    return {variable};
}
const count=counter();
count.variable();
count.variable();
count.variable();
count.variable();
count.variable();