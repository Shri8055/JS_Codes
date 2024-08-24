const person1 = {
    firstName:"Shrinivas",
    lastName:"Kangralkar",
    age:21,
    isEmp:true,
    sayHello: () => {console.log("Hello I'm Shrinivas")},
    eat: () => {console.log("I'm eating Biryani")},
}
const person2 = {
    firstName:"Arjun",
    lastName:"Gujar",
    age:21,
    isEmp:false,
    sayHello: () => {console.log("Hello I'm Arjun")},
    eat: () => {console.log("I'm eating Burger")},
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmp);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmp);
person2.sayHello();
person2.eat();