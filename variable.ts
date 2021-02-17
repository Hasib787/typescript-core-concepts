let age: number = 25;
let club: string = "Suhatun";
const isFamous: boolean = false;
console.log(club);

function add(num1: number, num2: number): number {
    return num1 + num2;
}
const adding: number = add(25, 21);


function fullName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}

const user = fullName('Hasibul', 'Hasan');
console.log(fullName);

function doubleItAndConsole(num: number) {
    const result = num * 2;
    console.log('result', result);
}
const total = doubleItAndConsole(10);
console.log(total);

function totalValue(firstValue: number, secoundValue: number) {
    return firstValue + secoundValue;
}
const result= totalValue(20,40);
console.log(result);




