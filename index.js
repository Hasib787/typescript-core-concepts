var myName = "Masud Rana Hasib";
console.log(myName);
var number;
number = 10;
var isHungry;
var studentId = 154542;
studentId = "wen2-44111";
console.log(studentId);
var gameDirection = "top";
// type PersonType = { name: string; age: number, hobby: string }
var person1 = {
    name: "Masud Rana Hasib",
    age: 22,
    hobby: "Coding"
};
var person2 = {
    name: "Hasib",
    age: 28
};
//array
var myNumbers = [5, 4, 8, 8, 6, "mode"];
var students = [
    { name: "Hasib", age: 28, hobby: "Coding" },
    { name: "Masud", age: 22, hobby: "Coding" },
    { name: "Rana", age: 22, hobby: "Coding" },
];
console.log(students);
//function
var greetings = function (name) {
    console.log("Hello ".concat(name));
};
greetings("Hasib");
var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(5, 6));
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello I'm ".concat(name, ", and age ").concat(age, "!"));
};
var isIntroduce = introduce({
    name: "Hasib",
    age: 50,
    hobby: "Watch Movie"
});
var getArray = function (arr) {
    return arr;
};
getArray(["Hello"]);
//generic 
var newArray = function (arr) {
    return arr;
};
var arrayResult = newArray(["Apple", "Orange", "Mango"]);
newArray([43, 34, 21]);
console.log(arrayResult);
