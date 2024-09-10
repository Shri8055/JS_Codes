// function task1(){
//     console.log("Task 1 Complete !");
// }
// function task2(){
//     console.log("Task 1 Complete !");
// }
// function task3(){
//     console.log("Task 1 Complete !");
// }
// function task4(){
//     console.log("Task 1 Complete !");
// }
// function task5(){
//     console.log("Task 1 Complete !");    
// }
// task1();
// task2();
// task3();
// task4();
// console.log("All tasks comleted !");

function Task1(callback){
    setTimeout(()=>{
        console.log("Task 1 Completed");
        callback();
    },3000);
}
function Task2(callback){
    setTimeout(()=>{
        console.log("Task 2 Completed");
        callback();
    },1500);
}
function Task3(callback){
    setTimeout(()=>{
        console.log("Task 3 Completed");
        callback();
    },1000);
}
function Task4(callback){
    setTimeout(()=>{
        console.log("Task 4 Completed");
        callback();
    },500);
}
Task1(()=>{
    Task2(()=>{
        Task3(()=>{
            Task4(()=>{
                console.log("All tasks Completed");
            });
        });
    });
});