for (let a = 0; a <= 10; a++) {
    if (a == 5 ) {
        break;
    }
    console.log(a);
}

for (let b = 0; b <= 10; b++) {
    console.log(b);
    if (b == 5 ) {
        break;
    }
} // here 5 will be printed

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// even numbers

for (let c = 1; c <= 100; c++) {
    if (c % 2 == 0) {
        console.log(c);
    }
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// maximum number

var randomNumbers = [26 , 60 , 13 , 94 , 8 , -11 , 71 , 22 , 59 , 33 , 5 , 100 , 14];
let maximum = 0;

for (let d = 0; d < randomNumbers.length; d++) {
    if (randomNumbers[d] > maximum) {
        maximum = randomNumbers[d];
    }
}

console.log(maximum);

// minimum number

let minimum = randomNumbers[0];

for (let e = 0; e < randomNumbers.length; e++) {
    if (randomNumbers[e] < minimum) {
        minimum = randomNumbers[e];
    }
}

console.log(minimum);