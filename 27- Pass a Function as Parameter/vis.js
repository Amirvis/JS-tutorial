function sayHello(func) {
    func()
    func()
    func()
    func()
    func()
}

function world() {
    console.log("Hello World!");
}

sayHello(world) // don't put () end of world if you wanna use it as a parameter

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// for example:

function sayHelloRepeat(num, func) {
    for (let i = 0; i < num; i++) {
        func();
    }
}

function sentence() {
    console.log("Hello JavaScript!");
}

sayHelloRepeat(10, sentence)