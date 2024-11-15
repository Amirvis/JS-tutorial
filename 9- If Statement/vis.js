let age = 17;

if (age >= 18) {
    console.log("You can take driving licence");
} else {
    console.log("You can't take driving licencer");
}

/* if condition is true, the code inside the if block will be executed;
if condition is false, the code inside the else block will be executed. */

// ----------------------------------------------------------------------

const book = "History";
let result;

if (book == "Mathmatics") {
    result = "this book is about Mathmatics";
} else if (book == "Economics") {
    result = "this book is about Economics"
} else if (book == "History") {
    result = "this book is about History"
} else {
    result = "this book is about something else"
}

console.log(result);

// you can change the value of book and see the result