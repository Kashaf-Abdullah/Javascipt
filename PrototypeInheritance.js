console.log('gfgk');
const proto={

    slogan:function(){
        return `This is the best company`;
    },


    changeName:function(newName){
        this.name=newName;
    }
}

// const obj=Object.create(proto);
// obj.name="kashaf";
// obj.role="programmer";
// obj.changeName("kehkasha");
// console.log(obj);



//alternative syntax basically this is old therefore syntax now we used ES6 classes
//this also create harry object
const obj=Object.create(proto,{
    name:{vale:"kashaf"},
    role:{value:"programmer"}
})
obj.changeName("kehkasha")
// console.log(obj)

//EMPLOY CONSTRUCTOR4
function Employee(name,salary,experience){
this.name=name;
this.experience=experience;
this.salary=salary
}
//add slogan to employee prototype
Employee.prototype.slogan=function(){
    return `This comany is the best .Regards ${this/name}`;
}


let obj2=new Employee("Kashaf",468349,58);
console.log(obj2);

console.log(obj2.slogan());


//Programmer
function Programmer(name,salary,experience,language){
    Employee.call(this.name,salary,experience);
    this.language=language;
}
//Inherit the prototype
//as earlier we have add slogan in Employee prototype so now we have thisin Programmer 
Programmer.prototype==Object.create(Employee.prototype);

//Manually  set the constructor
Programmer.prototype.constructor=Programmer
let obj3=new Programmer("Kashaf",2,0,"Javascript");
console.log(obj3);
