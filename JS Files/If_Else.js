const age = 45;
// const vari=34;
const doesDrive = true;
if(age===19){
    console.log('Age is 19');
}
else if(age == 65){
    console.log('Age is 65');
}
else{
    console.log('Age is neither 19 nor 65');
}

// == checks only value not type and value 
//  for type and value both use === 
// != value not equal to 
// !== value and type both not equal to 

if(typeof vari!== 'undefined'){
    console.log('Vari is defined');
}
else{
    console.log('Vari is not defined');
}

if(doesDrive && age>18){
    console.log('You can drive');
}
else{
    console.log('You cannot drive');
}

console.log(age==45? 'Age is 45':'Age is not 45');

switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 45:
        console.log("You are 45");
        break;

    default:console.log("Something exception");
        break;
}
