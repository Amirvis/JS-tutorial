// filter method returns all the values of the array that matches the condition

const randomNumbers = [19 , 50 , 94 , 10 , 63 , 5 , 41 , 11 , 70 , 85 , 100 , 6]
const foundNumbers = randomNumbers.filter(function(num){
    return num > 40
})

console.log(foundNumbers);

const evenNumbers = randomNumbers.filter(function(num){
    return num % 2 == 0
})

console.log(evenNumbers);

const oddNumbers = randomNumbers.filter(function(num){
    return num % 2 == 1
})

console.log(oddNumbers);

// find method would return only 19

// ----------------------------------------------------------------------

const people = [
    {
        name: 'John',
        lastName: 'Angel',
        age: 25
    },
    {
        name: 'Samuel',
        lastName: 'Willez',
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

const peopleAge = people.filter(function(person){
    return person.age > 28
})

console.log(peopleAge);

const peopleName = people.filter(function(person){
    return person.lastName.includes('Will')
})

console.log(peopleName);