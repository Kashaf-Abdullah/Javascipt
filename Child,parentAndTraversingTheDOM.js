let cont=document.querySelector('.no')
console.log(cont);


let c=document.querySelector('.container');
console.log(c.childNodes);//all child nodes of container

// child nodes will show you all text
// children will show all tags except text
console.log(c.children);//all childrem of container



let nodename=c.childNodes[0].nodename;
console.log(nodename);//h1
let nodeType=c.childNodes[0].nodeType;

 console.log(nodeType)

//  NODE Type
//  1. element
//  2.attribute
//  3.textnode
//  8.comment
//  9.document
//   10.doctype




// to contain children of children

let con=document.querySelector('div.container');
console.log(con.children[1].children[0].children);

// to contain first element and last element

console.log(con.firstElementChild);
console.log(con.lastChild);
console.log(con.lastElementChild);

console.log(con.childElementCount);//count  child element of div contaoiner

console.log(con.firstElementChild.parentElement);

console.log(con.firstElementChild.nextElementSibling);

console.log(con.firstElementChild.nextElementSibling.nextElementSibling);