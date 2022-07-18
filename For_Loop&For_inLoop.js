console.log(4)
people = ["Kashaf", "Ayesha", "Alina", "Fiza"]

// *******FOR LOOP**********



//Tradition for loop
// for(let i=0;i<people.length;i++){
//     const element=people[i]
// console.log(element)
// }

obj={
    name:"kashaf",
    language:"javascript",
    hobbies:"Andrios App development"
}

// console.log(obj)




//1.ITERATING AN OBJECT
// for(let i=0;i<Object.keys(obj).length;i++){
//     const element=obj[Object.keys(obj)[i]]
// console.log(element)
// }



//2.ITERATING OBJECT USING FOR IN LOOP
for(let key in obj){
    console.log(obj[key])
}

//3.ITERATING A STRING

//we can use for in with string  to loop through all the characters
mystring="This is my string"
for(let key in mystring){
 //   console.log(mystring[key])
}




//******FOR OF LOOP****** 



people = ["Kashaf", "Ayesha", "Alina", "Fiza"]

for(let name of people){
    console.log(name)
}

