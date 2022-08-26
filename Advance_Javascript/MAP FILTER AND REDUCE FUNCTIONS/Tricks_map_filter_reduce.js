const users=[
{firstName:"Ayesha" ,lastName:"Ali" ,age:26},
{firstName:"Sana" ,lastName:"Ali" ,age:75},
{firstName:"Hareem" ,lastName:"Ali" ,age:50},
{firstName:"Hareem" ,lastName:"Ali" ,age:26}

]

//list of full name

//which function you use here?
// Map, filter or reduce?

//we will use map

const output=users.map((x)=>x.firstName+x.lastName);

console.log(output);




//how many users are of a particular age?
// {26 : 2 , 75 :1 , 50:1}

//we will use reduce for this

const output2=users.reduce(function (acc,curr){
if(acc[curr.age]){
acc[curr.age]=++acc[curr.age]
}
else{
    acc[curr.age]=1;
}
return acc
},{})


console.log(output2)




//example of  chaining reduce,map and filter
//name of people whose age is less than 30

const output3=users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(output3)