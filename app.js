// -----------var

// var learning = 'JavaScript';
// console.log(learning);

// variables with 2 names
// var firstName = 'Anthony Yannos';

// var learning;
// learning = 'JavaScript';

// -------------- start multiple variables
// var learning = 'JavaScript',
//     name = 'Anthony'; 
// console.log(learning);
// console.log(name);

// var learning, name, age;
// learning = 'JavaScript';
// name = 'Anthony';
// age = 28;


// ------------let

// let learning = 'Modern JavaScript';

// let product1 = 'book',    
//     product2 = 'shirt';

// console.log(product1);
// console.log(product2);

// multiple variables are done the same as var

// let shoppingCart = ['Product1, 'Product2', 'Product3'];


// -----------------------const

// const name = 'Anthony'

// console.log(name);

// difference between var, let and const

// var is really deprecated

// main difference between is let and var, you cannot create a new var with the same name

// main diff between const and let, const requires initial value, cannot change value or reassign that value while the program is being executed

//------- Different data types 

// let variable = 'Anthony'; - string
// variable = 20; - number
// variable = false; - boolean
// variable = Symbol('My new symbol'); - Symbol
// arrays = ['HTML', 'JS', 'CSS'];
// objects below

// let person = {
//     name = 'Anthony';
//     country = 'Canada'
// }

// console.log(typeof person);

// let symbolES6 = Symbol('This is a symbol');
// console.log(typeof symbolES6);

// dates

// let today = new Date();

// console.log(typeof today);




/*

let band = 'Metallica',
    song = 'Enter Sandman';

let playing;

playing = 'Playing: ' + song + ' by ' + band;

console.log(playing);

*/

let learning;

learning = 'Modern ';
learning += 'JavaScript ';
learning += 'at Udemy';

console.log(learning);