let x = 5;
let y = 10;

let a1 = x + y;  // Addition
console.log(a1);

let b1 = x - y;  // Subtraction
console.log(b1);

let c1 = x * y;  // Multiplication
console.log(c1);

let d1 = x / y;  // Division
console.log(d1);

let a2 = x % y;  // Modulus
console.log(a2);

let b2 = x++;  // Increment
console.log(b2);

let c2 = x--;  // Decrement
console.log(c2);

let d2 = x ** y;  // Exponentiation
console.log(d2);

// ----------------------------------------------------------------------

let e = 5;
e += 10; // ===> e = e + 10;
console.log(e);

let f = 5;
f -= 10; // ===> f = f - 10;
console.log(f);

let g = 5;
g *= 10; // ===> g = g * 10;
console.log(g);

let h = 5;
h /= 10; // ===> h = h / 10;
console.log(h);

let i = 5;
i %= 10; // ===> i = i % 10;
console.log(i);

// ----------------------------------------------------------------------

let lastName = "Doe";
let firstName = "John";

let fullName = firstName + " " + lastName;
console.log(fullName);

firstName += " " + lastName;
console.log(firstName);

lastName += " John";
console.log(lastName);

// ----------------------------------------------------------------------

let sum1 = 100 + 50;
let sum2 = "10" + 10;
let sum3 = "Sam" + 10;

console.log(sum1);
console.log(sum2);
console.log(sum3);

console.log(typeof sum1);
console.log(typeof sum2);
console.log(typeof sum3);

// ----------------------------------------------------------------------

let j = 5;

j++;
console.log(j);

j--;
console.log(j);

// ----------------------------------------------------------------------

const nowYear = 2024;
const annieBirthYear = 2005;
const kevinBirthYear = 2003;

const annieAge = nowYear - annieBirthYear;
const kevinAge = nowYear - kevinBirthYear;

console.log(annieAge);
console.log(kevinAge);

console.log(annieAge > kevinAge);
console.log(kevinBirthYear < annieBirthYear);

let k = 5;
let l = 5;

console.log(k > l);
console.log(k >= l);