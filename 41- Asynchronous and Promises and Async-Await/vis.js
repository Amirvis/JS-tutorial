// comment the codes of above and below the each section you wanna run and test

// this is a synchronous program

console.log('One');
console.log('Two');
for (let i = 0; i < 20; i++) {
    console.log(i);
}
console.log('Three');

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// this is an asynchronous program

console.log('One');
console.log('Two');
setTimeout(() => {
    console.log("I'll be printed after 3 seconds");
}, 3000);
console.log('Three');

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Promise

let promise1 = new Promise(function(resolve, reject){
    let word1 = "JavaScript";
    let word2 = "Python";
    if(word1 === word2) {
           resolve();
    } else {
        reject();
    }
});

promise1.then(function(){
    console.log('success');
},function(){
    console.log('error');
})

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// use catch to handle errors

let promise2 = new Promise(function(resolve, reject){
    let randomNumber = Math.random();
    console.log("the random number is " + randomNumber);
    if(randomNumber > 0.5) {
        resolve(`It's greater than 0.5`);
    } else {
        reject(`It's smaller than 0.5`);
    }
});

promise2.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Async / Await

function getUser(userId) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            const users = [
                {id: 1, name: 'John'},
                {id: 2, name: 'Jane'},
                {id: 3, name: 'Bob'},
                {id: 4, name: 'Alice'}
            ];
            const user = users.find(user => user.id === userId);
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 3000);
    })
}

async function getUserInfo(id) {
    console.log('Fetching user info...');
    const userDetail = await getUser(id)

    console.log(`User info fetched; id: ${id} | name: ${userDetail.name}`);
}

getUserInfo(2);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// using API with try and catch

async function fetchUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        console.log(`User info fetched; id: ${data.id} | name: ${data.name}`);
    } catch (error) {
        console.log(error);
    }
}

fetchUser(4);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// using API wuth then and catch

async function fetchUserName(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => console.log(`User info fetched; id: ${data.id} | email: ${data.email}`))
    .catch(error => console.log(error));
}

fetchUserName(3);