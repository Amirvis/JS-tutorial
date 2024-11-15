{
    // this is a block scope
    let a = 10;
    const b = 20;
    var c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
    
}

// console.log(a); we'll get an error
// console.log(b); we'll get an error
console.log(c); // with var we can access it

// ----------------------------------------------------------------------

// In the function scope, we do not have access to any of the variables outside the function, even var

function sayHello() {
    var msg = "Hello JavaScript!";
}

sayHello();
// console.log(msg); we'll get an error

// ----------------------------------------------------------------------

let age1 = 20;

if (age1 > 18) {
    let msg = "You are an adult!";
}

// console.log(msg); if we wanna access it then we should change let to var

let age2 = 20;

if (age2 > 18) {
    var msg = "You can take driver license";
}

console.log(msg);

// ----------------------------------------------------------------------

const cars = ["Benz", "BMW", "Audi", "Mercedes", "Toyota"];

for (let i = 0; i < cars.length; i++) {
    console.log(i , cars[i]);
}

// console.log(i); we'll get an error cause it's defined with let

for (var j = 0; j < cars.length; j++) {
    console.log(j , cars[j]);
}

console.log(j);

// ----------------------------------------------------------------------
let x = 10;

for (let x = 0; x < cars.length; x++) {
    console.log(x , cars[x]);
}

console.log(x); // 10; we defined 2 different variables with the same name

// ----------------------------------------------------------------------

let y = 10;

for (y = 0; y < cars.length; y++) {
    console.log(y , cars[y]);
}

console.log(y); // 5; we replaced the value of y with 0 in the for loop

// ----------------------------------------------------------------------

var z = 10;

for (var z = 0; z < cars.length; z++) {
    console.log(z , cars[z]);
}

console.log(z); // 5; this is the difference between var and let