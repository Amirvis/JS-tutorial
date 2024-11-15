// for-of loop is being supported by all the browsers except IE

let cars = ["Benz", "BMW", "Audi", "Mercedes", "Toyota"];

// normal for loop

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// ----------------------------------------------------------------------

// for of loop

for (let car of cars) {
    console.log(car);
}

// ----------------------------------------------------------------------

for (let sub of "Amirvis") {
    console.log(sub);
}

// or:

let name = "Amirvis";

for (let sub of name) {
    console.log(sub);
}

// ----------------------------------------------------------------------

const vehicle = {
    name: 'Benz',
    color: 'black',
    year: 1972,
    model: "S-class"
}

console.log(Object.keys(vehicle));
console.log(Object.values(vehicle));

for (let key of Object.keys(vehicle)) {
    console.log(key);
}

for (let value of Object.values(vehicle)) {
    console.log(value);
}

// for printing both keys and values:

for (let sub of Object.keys(vehicle)) {
    console.log(sub , vehicle[sub]);
}