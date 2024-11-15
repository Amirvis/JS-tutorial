// forEach method accepts a callback function and executes it on each element in an array

const randomNumbers = [19 , 50 , 94 , 10 , 63 , 5 , 41 , 11 , 70 , 85 , 100 , 6]

randomNumbers.forEach(function(num) {
    console.log(num / 2);
})

// ----------------------------------------------------------------------

function doubleNumber(num) {
    console.log(num * 2);
}

randomNumbers.forEach(doubleNumber);

// ----------------------------------------------------------------------

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

for (let person of people) {
    console.log(person.name);
} // prints all the names

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
} // prints all the names

people.forEach(function(person) {
    console.log(person.name);
}) // prints all the names

people.forEach(function(person , index) {
    console.log(person.lastName , index);
}) // prints all the lastNames and index of each person