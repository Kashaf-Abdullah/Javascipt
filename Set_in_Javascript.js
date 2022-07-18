console.log('ee');
//Set stores unique values
const mySet=new Set()//initialize an empty set


console.log('The set look like',mySet);

//Adding value to this set

mySet.add('this')

mySet.add('is ')
mySet.add('my book')

mySet.add(true)

mySet.add(44)
mySet.add("hello")

console.log('The set look like',mySet);
//but if we add 'this' gain so it will remain in set only one time and length will remain same
mySet.add('this')
console.log('The set look like',mySet);


// ..................

let mySet2=new Set([1,33,"Ali","Pakistan",{a:4,b:9}])
console.log(mySet2);

console.log(mySet2.has(33));///true because this set has 33


console.log(mySet2.has("China"));//false because this set hasn't China


//DELETION
console.log('before removal',mySet2);
mySet2.delete(33);

console.log('After removal',mySet2);


//ADDITION
console.log('before Adding',mySet2);
mySet2.add(55);

console.log('After Adding',mySet2);


//ITERATING A SET
for(let item of mySet2){
    console.log('Item is' ,item);
    
}


//comverting set into an array
let myArray=Array.from(mySet2);
console.log(myArray);
