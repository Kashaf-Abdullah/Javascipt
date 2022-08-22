function a(){
    var b=5;
    c();
    console.log(b)
    function c(){
        //b is not physically present here so it will go in the lexical environment of a
        console.log(b);//b's value will be display
        
    }
}
// var b=4;
a()

//lexical environment-->local memory + lexical environment parent 
//lexical -->in order 
//here c function is lexically presnet in a function

//function c is lexically inside function a