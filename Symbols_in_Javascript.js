console.log('hello');

// const sym=new Symbol('My identifier');  //error because here it is primitive ,don't use primitive

//They both are unique
const sym=Symbol('My identifier');
const sym2=Symbol('My identifier');

console.log(sym==sym2);//return false because the both are unique

const a="hello";
const b="hello";
console.log(a==b); //return true 
console.log(4==4); //return true 
console.log(undefined==undefined); //return true 

//Symbol use to make unique key using primivitive because above we have seen that we cannot make unique key ising primintive


const k1=Symbol('identifier for k1')
const k2=Symbol('identifier for k2')

myObj={};
myObj[k1]="hello";
myObj[k2]="world";
myObj[3]="programming"

console.log(myObj[k1]);

console.log(myObj);


//Symbol are ognored in for in loop
for(key in myObj){
    console.log(key,myObj[key]);

    
}
//if youu wanna convert object into json so used ==>stringify()
console.log(JSON.stringify(myObj));


console.log('Symbol is',sym);
