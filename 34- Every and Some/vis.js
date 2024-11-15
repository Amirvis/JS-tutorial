function checkEven(num){
    return num % 2 === 0 
}

// if all the elements in the array are even then every method returns true

const numbers1 = [2,4,6,8,10,12,14,16,18,20]
let allEven = numbers1.every(checkEven)

console.log(allEven); // if one of the elements is odd then every method returns false

// ----------------------------------------------------------------------

// if one of the elements in the array is even then some method returns true

const numbers2 = [1,2,3,4,5,6,7,8,9,10]
let hasEven = numbers2.some(checkEven)

console.log(hasEven); // if none of the elements are even then some method returns false