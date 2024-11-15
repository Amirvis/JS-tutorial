// for-in loop is mostly used for objects

const car = {
    name: 'Benz',
    color: 'black',
    year: 1972,
    model: "S-class"
}

for (let sub in car) {
    console.log(sub);
}

for (let sub in car) {
    console.log(car[sub]);
}

// but also it can be used for arrays too

let cars = ["Benz", "BMW", "Audi", "Mercedes", "Toyota"];

for (let sub in cars) {
    console.log(sub);
} // 0 1 2 3 4

for (let sub in cars) {
    console.log(cars[sub]);
} // Benz BMW Audi Mercedes Toyota