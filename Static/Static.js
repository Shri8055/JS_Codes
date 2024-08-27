// static declared in class to be accissable to only that class
class user{
    // static declaration
    static userCount=0;
    constructor(uname){
        this.uname=uname;
        user.userCount++;
    }
    sayHello(){
        console.log(`My name is: ${this.uname}`);
    }
}
const user1=new user("Shrinivas");
const user2=new user("Ashish");
const user3=new user("Shivam");
const user4=new user("Eshan");
const user5=new user("Vedu");
user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();
user5.sayHello();
// user1 object can't access user count as it is only related to class user
console.log(user1.userCount);
// here only class can access it
console.log(user.userCount);