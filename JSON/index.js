const names=["Shrinivas","Arjun","Deepak","Aarya","Vedant","Yash"];
const jsonNames=JSON.stringify(names);

// OBJECTS TO STRING
// JSON elements before converting to string
console.log(names);
// JSON elements after converting to string
console.log(jsonNames);

// STRING TO OBJECTS
const JSONperson=`{"name":"Shrinivas","age":21,"isEmployd":true,"hobbies":["Bike Riding","Outdoor Games","Car Enthusiastic"]}`;
// JSON elements before converting to objects
const parseData=JSON.parse(JSONperson);
// JSON elements before converting to object
console.log(JSONperson);
// JSON elements after converting to object
console.log(parseData);