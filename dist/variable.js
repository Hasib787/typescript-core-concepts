"use strict";
let age = 25;
let club = "Suhatun";
const isFamous = false;
console.log(club);
function add(num1, num2) {
    return num1 + num2;
}
const adding = add(25, 21);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const user = fullName('Hasibul', 'Hasan');
console.log(fullName);
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log('result', result);
}
const total = doubleItAndConsole(10);
console.log(total);
//arrow function
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
let multiply2;
multiply2 = (x, y) => x * y;
console.log(multiply2(25, 6));
