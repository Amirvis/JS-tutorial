function sayHi() {
    return function () {
        console.log('Hi');
    }
}

sayHi()(); // it works but not recommended

const myFn = sayHi();
myFn(); // recommended

console.log(myFn); // it returns structure of the function

// ----------------------------------------------------------------------

// example:

function testFbs(x) {
    return function (numFbs) {
        if (numFbs <= x) {
            console.log("Normal");
        } else {
            console.log("Danger");
        }
    }
}

const myFbs = testFbs(100); // "x" comes here as an argument
myFbs(112); // "numFbs" comes here as an argument