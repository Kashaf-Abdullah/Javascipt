let element=document.createElement('li');//if there h1 so it means we are creating heading element

let text=document.createTextNode('I am a text node');
element.appendChild(text);
console.log(text);




//Add a class name to li element
element.className='childul';
element.id='createdLi';
element.setAttribute('title','mytitle');
 
element.innerText="Hello this is created by kashaf";
// ..if you want to bold the text so you must use innerHTML 
element.innerHTML="<b>Hello this is created by kashaf";




let ul=document.querySelector('ul.this');
console.log(ul);
ul.appendChild(element);
// console.log(ul);

// console.log(element);





let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
elem2.innerHTML="HELLO WORLD";
let h=document.querySelector('#heading');
// h.appendChild(elem2);//both headings will display

h.replaceWith(elem2);//previous heading will replace with new one



// let tnode=document.createTextNode('This is created node for elem2');
// elem2.appendChild(tnode);


// element.replaceWith(elem2);
v


let con=document.querySelector('.container');
con.removeChild();

