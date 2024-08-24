// inheritance means giving properties to another class like parent->child, can be done when child class extends parent class
// helps in code reusablity
class Animal{
    isAlive=true;
    eat(){
        console.log(`This ${this.name} can eat`);
    }
    sleep(){
        console.log(`This ${this.name} can sleep`);
    }
}
// class rabbit inherits properties of class Animal
class Rabbit extends Animal{
    name="Rabbit";
    run(){
        console.log(`This ${this.name} can run`);
    }
}
// class Fish inherits properties of class Animal
class Fish extends Animal{
    name="Fish";
    swim(){
        console.log(`This ${this.name} can swim`);
    }
}
// class Falcon inherits properties of class Animal
class Falcon extends Animal{
    name="Falcon";
    fly(){
        console.log(`This ${this.name} can fly`);
    }
}
const rabbit=new Rabbit();
const fish=new Fish();
const falcon=new Falcon();
console.log(rabbit.isAlive);

rabbit.eat();
rabbit.sleep();
rabbit.run();
fish.eat();
fish.sleep();
fish.swim();
falcon.eat();
falcon.sleep();
falcon.fly();