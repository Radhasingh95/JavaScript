// You have to create a variable which is a string containing the text which is a link you are interested in.

// You have to fetch all the links from a given page which contains this text 

let a = document.links;
Array.from(a).forEach(function(element){
    if(element.href.includes("javascript"))
    {
        console.log(element.href);
    }
});