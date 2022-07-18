//we use promise as substitute of callback function


//Promise 
//-resolve
//-reject
//-pending

function func1(){
    return new Promise(function(resolve,reject){

setTimeout(()=>{
    const error=true;
    if(!error){
        console.log('Your promise has been resolved')
        resolve();
    }
    else{
        console.log('Your promise has not been resolved')
        reject();
    }
},2000);
    })
}

//.then()==>means if callback resolves so we call that which we want to resolve
//if promise reject so catch will run  & if resolve so  then will run
func1().then(function(){
    console.log("Thanks for resolving")
}).catch(function(){
    console.log("rejected")
})


