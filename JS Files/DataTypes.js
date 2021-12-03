/*
Data types in js
-> Primitive data type - String, Numbers, Boolean, Null, Undefined, Symbol
-> Reference data type - Arrays, Object literals, Functions, Dates
*/

// String 
let name = "radha"
console.log("My string is "+name);
console.log("Data type is "+typeof name);

// Numbers
let marks = 34;
console.log("Data type is "+typeof marks);

// Boolean
let knowsDsa = true;
console.log("Data type is "+typeof knowsDsa);

// Null
let nullVar = null;
console.log("Data type is "+typeof nullVar);

// Undefined
let undef = undefined;
console.log("Data type is "+typeof undef);

// Reference data types

// Arrays
let arr = [1,2,3,4,false];
console.log("Data type is "+typeof arr);

// Object Literals
let students = {
    radha:87,
    varun:79,
    'rohan singh':99
};
console.log(students);
console.log("Data type is "+typeof students);

// Function
function func(){

}
console.log("Data type is "+typeof func);

// Date
let date = new Date();
console.log("Data type is "+typeof date); 