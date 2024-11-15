// find method returns the first value of the array that matches the condition

const randomNumbers = [19 , 50 , 94 , 10 , 63 , 5 , 41 , 11 , 70 , 85 , 100 , 6]
const foundNumber = randomNumbers.find(number => number > 55)

console.log(foundNumber);

// ----------------------------------------------------------------------

const randomWords = ["Red" , "Yellow" , "Blue" , "Black" , "Blueberry" , "White"];
const foundColor = randomWords.find(function(word){
    return word.includes("Blue")
});

console.log(foundColor);

// ----------------------------------------------------------------------

// includes()

console.log(randomNumbers.includes(115)); // returns false, cause there's no 115 in the array

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

const userAge = people.find(person => person.age < 20)

console.log(userAge);
