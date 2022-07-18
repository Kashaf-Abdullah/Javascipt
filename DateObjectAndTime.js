console.log('hello world')
// Date Object

let today=new Date();
console.log(today)
console.log(typeof today)


let otherdate=new Date('8-5-2002 6:15:09')
otherdate=new Date('May 1 2002')
console.log(otherdate)

let d=today.getDay();      
console.log(d)//0 because sun ,mon ,tues, wed ,thurs , fri ,sat
                        //    0     1    2   3     4     5   6


                        //  get function


                        let dt=today.getDate();
                        dt=today.getMonth();
                        dt=today.getMilliseconds();
                        dt=today.getMinutes();
                        dt=today.getHours();
                        dt=today.getSeconds();
                        dt=today.getTime();

    
                         console.log(dt);
    
    // set function
    
                         dt=today.setMonth();
                         dt=today.setMilliseconds();
                         dt=today.setMinutes();
                         dt=today.setHours();
                         dt=today.setSeconds();
                         dt=today.setTime();
                         dt=today.setFullYear();
                         
  


