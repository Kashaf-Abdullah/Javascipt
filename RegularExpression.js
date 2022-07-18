 let regex=/kashaf/
 regex=/^ka/         //^ means expression will match if string starts with

regex=/ah$/    //$ at the ends of the string means "string ends with"
regex=/k.ashaf/  //matches any 0 or more character
regex=/k*shaf/   //matches any one character
regex=/k?shaf?/   //?after character means that character is optional
regex=/k\*ashaf/   //matches star   
//lets look into some metacharacter symbols


let str="kashaf Abdullah"
let result=regex.exec(str)
console.log("The result from exec( ) is "+result)
if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`)
}