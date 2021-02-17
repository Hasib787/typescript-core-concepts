//arrow function
const multiply = (x: number, y: number) => x * y;
console.log(multiply(25, 6))

let multiply2: (x: number, y: number) => number;
multiply2 = (x, y) => x * y;
console.log(multiply2(25, 6))