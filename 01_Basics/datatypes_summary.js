// Primitive 
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('432');
const anotherId = Symbol('432');

console.log(id === anotherId);

const bigNumber = 342523242n;
console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Pavitra", "Gaurav", "Himanshu"]

let myObj = {
    name: "Pavitra",
    age: 18,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);