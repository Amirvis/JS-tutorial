// map method is used to make changes on each element of the arrays by using a function

const randomNumbers = [19 , 50 , 94 , 10 , 63 , 5 , 41 , 11 , 70 , 85 , 100 , 6]
const numberChanged = randomNumbers.map(function(number) {
    return number * 3
})

console.log(randomNumbers);
console.log(numberChanged);

const evenNumber = randomNumbers.map(function(e) {
    return {
        number: e,
        isEven: e % 2 == 0
    }
})

console.log(evenNumber);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let cars = ["Benz", "BMW", "Audi", "Mercedes", "Toyota"];
const carsNamesUpperCase = cars.map((car) => car.toUpperCase());

console.log(carsNamesUpperCase);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

const people = [
    {
        name: 'John',
        lastName: 'Angel',
        age: 25
    },
    {
        name: 'Samuel',
        lastName: 'Perez',
        age: 30
    },
    {
        name: 'Brian',
        lastName: 'Rivera',
        age: 16
    },
    {
        name: 'Zack',
        lastName: 'Yu',
        age: 44
    },
    {
        name: 'Rose',
        lastName: 'Williams',
        age: 22
    }
]

const peopleNames = people.map((person) => person.name.toUpperCase());

console.log(peopleNames);