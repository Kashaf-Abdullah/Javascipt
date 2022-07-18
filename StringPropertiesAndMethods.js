let name ="Hello"+
"world";

console.log(name);

//CONCAT
let myvar="<h1> this is heading</h1>";
myvar=myvar.concat(name,"hi ","good morning");
console.log(myvar);
console.log(myvar.length);
console.log(myvar.toUpperCase());

console.log(myvar.toLowerCase());

console.log(myvar[1]);
console.log(myvar.indexOf('good'));
console.log(myvar.endsWith('s'));
console.log(myvar.includes("good"));
console.log(myvar.substring(1,4));
console.log(myvar.slice(0,4));

let fruit1='Orange';
let str=`Hello ${name} and" ' ${fruit1}`;

document.body.innerHTML=str;

// ES6 is a latest version of javascript
