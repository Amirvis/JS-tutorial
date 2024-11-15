// first the function "two" and then "one" are called

function one() {
    setTimeout(() => {
        console.log("One");
    }, 3000);
}

function two() {
    console.log("Two");
}

one();
two();

// to solve this we use the callback function

function goTo(place, callback) {
    setTimeout(() => {
        console.log(`I'm going to ${place}`);
        callback();
    }, 3000);
}

function messageEnd() {
    console.log("I'm done");
}

goTo("Paris", messageEnd);