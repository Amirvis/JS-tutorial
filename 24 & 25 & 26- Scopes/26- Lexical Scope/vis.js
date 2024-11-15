function outerFn1() {
    let country = 'Germany';
    function innerFn1() {
        let state = 'Berlin';
        console.log(country);
    }
    innerFn1();
    // console.log(state); we can't access state here
}

outerFn1();

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

function outerFn2() {
    let country = 'Italy';
    function innerFn2() {
        let country = 'India';
        console.log(country);
    }
    innerFn2();
    console.log(country);
}

outerFn2();