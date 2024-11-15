// syntax

function functionDeclaration() {
    return "a declaration function";
}

let functionExpression = function () {
    return "an expression function";
}

// ----------------------------------------------------------------------

// difference between declaration and expression function

// in declaration function we can call the function before the function

console.log(add1(5,9));

function add1(x, y) {
    return x + y;
}

// in expression function we have to call the function after the function

let add2 = function (x, y) {
    return x + y;
}

console.log(add2(7,8));
