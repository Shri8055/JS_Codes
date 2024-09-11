function walkTheDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const walkdog=true;
            if(walkdog){
                resolve("You walked the dog 🐕");
            }
            else{
                reject("You diden't walked the dog");
            }
        }, 1500);
    });
}
function cleanTheKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleankitchen=true;
            if(cleankitchen){
                resolve("You cleaned the kitchen 🧹");
            }
            else{
                reject("You diden't cleaned the kitchen");
            }
        }, 500);
    });
}
function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const takeTrash=true;
            if(takeTrash){
                resolve("You take out the trash ♻");
            }
            else{
                reject("You diden't take out the trash");
            }
        }, 3000);
    });
}
walkTheDog().then(value=>{console.log(value); return cleanTheKitchen()})
            .then(value=>{console.log(value); return takeOutTrash()})
            .then(value=>{console.log(value); console.log("All tasks Completed !");})
            .catch(error=>console.error(error));