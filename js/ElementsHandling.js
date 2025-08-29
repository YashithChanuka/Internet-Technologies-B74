console.log("Element Handling is loaded...");

// 1. createElement() - Creates a new element with the specified tag name.
let newDiv = document.createElement('div');

newDiv.id = 'alert-success';
newDiv.style.backgroundColor = 'green';
newDiv.style.color = 'white';
newDiv.style.padding = '12px';
newDiv.style.borderRadius = '8px';
newDiv.style.marginTop = '12px';
newDiv.textContent = 'Success! Your action was completed.';

const card = document.querySelector('.card');

// 2. append() - Inserts the elements into the specific element
card.append(newDiv);

const alert = document.getElementById('alert-success');
// alert.remove();
// card.remove();

let clonedDiv = newDiv.cloneNode(true);
clonedDiv.id = 'alert-error';
clonedDiv.style.backgroundColor = 'red';
clonedDiv.textContent = 'Error! Something went wrong.';
card.append(clonedDiv);
