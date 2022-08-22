
//What is callback function in javascript



// As we know functions are first class citizen in js means you can take a function and pass it into another function and the function is passed into another function is called  CALLBACK FUNCTION .JS is synchronous language (one by one work ) but due to CALLBACK we can do async single thread in javascirpt

//setTimeoute function take callback function
setTimeout(function(){console.log('timer')}   ,5000)


function x(y){
console.log('x');
y()

}
//y is callback function
x(function y(){
console.log('y');

})







//Javascript is a synchronous and single threaded language

//Blocking the main threat
//if function x has some powerfull operation and it is taking 20 30 sec so call stack might be block


//Power of callbacks?

//Deep about Event listener

//Closures demo with event listener

//Scope demo with event listener

//Garbage collection & remove eventlistener
