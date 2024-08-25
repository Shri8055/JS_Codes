const fruits = [{name:"apple",color:"red",calories:35},
                {name:"banana",color:"yellow",calories:95},
                {name:"orange",color:"orange",calories:75},
                {name:"pineapple",color:"yellow",calories:65},
                {name:"kiwi",color:"green",calories:135}];


console.log(`Fruit: `,fruits[0].name);
console.log(`Color: `,fruits[0].color);
console.log(`Calories: `,fruits[0].calories);

console.log(`Fruit: `,fruits[1].name);
console.log(`Color: `,fruits[1].color);
console.log(`Calories: `,fruits[1].calories);

console.log(`Fruit: `,fruits[2].name);
console.log(`Color: `,fruits[2].color);
console.log(`Calories: `,fruits[2].calories);

console.log(`Fruit: `,fruits[3].name);
console.log(`Color: `,fruits[3].color);
console.log(`Calories: `,fruits[3].calories);

console.log(`Fruit: `,fruits[4].name);
console.log(`Color: `,fruits[4].color);
console.log(`Calories: `,fruits[4].calories);

// adding new object in object
fruits.push({name:"Grapes",color:"green",calories:20});

console.log(`Fruit: `,fruits[5].name);
console.log(`Color: `,fruits[5].color);
console.log(`Calories: `,fruits[5].calories);

console.log(fruits);

// deleting last object
fruits.pop();
console.log(fruits);

// forEach
fruits.forEach(fruit=>console.log(fruit.name));
fruits.forEach(fruit=>console.log(fruit.color));
fruits.forEach(fruit=>console.log(fruit.calories));