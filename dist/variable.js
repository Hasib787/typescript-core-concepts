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
function totalValue(firstValue, secoundValue) {
    return firstValue + secoundValue;
}
const result = totalValue(20, 40);
console.log(result);
