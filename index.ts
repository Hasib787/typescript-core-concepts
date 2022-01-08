const myName = "Masud Rana Hasib";
console.log(myName);
let number: number;
number = 10;
let isHungry: boolean;

type stringOrNumber = string | number;
let studentId: stringOrNumber = 154542;
studentId = "wen2-44111";
console.log(studentId);

//String Literal Types
type direction = "left" | "right" | "top" | "bottom";
let gameDirection: direction = "top";

//object

interface PersonType {
  name: string;
  age: number;
  hobby?: string;
}

// type PersonType = { name: string; age: number, hobby: string }
let person1: PersonType = {
  name: "Masud Rana Hasib",
  age: 22,
  hobby: "Coding",
};

let person2: PersonType = {
  name: "Hasib",
  age: 28,
};

//array
const myNumbers: (number | string)[] = [5, 4, 8, 8, 6, "mode"];
const students: PersonType[] = [
  { name: "Hasib", age: 28, hobby: "Coding" },
  { name: "Masud", age: 22, hobby: "Coding" },
  { name: "Rana", age: 22, hobby: "Coding" },
];
console.log(students);

//function

const greetings = (name: string) => {
  console.log(`Hello ${name}`);
};
greetings("Hasib");

const addNumbers = (a: number, b: number): number => {
  return a + b;
};
console.log(addNumbers(5, 6));

const introduce = ({ name, age }: PersonType): void => {
  console.log(`Hello I'm ${name}, and age ${age}!`);
};
const isIntroduce = introduce({
  name: "Hasib",
  age: 50,
  hobby: "Watch Movie",
});

const getArray = (arr: string[]): string[] => {
  return arr;
};
getArray(["Hello"]);

//generic 
const newArray = <T>(arr: T[]): T[] =>{
    return arr;
}
 const arrayResult = newArray<string>(["Apple","Orange", "Mango"]);
newArray<number>([43,34,21]);
console.log(arrayResult);
