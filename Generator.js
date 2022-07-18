// In ECMAScript 2015, generators were introduced to the JavaScript language. A generator is a process that can be paused and resumed and can yield multiple values. A generator in 
// JavaScript consists of a generator function, which returns an iterable Generator object.


// A generator function is a function that returns a Generator object, 
// and is defined by the function keyword followed by an asterisk (*), as shown in the following:

// Generator function declaration
// function* generatorFunction() {}

//Generator in JAVASCRIPT
//we can make array of soo many elemnt but it will take place in memory,so we make generator for this


function* numberGen(){
    let i=0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(true){
        yield i;
        i++;
    //covert it into string
    //yield(i++).toString();
    }
}


const gen=numberGen();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

