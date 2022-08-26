//map,filer and reduce are higher order function


//MAP
//map function is used for transformation

// what is transformation?
const arr=[5,3,2,6]
//Double -[10,2,6,12] //double transformation
//Triple -[15,3,9,6,18]
//Binary- ["101","1","11","10","110"]


function double(x){
    return x*2;
}

function binary(x){
return x.toString(2)
}

// const output=arr.map(double)
const output=arr.map(binary)
console.log(output);
