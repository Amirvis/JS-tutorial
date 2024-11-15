/* comment the codes of above and below the each section you wanna run and test;
check Local Storage on Application section when you are using chrome and inspect element. */

localStorage.setItem('firstName','Noah');

// it will be saved in the browser; firstName is key and Noah is value

let firstName = localStorage.getItem('firstName');  // it just gives the value of the key

console.log(firstName);

// ----------------------------------------------------------------------

localStorage.setItem('lastName','Gupta');
localStorage.setItem('age',25);

let lastName = localStorage.getItem('lastName');
let age = localStorage.getItem('age');

console.log(firstName , lastName , age);

// all datas stored in local storage is an string

console.log(age + 10); // it will give 2510

// ----------------------------------------------------------------------

// for deleting an item from local storage:

localStorage.removeItem('age');

// for deleting all the items from local storage:

localStorage.clear();

// ----------------------------------------------------------------------

// check Session Storage on Application section when you are using chrome and inspect element

sessionStorage.setItem('firstNameUser','Noah');
sessionStorage.setItem('ageUser','25');

let firstNameUser = sessionStorage.getItem('firstNameUser');
let ageUser = sessionStorage.getItem('ageUser');

console.log(firstNameUser , ageUser);

// ----------------------------------------------------------------------

// for deleting an item from session storage:

sessionStorage.removeItem('ageUser');

// for deleting all the items from session storage:

sessionStorage.clear();

// you can check the difference between local storage and session storage in the img file

// ----------------------------------------------------------------------

// for making a cookie:

document.cookie = "firstName1 = Noah expires = Thu, 18 Aug 2030 12:00:00 UTC; path=/";

// ----------------------------------------------------------------------

// more about local storage:

localStorage.setItem('age1',40);
let age1 = localStorage.getItem('age1');

console.log(typeof age1);
console.log(typeof Number(age1));

if (Number(age1) > 50) {
    console.log('More than 50');
} else {
    console.log('Less than 50');
}

// ----------------------------------------------------------------------

// for datas that are objects:

const user = {
    firstName: 'Noah',
    lastName: 'Gupta',
    age: 25,
    hobbies: ['coding', 'reading', 'gaming'],
    address: {
        city: 'London',
        country: 'UK'
    }
};  // in local storage we can store only strings, then we have to convert the object to string

const userJSON = JSON.stringify(user);
localStorage.setItem('userInfo', userJSON);
let userInfo = localStorage.getItem('userInfo');

console.log(typeof  userInfo);
console.log(userInfo);

// to convert the string to object:

const userData = JSON.parse(userInfo);

console.log(typeof userData);
console.log(userData);
console.log(userData.hobbies[0]);
console.log(userData.address.city);