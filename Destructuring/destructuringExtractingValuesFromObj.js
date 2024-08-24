const person1={
    firstName:"Shrinivas",
    lastName:"Kangralkar",
    age:21,
    isEmp:"Cook",
}
const person2={
    firstName:"Arjun",
    lastName:"Gujar",
    age:34,
}
const {firstName,lastName,age,isEmp="unEmployed"}=person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isEmp);