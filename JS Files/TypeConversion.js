// Type Conversion 
let myVar;
myVar = String(34);
console.log(myVar,typeof myVar);
let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

let date = String(new Date());
console.log(date, typeof date);

let arr = String([1,2,3,4]);
// let arr = [1,2,3,4];
console.log(arr.length, typeof arr);

let i = 8;
console.log(i.toString());

let stri = Number("3434");
stri = Number("3434d");
stri = Number(true);
stri = Number([1,2,3]);
console.log(stri,typeof stri);

let number = parseInt('34.09');
 number = parseFloat('34.09');
console.log(number,typeof number);

console.log(number.toFixed(5),typeof number);


// Type Coercion

let mystr = "698";
let mynum = 34;

console.log(mystr + mynum);
