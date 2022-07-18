console.log('hello');
document.getElementById('heading').addEventListener('click',function(e){
    console.log('you have clicked');

// location.href="//codewithharry.com";

console.log(e.target.id);


console.log(e.target);
console.log(e.offsetX);
console.log(e.offsetY);

console.log(e.clientX);
console.log(e.clientY);



});//whenever you click on the heading so in console 'you have clicked ' will print




