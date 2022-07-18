

// All JavaScript objects inherit properties and methods from a prototype.
// 


// JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.



// JavaScript prototypes are used to accessing properties and methods of objects. Inherited properties are originally defined in the prototype or parent object. The Date object is inherited from Date.prototype, Array object inherits from Array.prototype etc. The prototypes may be used to add new properties and methods to the existing objects and object constructor.
//OBJECT LITERALS :Object.prototype
let obj ={
    name:"kashaf",
    channel:"Code withharry",
    address:"xyz"
}

console.log(obj)
//<prototype>: Object { … } ---->  in console we have this 
// ......................



let Obj2 ={
    name:"kashaf",
    channel:"Code withharry",
    address:"xyz"
}

function obj3(givenname){

    this.name=givenname;

}
let obj4= new obj3("Kashaf");//noe prototype start eith this constructir 
//whenever new constructor create so new prototype appears

// if you wanna add something in existing prototype
obj3.prototype.getName=function(){
    // Now, we will add a method getName to the Prototype property in a Obj function constructor which will inherit by the different objects. Below is the code for this:
    return this.name;
}
console.log(obj3.getName)




console.log(obj4);




// .................

// function constructor
function Person(name, job, yearOfBirth){   
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
// this will show Person's prototype property.
console.log(Person.prototype);
