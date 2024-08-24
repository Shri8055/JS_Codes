// referance to object 
// suppose u want to use declared varibles then use "THIS" method.

// in person1 'this' is used
const person1 = {
    firstName: "Shrinivas",
    lastName: "Kangralkar",
    favfood: "Biryani",
    sayHello: function(){console.log(`Hello I'm ${this.firstName} ${this.lastName}`)},
    fav: function(){console.log(`My favourite food is: ${this.favfood}`)},
}
// in person2 object name is used
const person2 = {
    firstName: "Arjun",
    lastName: "Gujar",
    favfood: "Burger",
    sayHello: function(){console.log(`Hello I'm ${person2.firstName} ${person2.lastName}`)},
    fav: function(){console.log(`My favourite food is: ${person2.favfood}`)},
}

person1.sayHello();
person1.fav();

person2.sayHello();
person2.fav();