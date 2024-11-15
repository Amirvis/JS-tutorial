// to define a class in Jvascript:

class Animal {
    constructor(name , color) {  // we can use parameters in the constructor
        this.name = name;  // constructor is a method that is called when a new object is created
        this.color = color;  // "this" keyword refers to the current object
    }
    eat() {  // we can make methods in the class
        console.log(`${this.name} is eating`);
    }
    animalInfo() {
        console.log(`Animal's name is ${this.name} and it's ${this.color}`);
    }
}

const monkey = new Animal('Jimmy' , "Brown");
monkey.eat();
monkey.animalInfo();

// if we don't initialize the second argument, it will be undefined as you can see in the console

const dog = new Animal('Rover');
dog.eat();
dog.animalInfo();

// ----------------------------------------------------------------------

// by inheritance we can make a new class that inherits all the methods and properties from another class

class Cat extends Animal {
    constructor(name , breed , color) {
        super(name,color);  // super keyword is used to call the parent class constructor
        this.breed = breed;
    }
    sound() {
        console.log(`${this.name} Meows`);
    }
}

const myCat = new Cat('Tom' , 'British', 'Gray');
myCat.sound();
myCat.eat();
myCat.animalInfo();
console.log(myCat.breed);