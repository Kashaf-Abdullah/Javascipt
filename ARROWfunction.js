//Creating a regular function

const obj=function(){
    console.log("this is my function")
}



obj();
// ...............................
//convert it into ARROW FUNCTION
const obj2=()=>{
    console.log("this is my arrow function2")
}

obj2()



// ...................................
//function returning something
const func3=function(){
    return 123;
}
console.log(func3())



//arrow function
const fun4=()=>"function4";
console.log(fun4())



//iif we returning an object in arrow function
const func5=()=>({name:"kashaf"})
console.log(func5())




//paremeter in the function
const func6=(name)=>"hello"+name
console.log(func6('kashaf'))
