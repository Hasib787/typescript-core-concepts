"use strict";
const myName = "Masud Rana Hasib";
console.log(myName);
let number;
number = 10;
let isHungry;
let studentId = 154542;
studentId = "wen2-44111";
console.log(studentId);
// type PersonType = { name: string; age: number, hobby: string }
let person1 = {
    name: "Masud Rana Hasib",
    age: 22,
    hobby: "Coding",
};
let person2 = {
    name: "Hasib",
    age: 28,
};
//array
const myNumbers = [5, 4, 8, 8, 6, "mode"];
const students = [
    { name: "Hasib", age: 28, hobby: "Coding" },
    { name: "Masud", age: 22, hobby: "Coding" },
    { name: "Rana", age: 22, hobby: "Coding" },
];
// console.log(students);
//function
const greetings = (name) => {
    console.log(`Hello ${name}`);
};
greetings("Hasib");
const addNumbers = (a, b) => {
    return a + b;
};
console.log(addNumbers(5, 6));
