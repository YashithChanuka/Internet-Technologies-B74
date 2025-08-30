// 1. Creating an array

// Array Literal
let colors = ['Red', 'Green', 'Orange'];
console.log(colors);

console.log("==================");

// create using 'new' keyword
let colors2 = new Array("Red", "Blue", "Green");
console.log(colors2);

console.log("==================");

let myArray = [10, 'Kamal', true, undefined, { name: "John", age: 30 }, [1, 2, 3]];
console.log(myArray);

console.log("==================");

// 2. Access elements
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); // undefined

console.log("==================");

// 3. Modify elements
colors[0] = "Yellow";
console.log(colors);

console.log("==================");

// 4. Array length
console.log(colors.length);

console.log("=========================");

// Built-in array functions

let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
console.log(fruits);

console.log("=========================");

// 5. push() - Adds new element to the end of an array
fruits.push('Grapes');
console.log(fruits);

console.log("=========================");

// 6. pop() - Removes the last element from an array
fruits.pop();
console.log(fruits);

console.log("=========================");

// 7. unshift() - Adds new element to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits);

console.log("=========================");

// 8. shift() - Removes the first element from an array
fruits.shift();
console.log(fruits);

console.log("=========================");

// 9. concat() - Joins two or more arrays
let vegetables = ['Tomato', 'Potato', 'Onion'];
let foodItems = fruits.concat(vegetables);
console.log(foodItems);

console.log("=========================");

// 10. forEach() - Calls a function for each element in an array
foodItems.forEach(item => { 
    console.log(item);
})

console.log("=========================");

// 11. map() - Creates a new array with the results of calling a provided function on every element in the array
let upperCaseItems = foodItems.map(item => item.toUpperCase());
console.log(upperCaseItems);

console.log("=========================");

// 12. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let filteredItems = foodItems.filter(item => item.length > 5);
console.log(filteredItems);





