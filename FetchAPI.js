//div with id myBtn
let myBtn=document.getElementById("myBtn");
// myBtn.addEventListener("click",()=>{

// })

//div with id content
let content=document.getElementById("content");

//fetch filedata

// function getData(){
//     url="kashaf.txt"
//     fetch(url).then((response)=>{
//         console.log("inside first then")
//         return response.text()

//     }).then((data)=>{
//         console.log("inside second then")
// console.log(data)
//     })
// }
// console.log("before running  getdata")

// getData();

// console.log("after running getdata")


//fetch json data
function getData2(){
    url="https://api.github.com/users"
    fetch(url).then((response)=>{
        console.log("inside first then")
        return response.json()

    }).then((data)=>{
        console.log("inside second then")
console.log(data)
    })
}



function postData2(){
    url="http://dummy.restapiexample.com/api/v1/create"
    //we convert object to string by using stringify
   data='{"name":"kashaf","salary":"123","age":"20"}';
    params={
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }
    fetch(url,params).then(response=>
        response.json()).then(data=>console.log(data)
    )
}

console.log("before running  getdata")
console.log(postData2())


console.log("after running getdata")
