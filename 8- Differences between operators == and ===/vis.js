let age = 15;

// we'll talk about "if" statement in the next lesson, don't worry!

if (age == 15) {
    console.log("Jake is 15 years old");
}

if (age == "15") {
    console.log("Emilie is 15 years old");
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

if (age === 15) {
    console.log("Rick is 15 years old");
}

if (age === "15") {
    console.log("Ron is 15 years old");
}

/* === is more strict than ==,
We won't see Ron's message because === also checks for data types */

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

if (age === 15) {
    console.log("Number");
}

// "age === 15" returns a boolean: true