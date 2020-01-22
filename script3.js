'use strict'; // it means: we write in new standard ES6

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0); // Infinity
console.log('string'*9); // Nan - not number

let something;
console.log(something); // undefined

let person = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(person.name); // John
console.log(person["name"]); // John

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]); // apple.bmp
console.log(arr[0]); // plum.png

// alert("Hello World!");

// confirm("Are you here?");

// let answer = confirm("Are you here?");
// console.log(answer); // OK - true, Cansel - false

// '+' converts a string to a number
let answer = +prompt("Are you 18 years old?", "Yes"); // unary plus
console.log(typeof(answer));

console.log("arr" + " - object"); // concatenations
console.log(4 + " - object"); // string
console.log(4 + + " - object"); // NAN

let incr =10, // = assignment of values 
    decr =10; // = assignment of values 

    // incr++;
    // decr--;
    // console.log(incr);
    // console.log(decr);

    console.log(incr++);
    console.log(decr--);

    console.log(++incr);
    console.log(--decr);

    console.log(5%2); // 1

    console.log("2" == 2); // == true - equality of data values
    console.log("2" === 2); // === false - data type equality

    let isChecked = false,
        isClose = false;
        
    console.log(isChecked && isClose);
    console.log(isChecked || !isClose);

