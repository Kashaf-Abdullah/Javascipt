// AJAX stands for asynchronous Javascript and XMLDocument
// AJAX is not a programming language .Rather ,its a set of existing technologies
// AJAX helps in fetching data asynchronously without internfering with the existing pageXOffset
// No page reload/refresh
// Modern website use JSON instead or  XML for data Transfer

//we use JSON nowadys

//WHY USE AJAX
// better user expperience
// no page reload/refresh
// very interractive
// save network bandwith


//pure js is vannilla javascript --<without including any library/framwork


//HOW OT WORKS
// AJAX uses XMLHttpRequest Object(also called xhr object) to acheive thiis

// modern website use JSON instead or XML for data TransformStreamData can be transfer  in any format and protocol(Not always http neccessarily)

console.log('hh')
let fetchbTN=document.getElementById('fetchBtn');
fetchbTN.addEventListener('click',butttonClickHandler)


function butttonClickHandler(){
console.log('you have clicked fetched button')
    //Instantiate  an xhr object
    const  xhr=new XMLHttpRequest;

    //open the object

    // in third parameter ,if we give true -->so it will block(Asynchronous) and if we give false so it will work as synchrous
//    xhr.open('GET','kashaf.txt',true);
 //   xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

//post request
xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
xhr.getResponseHeader('Content-type','application/json')
,
//GET=m:ans just fetch data(just we will give url and then just tell what is inside the url)
//post=data will send by request(we will give url as well as data so response will give acc: to data)


//WHAT TO DO ON PROGRRESS(optional)
xhr.onprogress=function(){
    console.log('On progress')
}
//in onload we check status even  if file is not present  will not show error
xhr.onload=function (){
if(this.status==200)
    console.log(this.responseText);
else
console.log('some error occured')
}


//send the request
params=`{"name":"test88","salary":"123"&"age":"23"}`;
xhr.send(params);
console.log('done')//if xhr.open ===true so it will print before file data but if false so it willl show after data
console.log(params)




}

let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler)
function popHandler(){
    console.log('you have clicked pop button')
    //Instantiate  an xhr object
    const  xhr=new XMLHttpRequest;

    //open the object

    // in third parameter ,if we give true -->so it will block(Asynchronous) and if we give false so it will work as synchrous
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);


//in onload we check status even  if file is not present  will not show error
xhr.onload=function (){
if(this.status==200){
    let obj=JSON.parse(this.responseText)
    console.log(obj)
    let list=document.getElementById('list');
    str="";
    for( key in obj){
        str+=`<li>${obj[key].employee_name}</li>`
    }
    list.innerHTML=str;
    
}else
console.log('some error occured')
}


//send the request

xhr.send();
console.log('done')//if xhr.open ===true so it will print before file data but if false so it willl show after data



}