let a = document;
a = document.all;
a = document.body;
a = document.forms;
a = document.forms[0];
// console.log(a);

a = document.all;
Array.from(a).forEach(function(element){
    // console.log(element);
});

a = document.links;
a = document.links[0];
a = document.links[0].href;
console.log(a);
