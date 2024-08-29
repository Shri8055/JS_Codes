/// asynchronous functions,methods are used execute independetly here task 2,3,4 are executed 1st and task 1 at last many function can be executed at same time

setTimeout(()=> {console.log("Task 1");},3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");