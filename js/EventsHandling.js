const btnSave = document.getElementById('btnSave');

// 1. addEventListener() - Attaches an event handler to the specified element.
btnSave.addEventListener('click', handleClick);

function handleClick () { 
    console.log('Button Clicked');
}

// 2. removeEventListener() - Removes an event handler that has been attached with the addEventListener() method.
// btnSave.removeEventListener('click', handleClick);

