// here we got a function:

function myDetails1 (myAge , mySalary) {
    const myNewAge = myAge + 3;
    const myNewSalary = mySalary + 200;
    const result = `I'm ${myNewAge} years old and my salary is ${myNewSalary}`;
    return result;
}

console.log(myDetails1(25, 2000));

// and now we write the function above by using functions:

function ageFn(newAge) {
    const myNewAge = newAge + 3;
    return myNewAge;
}

function salaryFn(newSalary) {
    const myNewSalary = newSalary + 200;
    return myNewSalary;
}

function myDetails2 (myAge , mySalary) {
    const myNewAge = ageFn(myAge);
    const myNewSalary = salaryFn(mySalary);
    const result = `I'm ${myNewAge} years old and my salary is ${myNewSalary}`;
    return result;
}

console.log(myDetails2(19, 700));