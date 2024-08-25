class person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}
class Address{
    constructor(street,landmark,pincode){
        this.street=street;
        this.landmark=landmark;
        this.pincode=pincode;
    }
}
const person1=new person("Shrinivas Kangralkar",21,"kalamba ring road",
                                                   "Opp.Pranjal pride",
                                                    416007);
console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);
console.log(person1.address.landmark);
console.log(person1.address.pincode);

const person2=new person("Arjun Gujar",21,"Nahre",
                                          "Opp.Shahu Bank",
                                           416010);
console.log(person2.name);
console.log(person2.age);
console.log(person2.address.street);
console.log(person2.address.landmark);
console.log(person2.address.pincode);

const person3=new person("Deepak Kamble",21,"Nahre",
                                            "Opp.Dnyandeep English Medium School Narhe",
                                             416010);
console.log(person3.name);
console.log(person3.age);
console.log(person3.address.street);
console.log(person3.address.landmark);
console.log(person3.address.pincode);