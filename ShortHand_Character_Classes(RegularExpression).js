console.log("hello world")


//Character classes
let regex=/k[a-f]s\haf/    ///word character - _or alphabet or numbers
regex= /\w+ello/           //  \w+ means one or more word character
regex=/\Wworld/           //Non word character
regex=/\W+world/         //  \W+More than one Non word character
regex=/\d0/              //\d means digit

regex=/number \d+/       //\d+ means more than 1 digit
regex=/\D000/           //\D means non digit
 regex=/\D+000/          //\D+ means means more than one non digit
regex=/\sworld/         //\s match whitesapace
regex=/\s+world/         //\s+(one or more) match whitesapace
//characters
regex=/\Sworld/          //Match non whitespace character
regex=/\S+world/          //Match one or more than onenon whitespace character
regex=/Hello\b/          //word boundary

//Assertions
regex=/H(?=e)/   //after H should e 
regex=/H(?!e)/  //after H should not be e0
 let str="Hello world 000";
let result=regex.exec(str)
console.log("The result from exec( ) is "+result)
if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`)
}