//async return promise
//response.json() return promise3 

async function obj(){
    console.log("inside obj function")
    const response=await fetch("https://api.github.com/users")
    console.log("nefore response")
    const users=await response.json()
    return users;
//         return "kashaf";
 }


console.log("before calling obj")
let a=obj()
console.log("after calling obj")
console.log(obj())
a.then(data=>console.log(data))
console.log("last line ")
//when cursor react at await so it wait again come outside the function