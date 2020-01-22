'use strict';

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

let answer = prompt("Are you 18 years old?", "Yes");
console.log(answer); // OK - true, Cansel - false
console.log(typeof(answer)); // test for type data
                            // answer has type data  - that always string

console.log(typeof(arr)); // object
console.log(typeof(null)); // object