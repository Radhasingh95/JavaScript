let marks = [34,45,56,67,78];
const fruits = ['Orange','Apple','Pineapple'];
const mixed = ['str',89,[3,5]];

const arr = new Array(23,45,67,'Orange');
console.log(arr);
console.log(mixed);
console.log(fruits);

console.log(arr.length); 
console.log(Array.isArray('dfd'));
console.log(Array.isArray(arr));
arr[0] = 'lean in';
console.log(arr);

let value = marks.indexOf(34);
console.log(value);

// Mutating or Modifying arrays 
console.log(marks);
marks.push(99);
console.log(marks);
marks.unshift(1000);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);

marks.splice(1,2);
console.log(marks);
marks.reverse();
console.log(marks);

let marks2 = [1,2,3];
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    'first name':'radha',
    role:'student',
    isActive: true,
    marks:[1,2,3,4]
};
console.log(myobj);
console.log(myobj.marks);
console.log(myobj['marks']);
console.log(myobj['first name']);
