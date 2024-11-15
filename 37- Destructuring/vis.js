// destructuring in arrays

// old way:

const person1 = ['Andrew', 'Jackson' , 25];
const name1 = person1[0];
const lastName1 = person1[1];
const age1 = person1[2];

// by destructuring:

const [name2, lastName2, age2] = person1;

console.log(name2, lastName2, age2);

// pay attention to the order

const [lastName3 , name3, age3] = person1;

console.log(name3 , lastName3 , age3);

// if we wanna skip a value then we put a comma and leave the variable empty

const [name4 , , age4] = person1;

console.log(name4 , age4);

// let's use spread operator in destructuring

const person2 = ['Kevin' , 'Davis' , 30 , 'Teacher' , 'New York'];
const [name5 , ...rest] = person2;

console.log(name5);
console.log(rest);

// ----------------------------------------------------------------------

// destructuring in objects

// old way:

const car = {
    brand1: 'BMW',
    model1: '430 i',
    year1: 2014,
    color1: 'black'
}
let brand2 = car.brand1;
let model2 = car.model1;
let year2 = car.year1;
let color2 = car.color1;

// by destructuring:

const {color1,year1,family} = car;

console.log(year1); // 2014
console.log(color1); // black
console.log(family); // undefined

const {brand1: label , color1: hue , family: lastName} = car;

console.log(label); // BMW
console.log(hue); // black
console.log(lastName); // undefined

// let's use spread operator

const {brand1 , ...others} = car;

console.log(others);
console.log(brand1);

// ----------------------------------------------------------------------

// destructuring in functions - 1

const person3 = ['Tracy' , 'Winslet' , 23 , 'Novelist' , 'London'];
const showInfo1 = ([namePerson, lastNamePerson, agePerson, jobPerson, cityPerson]) => {
    console.log(`name: ${namePerson}, lastname: ${lastNamePerson}, age: ${agePerson}, job: ${jobPerson}, city: ${cityPerson}`);
}

showInfo1(person3);

// pay attention to the order

const showInfo2 = ([lastNamePerson, agePerson, jobPerson, cityPerson]) => {
    console.log(`lastname: ${lastNamePerson}, age: ${agePerson}, job: ${jobPerson}, city: ${cityPerson}`);
}

showInfo2(person3); // this wouldn't be in order

// to skip a value then we put a comma and leave the variable empty

const showInfo3 = ([, lastNamePerson, agePerson, jobPerson, cityPerson]) => {
    console.log(`lastname: ${lastNamePerson}, age: ${agePerson}, job: ${jobPerson}, city: ${cityPerson}`);
}

showInfo3(person3);

// ----------------------------------------------------------------------

// destructuring in functions - 2

const person4 = {
    name: 'Helen',
    lastname: 'Paul',
    age: 25,
    job: 'Developer',
    location: 'USA'
}
const showInfo4 = ({name, lastname, age, job, location}) => {
    console.log(`name: ${name}, lastname: ${lastname}, age: ${age}, job: ${job}, location: ${location}`);
}

showInfo4(person4);

const showInfo5 = ({name: myName, lastname: myLastName, age: myAge, job: myJob, location: myLocation, city = "Texas"}) => {
    console.log(`name: ${myName}, lastname: ${myLastName}, age: ${myAge}, job: ${myJob}, location: ${myLocation}, city: ${city}`);
}

showInfo5(person4);