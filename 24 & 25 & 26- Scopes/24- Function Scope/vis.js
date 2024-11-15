function person1() {
    let myName = "John";
    const myAge = 25;
    var myJob = "Nurse";
}

// console.log(myName); We'll get an error because myName isn't a global variable

function person2() {
    let myName = "Brian";
    const myAge = 32;
    var myJob = "Teacher";
}

// console.log(myAge); Error, cause myAge is in a function scope and we can't call it from outside the scope

function person3() {
    let myName = "Jane";
    const myAge = 28;
    var myJob = "Chef";
    console.log(myAge);
}

function person4() {
    let myName = "Mary";
    const myAge = 22;
    var myJob = "actress";
    console.log(myAge);
}

// Although variables' names are the same, but they're different cause they're not inside the same scopes

person3();
person4();

// ----------------------------------------------------------------------

let msg = "Hello World!";

function sayHello() {
    let msg = "Hello JavaScript!";
    console.log(msg);
}

console.log(msg); // this code will print "Hello World!", because we called the global variable of msg

sayHello(); // this code will print "Hello JavaScript!", because we called the local variable of msg