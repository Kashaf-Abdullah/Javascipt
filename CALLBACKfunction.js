
//prentend that it is coming from server
const students=[

    {
        name:"Kashaf", subject:"JAVASCRIPT"
    },
    {
        name:"Ayesha", subject:"CSS"
    }
]
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

 function enrollStudent(student,callbackfunc){
    //callback function just to wait enrollstudent function until all student are enrolled
//it wis work as asynchrously not synchronously
//for each function work as synchronously
    setTimeout(function(){
    //it will push after 3 seconds
        students.push(student)
        console.log('student has been enrolled')
        callbackfunc();
    },7000);
 }
 //why we use setTimeout here?
 //because when we request server for data so it will take time that's why we use setTimeout here

 function getStudents(){
    setTimeout(function(){
   let str="";
   students.forEach(function(student){
    str+=`<li>${student.name}</li>`;
    console.log('students have been fetched')

   })
   document.getElementById('students').innerHTML=str;
           
        },1000)
 }
let newStudnet={name:"Hira",subject:"C++"}
 enrollStudent(newStudnet,getStudents)
//  getStudents()




// JavaScript runs code sequentially in top-down order. However, there are some cases that code runs (or must run) after something else happens and also not sequentially. This is called asynchronous programming.

// Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.