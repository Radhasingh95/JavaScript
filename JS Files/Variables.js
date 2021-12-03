// Variable in js
// var, let, const  - Three keywords which are used to create variables
var name = 'radha';
var channel;
var num=34;
num = 5
// channel = 'Lean In';
console.log(name, channel, num);

/* Rules for creating JavaScript variables
1. Cannot start with numbers 
2. Can start with letter, _ or $ 
3. Case sensitive
*/ 
const city = 'Delhi';
console.log(city);
// city = 'Mumbai' --> Error we can't change value of constant variable

{
    let name = 'varun';
    console.log(name);
}
console.log(name);

const arr1 = [1,2,3,4];
arr1.push(5);
console.log(arr1);

/*

Most common programming case types
1. camelCase 
2. kebab-case
3. snake_case
4. PascalCase

*/