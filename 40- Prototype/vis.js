// prototype is a property of a class that is used to add new properties and methods to the class

class Animal {
    constructor(name , color) {
        this.name = name;
        this.color = color;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    animalInfo() {
        console.log(`Animal's name is ${this.name} and it's ${this.color}`);
    }
}

Animal.prototype.sleep = function() {
    console.log(`${this.name} is sleeping`);
}
Animal.prototype.isDog = true;

const myDog = new Animal('Rex' , 'Black')

myDog.sleep();
console.log(myDog.isDog);

console.log(Animal.prototype);