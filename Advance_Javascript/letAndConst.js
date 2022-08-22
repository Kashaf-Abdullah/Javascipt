// let and const declarations are Hoisted


console.log(a);//will give error(cannot access before initialization)==>not allocated memory
console.log(b);//undefine ==>but memory is assign to it but it is not initialized
console.log(c);//will give error==>memory  is not allocated 



let a=10;
var b=4;//we can access b even before initialize it
const c=7;//we can not access c before before initialing


//let is strict than var



// Temporal means something temporary, not permanent, and Dead means something which is not working or can say it is in a lifeless state, Zone denotes an area but here we are in programming so this term area will be something related to memory, or also zone can be thought of as the time period or phase. So merging these terms narrates that some entity is temporarily in a lifeless or inactive state and cannot be used for any kind of work. You should have knowledge of let and const keywords in javascript to understand the topic easily.
// https://www.geeksforgeeks.org/what-is-the-temporal-dead-zone-in-es6/





//let can not rececalre


console.log(z)
// let z=33;

// let z=9;


// var can be redecalre

console.log(z)
var y=33;

var y=9;

//const can not be redecalre
// const d=9;
// const d=8;



//DIFFERENCE BETWEEN SYNTAX ERROR/TYPE ERROR /REFRENCE ERROR
// ReferenceError: Raised when an invalid reference is used.

// console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
// let num = 6; // Initialization


// SyntaxError: Raised when a syntax error occurs while parsing JavaScript code.

// TypeError: Raised when the type of a variable is not as expected.


// use let & const