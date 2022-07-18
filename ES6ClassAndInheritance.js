//ES6 syntax -->ES6(latest Javascript)

class Employee{
    constructor(givenname,givenexperience,givendivision){
    //this.name-->name is for object
        this.name=givenname;
    this.experience=givenexperience;
    this.division=givendivision;

}
 slogan(){
    return `I am ${this.name} and this is company is the best`;
 }
 joiningyear(){
    return 2022-this.experience;
 }
 //static method can call without making object of the class
 static add(a,b){
    return a+b;

 }
}

obj=new Employee("Kashaf",56,"Division");
console.log(obj);

console.log(obj.slogan()) 

console.log(obj.joiningyear()) 
console.log(Employee.add(9,8));

//constructor works when class object is created


//Inheritance
class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
 
        super(givenName,givenExperience,givenDivision);
        this.language=language;
        this.github=github;

    }

    favouriteLanguage(){
        if(this.language=='python'){
            return 'Python';
        }
        else{
            return 'Javascript';
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

obj2=new Programmer('Ayesha',4,"xyz","abd","aaa");
console.log(obj2.favouriteLanguage());