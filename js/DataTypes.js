
// ====== Primitive Data Types =======

// 1. Number - Represents both integer and floating-point numbers.
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1);
console.log(typeof num2);

console.log("=====================");

// 2. String - Represents a sequence of characters
let customerName = "John Doe";
console.log(typeof customerName);

console.log("===============")

// 3. Boolean -   Represents a logical entity and can have two values: true or false.
let isLogged = true;
console.log(typeof isLogged);

console.log("================");

// 4. Undefined - Represents an unassigned value
let x;
console.log(x);
console.log(typeof x);

console.log("===============")

// 5. Null - Represents an intentional absence of any object value.
let y = null;
console.log(typeof y);

console.log("===================");

// 6. BigInt - Represents whole numbers larger than 2^53 - 1.
let number = 12326762346823641286872163213n;
console.log(typeof number);

console.log("===============");

// =========== Non-primitive Data types =========// 

// 7. Object
let student = {
    firstName: "Kamal",
    lastName: "Silva",
    age: 30
}
console.log(student);
console.log(typeof student);

console.log("===============");

let colors = ['Red', 'Green', 'Blue'];
console.log(colors);
console.log(typeof colors);

console.log("=================");

function greet() { 
    console.log("Hello World!");
}
greet();
console.log(typeof greet);

console.log("===============");

let today = new Date();
console.log(today);
console.log(typeof today);