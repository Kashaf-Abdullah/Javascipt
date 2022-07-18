let myvar=34;
console.log(myvar);

myvar=String(34);//integer converted into String
console.log(myvar);



let booleanvar=true;
booleanvar=String(true);
console.log(booleanvar+ typeof(booleanvar));//bollean value converted into string


let date=new Date();
console.log(date);
// convert it into String
date=String(new Date());
console.log(date);



let arr=[1,2,4,5];
console.log(arr);

arr=String([1,2,4,5]);
console.log(arr);


//now convert string into Number
let str="11";
console.log(str);//white color in console
 str=Number("11");
console.log(str);//green color in console

str=Number("kashaf");
console.log(str);//will show NaN(Not A Number)

str=Number(true);
console.log(str)

str=Number(["1"]);
console.log(str);


//ParseInt:Convert string into number
let num=parseInt('23.54');//23 output 
console.log(num);
 num=Number('23.54');//23.54(not string) output 
console.log(num);

//ParseFloat
let numf=parseFloat('23.55');
console.log(numf+typeof(numf));
//we have another function "tofixed()" and it just show no after decimal point
numf=parseFloat('45.681170707');
console.log(numf.toFixed(2) );//45.68











