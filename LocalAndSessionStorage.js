// Add a key value pair inside local storage

localStorage.setItem('name','kashaf');
localStorage.setItem('name2','Ayesha');

// note :you cannot add an array
let fruit=['banana','apple'];
localStorage('FRUITNAME',fruit); //will converted into string
localStorage('FRUITNAME',JSON.stringify(fruit)); //stringify function is used to convert array into function




// .................................

// window.localStorage 
// typeof window.localStorage  object

// window.localStorage.name   kashaf







// .........................................


// RETRIEVE AN ITEM LOCAL STORAGE 

// localStorage.getItem('name');   kashaf
console.log( localStorage.getItem('name'))

// go to storage -> select local storage -->then you will see 
// key and value pair


// ..................................

// IF YOU WANT TO CLEAR LOCAL Storage
// localStorage.clear();


// REMOVE ITEM FROM LOCAL STORAGE
localStorage.removeItem('name2');
// ..............................

// SESSION Storage
// session storage has same function as local storage


sessionStorage.setItem('sessionname','kashaf');
sessionStorage.setItem('sessionname2','Ayesha');

//when we close the browser and then open it later ,so key value pair will remain 
// present