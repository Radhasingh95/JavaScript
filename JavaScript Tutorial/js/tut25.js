console.log("This is tutorial 25");

/*
You have to create a div and inject it into the page which contains a heading.
Whenever someone clicks on the div, it should be converted into an editaable
item. Whenever user clicks away (blur), save the note into the local storage.
*/

//Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let text = document.createTextNode('This is my element. Click to edit it');
divElem.appendChild(text);

// Give element id, style and class 
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black; width:154px;margin:34px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


//Insert the element before element with id first
container.insertBefore(divElem,first);

console.log(divElem,container,first);

// add event listener to the divElem 
divElem.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas==0){
    let html = elem.innerHTML;
    divElem.innerHTML = `<textarea class="textarea form-control"  id=" textarea" rows="3">${html}</textarea> `;
    } 
    //listen  for the blur event on textarea
    let texarea = document.getElementById('textarea');
    noTextAreas.addEventListener('blur',function(){
        elem.innerHTML = textarea.value;
    })
})

