console.log("I love JS");
console.log("I love JS");
console.log("I love JS");
console.log("I love JS");
console.log("I love JS");
console.log("I love JS");
console.log("I love JS");
console.log("I love JS");
console.log("I love JS");
console.log("I love JS");

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// to repeat the actions again and again we use loops

// for loop

for (let i = 0; i <= 9; i++) {
    console.log("I love JavaScript");
}

const a = 10;
let j = 1
for (j; j <= a; j++) {
    console.log("I love JS " + j);
}

// if we initialize i or j with const then we wouldn't be able to change their value, and we'll get an error

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

const colors = ["Red" , "Blue" , "Green" , "Yellow" , "Black" , "White" , "Pink"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// to sum up code above:

const c = colors.length;
let i = 0;
for (; i < c;) {
    console.log(colors[i] + " " + i);
    i++
}