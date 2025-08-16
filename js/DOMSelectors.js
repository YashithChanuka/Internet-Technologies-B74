console.log("DOMSelectors.js is loaded...");

console.log(document);

// 1. Selects using element ID
const heading = document.getElementById("heading");
console.log(heading);

// 2. Selects elements by class name - returns a HTMLCollection
const paragraphs = document.getElementsByClassName("paragraph")
console.log(paragraphs);

// 3. Select elements by tag name - returns an HTMLCollection
const allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

// 4. Select the first element that matches a specific CSS selector(s)
const querySelector = document.querySelector("#heading");
console.log(querySelector);

// 5. Select all elements that match a specific CSS selector(s) - returns NodeList
const selectors = document.querySelectorAll(".box h2");
console.log(selectors);
