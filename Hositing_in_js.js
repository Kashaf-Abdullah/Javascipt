
getName();//will not give any error 
console.log(x);//error:not define but not undefine
console.log(y);//error:undefine --> not reserved memory for y



let x=33;

function getName(){
    console.log('hello world');
    
}

// but when we make this function to arrow function so it will behave like a variable


// var getName=()=>{
//     console.log('hdh');
    
// }