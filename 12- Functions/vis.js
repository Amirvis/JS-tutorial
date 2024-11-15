// simple function

function showMyName() {
    console.log("My name is Dilan");
}

showMyName();

// function with parameter and argument

function showInfo(name , age) {
    console.log(`My name is ${name} and I am ${age} years old`);
}

showInfo("Dilan",20);

// function with return

function sum(a,b) {
    return a + b;
}

console.log(sum(1,2));

// ----------------------------------------------------------------------

function showAge(age) {
    return `Dave is ${age} years old`
}

const daveAge = showAge(20);

console.log(daveAge);

// ----------------------------------------------------------------------

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(convertToCelsius(60));
console.log(convertToCelsius(14));
console.log(convertToCelsius(34));
console.log(convertToCelsius(10));
console.log(convertToCelsius(44));