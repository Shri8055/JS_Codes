class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    display(){
        console.log(`Product is : ${this.name}`);
        console.log(`Price is : $ ${this.price.toFixed(2)}`);        
    }
    salesTax(saleTax){
        return this.price+(this.price*saleTax)
    }
}
const TaxPer=0.05;
const product1 = new Product("Shirt",9.50);
const product2 = new Product("Pants",19.50);
const product3 = new Product("Boots",15.00);
product1.display();
product2.display();
product3.display();
let total=product1.salesTax(TaxPer);
console.log(`Total cost of Product 1 is: ${total}`);