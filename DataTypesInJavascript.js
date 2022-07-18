// DATA TYPES IN JS
// Primitive datatype---->stack---->base datatype
// Refrence datatype----->heap----->object-->derived


// PRIMITIVE DATATYPE--->String,numbers,boolean,null,undefined,symbol(recently  introduce)
// REFRENCE DATATYPES--->Arrays,Object literals,functions,Dates


// STRING

let name="kashaf abdullah";
console.log(name);
console.log("Data type"+typeof name);


//NUMBERS

let marks=33;
console.log("Data type"+marks);


//BOOLEAN

let isDriver=true;
console.log("Data type"+typeof isDriver);


//null
let nullvar=null;
console.log(typeof nullvar);


//UNDEFINE
let undef=undefined;
console.log("Data type"+ typeof undef);


//REFRENCE DATA TYPES
myarr=[1,2,3,4,,false,"string"];
console.log("Data type"+typeof myarr);//object datatype

//OBJECT LITERALS
let mark={
    harry:34,
    aisha:78,
    aswa:90
}
console.log(mark);
console.log("Data type"+typeof mark);



//FUNCTION
function findname(){
    console.log(typeof findname);
}
findname();


//DATE
let date=new Date();
console.log(typeof date);


