// In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

//closures:a function binds togetherr to with its lexical environment
function x(){
    var a=7;
    function y(){
        console.log(a);//a is not declare in this memory so it will find lexical parent envionment
        
    }
    y()
}
x()

//

function x(){
    var a=7;
    function y(){
        console.log(a);//a is not declare in this memory so it will find lexical parent envionment
        
    }
  return y;//closure return and closure is function with its parent lexical environment 
}
var z=x()
console.log(z);

z()//will return 7


///






function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
            
        }
        a=100;
        y();
    }
    x()
}
z()


// Use of closures
// -Module design pattern
// -Currying
// -Iterators
// setTimeouts
// memoize
// maintaining state in async world
// -Function like once