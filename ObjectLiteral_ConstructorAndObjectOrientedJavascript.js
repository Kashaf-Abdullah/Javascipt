// OBJECT LITERALS FOR CREATING OBJECTS

h={
    name:"harry",
    functionhello(){
        return 5+2;
    }
}

console.log(typeof h)
console.log(h.name)

console.log(h.functionhello());
console.log(h);



let car={
    name :"Mercedes",
    topSpeed:89,
    run:function(){
        console.log("car ");
    }
}

console.log(car);


//new KEYWORD make object with the help of constructor
new Date();

// CREATING CONSTRUCTOR FOR cars
function GeneralCar(givenname,givenspeed){
    this.name=givenname;
    this.topSpeed=givenspeed;
    this.run=function(){
        console.log(`${this.name}  is running`)
    }

    this.analyze=function(){
        console.log(`This car is slower by ${200-this.topSpeed}  kmh than Mercedes`)
    }
}

car1=new GeneralCar('Nissan',180);
console.log(car1.analyze());
