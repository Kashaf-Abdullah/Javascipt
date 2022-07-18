let myname ="kashaf";
// example1
function hello(){
    console.log(89+myname);
}

// example2
function birthday(){
console.log(`happy birthday ${myname}`);
}
hello();
birthday();

// example3


let myvar='hello';

function greet(myvar){
    console.log(`hello ${myvar}`);
}

greet("kashaf");

// example4

function fn(){
    return 34+455;

}

let sum=fn();
console.log(sum);

// example5

function addition(a,b){
    let sum=`the sum of two number  ${a} and ${b} is ${a+b}`;
    return sum;
}


let result =addition(4,5);
console.log(result);



// example6

const myobj={
    name:"kashaf",
    rollno :function(){
        return "20sw027";
    }
}


console.log(myobj.rollno());
console.log(myobj.name);


// example7


arr=['fruit','orange','banana'];
arr.forEach(function (element,index,array){
    console.log(element,index,array);
})


// example8

// scope
var i=34;
console.log(i);
;
function ui(name){
 i=90;
    return `this is a ${name} ui`;
}
console.log(ui("kashaf"), i);// i=34  but if i remove var from line 78 so i=90

//let/cosnt has block level scope(let is mostly used)
//var has function scope