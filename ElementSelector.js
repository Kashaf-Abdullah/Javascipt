console.log(document.getElementById('myfirst'));

// Single Element selector
// multiple element selector 





// SINGLE ELEMENT SELECTOR



// console.log(document.getElementById('myfirst').childNodes);

// console.log(document.getElementById('myfirst').parentNode);
// document.getElementById('myfirst').style.color="red";
// document.getElementById('myfirst').parentNode.style.color="blue";


// Text will be changed
// document.getElementById('myfirst').innerHTML="Hello world";

// document.querySelector('#myfirst');
// console.log(document.querySelector('.child2'));
// document.querySelector('b').innerHTML="hello";
// document.querySelector('div').style.color="green";



// MULTI ELEMENT SELECTOR

console.log(document.getElementsByClassName('child'));
console.log(document.getElementsByClassName('child')[0]);
console.log(document.getElementsByClassName('container'));


let elems=document.getElementsByTagName('div');
    Array.from(elems).forEach(element=>{
        console.log(element);
        element.style.color="pink"
    });9