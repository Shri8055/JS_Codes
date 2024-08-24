// element index array

let numbers=[1,2,3,4,5];

const sqrNum=numbers.map(square);

console.log(sqrNum);

function square(element){
    return Math.pow(element,2);
}