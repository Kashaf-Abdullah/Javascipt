console.log('hello');
let btn;
btn=document.getElementById('btn');

btn.addEventListener('click',func1);
function func1(e){
    console.log('thanks',e);
    e.preventDefault();
  //  The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

// For example, this can be useful when:

//     Clicking on a "Submit" button, prevent it from submitting a form
//     Clicking on a link, prevent the link from following the URL

}



// double click

btn=document.getElementById('heading');

btn.addEventListener('dblclick',func2);
function func2(e){
    console.log('double click',e);
    e.preventDefault();

}

//mouseExit

document.querySelector('.no').addEventListener('mouseleave',function(){

    console.log('you exited no')
})

//mouseEnter


document.querySelector('.no').addEventListener('mouseenter',function(){

    console.log('you entered no');
})


//mouseRemove


document.querySelector('.no').addEventListener('mousemove',function(event){

    document.body.style.backgroundColor=`rgb(${event.offsetX}, ${event.offsetX},${event.offsetX})`;
    console.log(event.offsetX,event.offsetY);
    console.log('you triggered mouse move event');
})