// "..." is an operator called spread

const myName = ['my' , 'name' , 'is' , 'Fred'];

console.log(myName);
console.log(...myName);

// ----------------------------------------------------------------------

// we can use spread operator to copy an array

const numbers1 = [1,2,3,4,5];
const numbers2 = [...numbers1,6,7,8,9,10];

console.log(numbers2);

// ----------------------------------------------------------------------

const numbers3 = ['one' , 'two' , 'three'];
const numbers4 = [...numbers3 ,'four' , 'five' , 'six'];

console.log(numbers4);

// ----------------------------------------------------------------------

let numbers5 = [1,2,3,4,5];
let numbers6 = numbers5;
numbers5.push(6);

console.log(numbers5);
console.log(numbers6); // what we changed in numbers5 will be changed in numbers6 as you can see

// ----------------------------------------------------------------------

// by using spread operator we can edit the original array without changing the copy

let numbers7 = [1,2,3,4,5];
let numbers8 = [...numbers7];
numbers7.push(6);

console.log(numbers7);
console.log(numbers8);

// ----------------------------------------------------------------------

// we can use spread operator in objects too

const janeInfo1 = {
    name: 'jane',
    age: 20,
    job: 'Designer'
}
const janeInfo2 = {
    lastName: 'Smith',
    gender: 'female'
}
const janeInfo = {
    ...janeInfo1,
    ...janeInfo2
}

console.log(janeInfo);

// ----------------------------------------------------------------------

// we can use spread operator in functions too

const num1 = function(args){
    console.log(args);
}
num1(1,2,3,4,5); // it will print only 1

// but if we use spread operator as a parameter it will print all the numbers

const num2 = function(...args){
    console.log(args);
}
num2(1,2,3,4,5); // it will print all the numbers

// ----------------------------------------------------------------------

// another example:

const things = function(...args){
    console.log(args);
}
things(2 , 5 , true , 'JavaScript' , undefined);

// ----------------------------------------------------------------------

function sumNumbers(a,b,c){
    console.log(a + b + c);
}

const nums1 = [1,2,3];
const nums2 = [1,2,3,4,5,6,7]

sumNumbers(...nums1);
sumNumbers(...nums2); // both of them will print 6