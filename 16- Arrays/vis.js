let car1 = "Benz";
let car2 = "BMW";
let car3 = "Audi";
let car4 = "Mercedes";
let car5 = "Toyota";

// we can store all these values in a single variable

let cars = ["Benz", "BMW", "Audi", "Mercedes", "Toyota"];

console.log(cars);

// we can access the elements of an array by using index

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);

console.log(cars.length);

// another way to define an array

const friends = new Array("Darren" , "Ken" , "Robert" , "Sandra");

console.log(friends);
console.log(friends[3]);

// array data type is an object(we'll learn about objects later)

console.log(typeof cars);

// in array we can store any data type

let mix = ["Benz", 123, true, null, undefined];

console.log(mix);

// ----------------------------------------------------------------------

// we can change the value of an array even if it's defined by const

const years = [1999 , 2000 - 100 , 2001 , 2002 , 2003 , 2004];
years[3] = 2005;

console.log(years);
console.log(years[1]);

// we can put an array inside an array too

const age = 10
const darwin = ["Darwin" , "Watterson" , age , "Elmore" , friends /*an array inside another array*/ ];

console.log(darwin);
console.log(darwin[4]);

// we also can access the elements of an array inside an array

console.log(darwin[4][2]);
console.log(darwin[4][3]);