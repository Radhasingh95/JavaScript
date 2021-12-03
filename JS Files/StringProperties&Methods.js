const name = 'Radha';
const greeting = 'Good morning';
console.log(greeting +' '+ name);
let html;
html = "<h1> This is heading</h1>"+
"<p> This is paragraph</p>";
html = html.concat('this',' is concat');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[0]);

console.log(html.indexOf('this'));
// -1 if not found 
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('cat'));
console.log(html.includes(' '));
console.log(html.substring(0,3));
console.log(html.slice(-4));
console.log(html.split(' '));
console.log(html.replace('this','it'));
// replace only first occurrence

let fruit1 = 'Orange\''
let fruit2 = 'Apple'
let myHtml = `Hello ${name}
                <h1> This is heading</h1>
                <p> You like ${fruit1} and ${fruit2}`;
    
document.body.innerHTML = myHtml;
