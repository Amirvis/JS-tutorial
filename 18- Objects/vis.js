const car = {
    name: 'Benz',
    color: ['black', 'white'],
    year: 1972,
    model: "S-class"
}

console.log(car);
console.log(car.name);
console.log(car['name']);
console.log(car.color[1]);


// now we should use wich way to access the properties of the object?

const colorSet = 'color';

console.log(car[colorSet]); // this code will work as well
console.log(car.colorSet); // this code won't work as we want

// ----------------------------------------------------------------------

// method

let person1 = {
    name: 'Sam',
    age: 25,
    city: 'New York',
    job: 'Developer',
    hobbies: ['reading', 'traveling', 'photography'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    },
    sayHello: function() {
        let result = "Hello this is Sam"
        return result
    }
}

console.log(person1.sayHello());
console.log(person1['sayHello']());

// ----------------------------------------------------------------------

// "this" keyword equals to the object itself

let person2 = {
    name: 'Amy',
    age: 20,
    city: 'Los Angeles',
    job: 'Designer',
    hobbies: ['painting', 'cooking', 'dancing'],
    address: {
        street: '456 Elm St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001'
    },
    sayHello: function() {
        let result = `Hello this is ${this.name} and I am ${this['age']} years old`
        return result
    }
}

console.log(person2.sayHello());
console.log(person2['sayHello']); // if I don't put () at the end, it will return the function itself