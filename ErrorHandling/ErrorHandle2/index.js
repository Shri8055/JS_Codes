try{
    const divident=window.Number(prompt("Enter divident: "))
    const divisor=window.Number(prompt("Enter divisor: "))
    if(divisor==0){
        throw new Error("U can't divide by 0");
    }
    if(isNaN(divident)||isNaN(divisor)){
        throw new Error("Enter numbers");
    }
    const result=divident/divisor;
    console.log(result);    
}
catch(error){
    console.error(error);
}