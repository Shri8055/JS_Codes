function car(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive=function(){console.log(`You drive ${this.model}`)}
}
const car1 = new car("Suzuki","G-WagonRR",2016,"White");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

const car2 = new car("Mahindra","XUV-500",2016,"Gray");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();