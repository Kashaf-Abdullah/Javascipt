//map,filer and reduce are higher order function

const arr=[5,1,3,2,6];
//for example if we say ==> filter out all the odd number 

//filter odd values

function isOdd(x){
return  x%2;
}

function greaterthanThree(x){
return x>4;
}
// const output=arr.filter(isOdd);
const output=arr.filter(greaterthanThree);

console.log(output);
