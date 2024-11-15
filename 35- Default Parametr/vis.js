// JavaScript detects the parameters which aren't defined and valuate them as undefined

function myFn1(x , y){
    return x + y
}

console.log(myFn1(2)); // we'll get a NaN(not a number) on console, cause other parameter is undefined

// ----------------------------------------------------------------------

function myFn2(x , y){
    if (y === undefined){
        y = 6
    }
    return x + y
}

console.log(myFn2(2));

// ----------------------------------------------------------------------

// there's a better way to do this; we can set a default value for the parameter

function myFn3(x , y = 10){
    return x + y
}

console.log(myFn3(2));
console.log(myFn3(2, 20)); // we can override the default value

// ----------------------------------------------------------------------

// another example:

function myFn4(person , greeting = "Hello"){
    return `${greeting} ${person}`
}

console.log(myFn4("Louis"));
console.log(myFn4("Louis", "Bonjour"));