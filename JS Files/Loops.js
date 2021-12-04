// General Loops: for, while, do-while 

for(let i=0; i<10;i++){
    // console.log(i);
}
let j = 0;
while(j<10){
// console.log(j);
j+=1;
}
let k = 0;
do{
    if(k===5){
        continue;
    }
    // console.log(k);
    k+=1;
}while(k<10);

let arr = [2,4,5,6,7];
arr.forEach(function(element,index,array){
// console.log(element);
});

let obj = {
    name:'radha',
    age:56,
    type:'Programmer'
};
for (let key in obj)
{
    console.log(`${key} of object is  ${obj[key]}`);
}
