// sort can be done in lexicographical order not alphabetical
// lexicographical = alphabets,numbers,symbols as strings
let fruits=['apple','coconut','grapes','banana'];
console.log(fruits);
fruits.sort();
console.log("\nSorting by lexicographical",fruits);

let num=[1,10,2,4,9,7,5,3,6,8];
// before sort
console.log(num);
num.sort();
// after sort but not get valid output because sorted by lexicographical
console.log(num);

// custom comparision function
num.sort((a,b)=>a-b);
console.log("Sorting",num);

// to reverse sort
num.sort((a,b)=>b-a);
console.log("Sorting reverse",num);

const people=[{name:"Shrinivas",age:31,gpa:8},
              {name:"Arjun",age:29,gpa:6},
              {name:"Deepak",age:27,gpa:7},
              {name:"Vedant",age:25,gpa:5} ];
// sorting by age
people.sort((a,b)=>a.age-b.age);
console.log("Sorting by age",people);

// sorting by gpa
people.sort((a,b)=>a.gpa-b.gpa);
console.log("Sorting by gpa",people);

// sorting by name
people.sort((a,b)=>a.name.localeCompare(b.name));
console.log("Sorting by name",people);