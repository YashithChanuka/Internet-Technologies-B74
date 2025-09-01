// setTimeout(function, delay) - Executes a function, after waiting a specified number of milliseconds.
// let timeoutId = setTimeout(() => {
//     console.log("Hello World");
// }, 2000);
// clearTimeout(timeoutId);

// ===============

// setInterval(function, interval) - Same as setTimeout(), but repeats the execution of the function continuously.
// let intervalId = setInterval(() => {
//     console.log("Hello World!");
// }, 1000);
// clearInterval(intervalId);

// ========

// Exercise

let counter = 0

let intervalId = setInterval(() => {
    counter++;
    console.log("Number : " + counter)
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10500);


