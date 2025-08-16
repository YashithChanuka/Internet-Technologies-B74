console.log("AttributeModifications.js is loaded...");

const link = document.querySelector('a');
console.log(link.getAttribute('href')); // Get the href attribute

link.setAttribute('href', 'https://www.facebook.com'); // Set a new href attribute

link.setAttribute('target', '_blank'); // Set target attribute to open in a new tab

link.removeAttribute('target'); // Remove the target attribute