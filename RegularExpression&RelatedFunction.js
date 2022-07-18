//This is regular expression lietral in js
let reg=/kashaf/  //if something is between two lessthan so this is basically regular expression
// let reg=/kashaf/g        /g means global
//g is for global so if sentence has soo many times string used so it will showw all these

// let reg=/kashaf/i       // i means insensitives

console.log(reg)
console.log(reg.source)//will pirnt inside the regular expression

//Functions to match expressions

let s= "This is me kashaf !!! kashaf code"


//1.exec()-This function will return an array for match or null
//for no match

let result=reg.exec(s);
console.log(result)
console.log(result.index)
// we can use multiple exec() with global  flag
 result=reg.exec(s);
console.log(result)
console.log(result.index)

 result=reg.exec(s);
console.log(result)
console.log(result.index)



//2.test() - return true or false



let res=reg.test(s)
console.log(res)


//3.match() -It will return an array of result or null
// let r=reg.match(s) -->//this is wrong
let r=s.match(reg)
console.log(r)


//4.search()- return index of first match else -1
let reslt=s.search(reg);
console.log(reslt)


//5.replace() -- return new replaced string all the  replacement

let resltt=s.replace(reg,'Ayesha')
console.log(resltt)