console.log('This is tut20');
let impArray = ['adrak','pyaz','bhindi'];
// Add a key-value pair inside local storage 
localStorage.setItem('Name','Harry');
localStorage.setItem('Name2','Radha');
localStorage.setItem('Sabzi',JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair 
// localStorage.removeItem('Name');

// Retrieve an item from the local Storage
let name=localStorage.getItem('Name');
console.log(name);

// let name1=localStorage.getItem('Namesjdhgl');
// console.log(name1);
name=JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);

// sessionStorage.setItem('sessionName','sHarry');
// sessionStorage.setItem('sessionName2','sRadha');
// sessionStorage.setItem('sessionSabzi',JSON.stringify(impArray));


sessionStorage.clear();
localStorage.clear();