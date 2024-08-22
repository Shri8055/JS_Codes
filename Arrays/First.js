let fruits=["apple","orange","banana"];
// method 1
console.log("Method 1");
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// method 2
console.log("Method 2");
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// built-in functions
fruits[3]="coconut";

console.log("4th item added");
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log('adding item @ last');
fruits.push("mango"); // adding new item at end of array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log('Deleting last item');
fruits.pop(); // deleting last item from array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log('Adding item @ start');
fruits.unshift("mango"); // adding item @ start of array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("Deleting item at start of array");
fruits.shift(); // deleting item @ start of array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("Find index of item");
let index=fruits.indexOf("apple"); // finding index of item in array
console.log("index @ apple is present is: ",index);

console.log("Array in Alphabetical order");
fruits.sort(); // sorting in array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("Array in Alphabetical reverse order");
fruits.sort().reverse(); // reverse sorting in array
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("For loop new method");
fruits.sort(); // sorting in array
for(let fruit of fruits){
    console.log(fruit);
}