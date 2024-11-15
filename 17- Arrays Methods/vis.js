// toString()

const cars = ["Benz", "BMW", "Audi", "Mercedes", "Toyota"];
const vis1 = cars.toString();

console.log(cars);
console.log(vis1);
console.log(typeof cars);
console.log(typeof vis1);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// join()

const years = [1999 , 2000 , 2001 , 2002 , 2003 , 2004];
const vis2 = years.join(" | ");

console.log(vis2);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// pop()

console.log(years.pop());

const vis3 = years.pop();

console.log(years);
console.log(vis3);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// push()

years.push(2003);
console.log(years);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// shift()

console.log(years.shift());
console.log(years);
console.log(years[0]);


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// unshift()

cars.unshift("Tesla");

console.log(cars);
console.log(cars[0]);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// adding an element to the end of the array without using push()

cars[cars.length] = "Ford";

console.log(cars);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// concat()

const cartoons = ["Gumball" , "Ben 10" , "Shrek" , "Madagascar"];
const games = ["GTA" , "COD" , "DMC" , "PES"];
let vis4 = cartoons.concat(games);

console.log(vis4);

const friends = ["Darren" , "Ken" , "Robert" , "Sandra"];
const names = friends.concat("John");

console.log(names);

let vis5 = cartoons.concat(games , names);

console.log(vis5);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// splice()

names.splice(3 , 0 , "Danny" , "Mary");

console.log(names);

names.splice(2 , 1);

console.log(names);

names.splice(4 , 1 , "David");

console.log(names);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// slice()

const colors = ["Red" , "Blue" , "Green" , "Yellow" , "Black" , "White" , "Pink"];
const vis6 = colors.slice(2);
const vis7 = colors.slice(3 , 4);
const vis8 = colors.slice();

console.log(vis6);
console.log(vis7);
console.log(vis8);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// sort()

const nums = [10 , 20 , 30 , 40 , 50 , 60 , 70 , 80 , 90];

console.log(colors.sort());
console.log(nums.sort());

console.log(colors.reverse());
console.log(nums.reverse());