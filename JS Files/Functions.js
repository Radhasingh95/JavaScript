let name = 'radha';
// console.log(`Happy birthday ${name}`);

function greet(name,thank = 'Thank you'){
    console.log(`Happy birthday ${name}. ${thank}`);
    return 1;
}
let val = greet('radha');
console.log(val);

const mygreet = function(name){
    console.log(`Hello ${name}`);
    
}
mygreet('varun');

const myobj = {
    name:'radha',
    game:function(){
        return "GTA";
    }
}
console.log(myobj.game());

arr = ['fruit','vegetable','furniture'];

arr.forEach(function(element,index,array){
    console.log(element,index,array);
});