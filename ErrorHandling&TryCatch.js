let a="kashaf"

//pretend this is coming from server as response
a=undefined;//will not throw error
if(a!=undefined){
    throw new Error("This  is not undefined")
}
else{
    console.log("This is undefined")

}



/////
try {

    console.log("We are inside try block")
    functionobj();

} catch (error) {
console.log("are you ok?")  
console.log(error.name) 

console.log(error.message) 


}

finally{
    console.log("finally it is running")
}