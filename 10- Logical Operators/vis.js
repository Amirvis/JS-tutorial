// logical operators: && == and , || == or , ! == not

// ----------------------------------------------------------------------

// or(||)
// if one side is true then the output is true

console.log(true || false);
console.log(false || true);
console.log(true || true);

// but if all sides are false then the output is false

console.log(false || false);

// example:

let hour = 11;
let day = 'saturday';

if (hour <= 9 || hour >= 18 || day == 'saturday') {
    console.log('the store is closed');
} else {
    console.log('the store is open');
}

// ----------------------------------------------------------------------

// and(&&)
// if one side is false then the output is false

console.log(true && false);
console.log(false && true);
console.log(false && false);

// but if all sides are true then the output is true

console.log(true && true);

// example:

let age1 = 18;
let country1 = 'egypt';

if (age1 >= 18 && country1 == 'egypt') {
    console.log('you can vote');
}

// ----------------------------------------------------------------------

// not(!)
// if the output is true ! will make it false

console.log(!true);

// if the output is false ! will make it true

console.log(!false);

// != and !==: != refrences to not being equal but !== also checks the data types

console.log(1 != "1");
console.log(1 !== "1");

// example:

let age2 = 19;
let country2 = 'turkey';

if (age2 >= 18 && country2 != 'turkey') {
    console.log("you can't vote");
} else {
    console.log('you can vote');
}