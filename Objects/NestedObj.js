const person1={
    name:"Shrinivas Kangralkar",
    age:21,
    hobbies:['coding','IoT','Cars','Bikes'],
    Address:{
        street:"Kalamba Ring Road",
        Landmark:"Opp Gajanan Mangal Karyalay",
        Pincode:416007,
    }
}
console.log(`Name: `,person1.name);
console.log(`Age: `,person1.age);
for(let hobby in person1.hobbies){
    console.log(person1.hobbies[hobby]+",");
}
// nested object
console.log(`Address: `,person1.Address.street);
console.log(`Landmark: `,person1.Address.Landmark);
console.log(`Pincode: `,person1.Address.Pincode);
// another method to print nested object
for(let add in person1.Address){
    console.log(person1.Address[add]);    
}