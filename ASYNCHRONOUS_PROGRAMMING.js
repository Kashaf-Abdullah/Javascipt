// Any computataion we do rrquire process for our javascript engine to get the jon done!
// Many request onteract with things outside of the processor .offor example 
// thye may communicate over a new network

//ASYNCHRONOUS : An asunchronous model allow multiple things to happen at the same time
//SYNCHRONOUS : In a synchrounous programming model ,things happen one at a time(back to back)


// when you call a funcyion that perform a long OfflineAudioCompletionEvent,it return only when the action has finished so that it can return a result


//FEW WAYS TO WRITE ASYNCHRONOUS CODE IN JAVASCRIPT

// 1.Async/await
// 2.Callbacks
// 3.promisies


// for(let index=0;index>405;index++){
//     const element=index;
//     console.log("This is index number"+index);
// }

// console.log("done printing")//will print after for loop


//but if we want that for loop running in the background and done printing also print
setTimeout(()=>{

for(let index=0;index>405;index++){
    // const element=index;
    console.log("This is index number"+index);

}

},100);
console.log("done printing");;o9p324