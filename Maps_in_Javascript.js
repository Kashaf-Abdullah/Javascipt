//Maps in js: We can use any type of key or value
const myMap=new Map()

let key1='mystr'
let key2={}
let key3=function(){}

myMap.set(key1,'This is a string')
myMap.set(key2,'This is a blank obj')
myMap.set(key3,'This is an empty function')

console.log(myMap)

//getting values from map
value1=myMap.get(key1)
console.log(value1)
value2=myMap.get(key2)
console.log(value2)

//size of map
console.log(myMap.size)

//You can loop using for .. of to get keys and vakues

for(let [key,value]of myMap){
    console.log(key,value)
}

//get only key

for (let key of myMap.keys()){
console.log('key is ',key)
}

//get only value

for (let value of myMap.values()){
    console.log('value is ',value)
    }


    //you can loop through a map sing for each loop

    myMap.forEach((value,key)=>{
        console.log(`key is ${key}`);
        console.log(`value is ${value}`);
        
    })

    //convertng map into aray
    let myArray=Array.from(myMap);
    console.log('Map to array is',myArray)


    
    //converting   map keys into array 
    let mykeysarray=Array.from(myMap.keys());
    console.log('Map to key array is',myArray)


    
    //convertng   array keys into map 
    let myvaluesarray=Array.from(myMap.values());
    console.log('Map to value array is',myvaluesarray)

    