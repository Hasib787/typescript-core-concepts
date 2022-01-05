const myName = "Masud Rana Hasib";
console.log(myName);
let number: number;
number = 10;
let isHungry: boolean;

type stringOrNumber = string | number;
let studentId: stringOrNumber = 154542;
studentId = "wen2-44111";
console.log(studentId);

//object

type PersonType = { name: string; age: number, hobby: string }
let person1: PersonType = {
  name: "Masud Rana Hasib",
  age: 22,
  hobby: "Coding",
};

let person2: PersonType = {
    name: "Hasib",
    age: 28,
    hobby: "Sleeping",
}; 

