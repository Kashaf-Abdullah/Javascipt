let marks=[34,23,24,93,73,25];
const fruits=['Orange','Apple','PineApple'];
const mixed=['str',89,[3,5]];

const arr=new Array(23,123,21,'Orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length);
//isArray :it tells that the method is array or not? and it gives answer in boolean

console.log(Array.isArray(arr));//true
arr[0]='harry';

console.log(arr);

//MUTATING OR MODIFYING

marks.push(22);//will place at the end of an array
console.log(marks);

marks.unshift(1009);//will place at the start of an array
console.log(marks);

marks.pop();//will remove element at the ened of an array
console.log(marks);

marks.shift();
console.log(marks);//will remove element at the start of an array



marks.splice(1,2)// start from 1 then 2 element 
console.log(marks);

marks.reverse();
console.log(marks);

let marks2=[55,66,78];
marks=marks.concat(marks2);
console.log(marks);


//OBJECT

let myobj={
    name:'kashaf',
    city:'Hyderabad',
    rollnum:'20sw027',
    marks:[33,44,66,77]
}

console.log(myobj);
console.log(myobj.name);