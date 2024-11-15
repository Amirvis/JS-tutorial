const age = (birthYear) => {
    return 2024 - birthYear;
}

console.log(age(1998));

const jamesAge = age(2000);

console.log(jamesAge);

// to sum up arrow function above:

let birth = birthYear => 2024 - birthYear;

console.log(birth(2005));

// ----------------------------------------------------------------------

let add1 = (a, b) => {
    return a + b;
}
let sum1 = add1(2, 3);

console.log(sum1);

// to sum up arrow function above:

let add2 = (a, b) => a + b;
let sum2 = add2(5 , 6);

console.log(sum2);