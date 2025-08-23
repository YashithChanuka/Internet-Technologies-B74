const box = document.querySelector('.box');

// ======== Mouse Events ========

// ======= Single click event =========
// box.addEventListener('click', function () { 
//     console.log("Clicked the box");
// })

// ========= Double click event ======
// box.addEventListener('dblclick', function () { 
//     console.log("Double clicked the box");
// })

// ========= Mouse down ========
// box.addEventListener('mousedown', function () { 
//     console.log('Mouse Pressed');
// })

// ====== Mouse-up event ======
// box.addEventListener('mouseup', function () { 
//     console.log('Mouse Released');
// })

// ========= Mouse Move event =====
// box.addEventListener('mousemove', function () { 
//     console.log("Mouse Moved.")
// })

// ======= Mouse over event ======
// box.addEventListener('mouseover', function () { 
//     console.log("Mouse Over.");
// })

// ========= Mouse out event ========
// box.addEventListener('mouseout', function () { 
//     console.log("Mouse Out.")
// })

// ========= Keyboard Events ========

let textField = document.getElementById('input');

// ========= Keydown event ========
// textField.addEventListener('keydown', function (event) { 
//     console.log("Key pressed.");
// })

// ======== Keyup event ========
// textField.addEventListener('keyup', function (event) { 
//     conso

// ==========

// textField.addEventListener('keydown', function (event) { 
//     console.log(event.key);
//     if (event.key == 'Enter') {
//         alert("Enter pressed.");
//     }
// })

// textField.addEventListener('keydown', function (event) { 
//     let keyCode = event.keyCode;
//     if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
//         return;
//     }
//     event.preventDefault();
// })

textField.addEventListener('keydown', function (event) { 
    if (event.key === "Enter" || event.key === "Delete") {
        return; 
    }
    if (/^[0-9]$/.test(event.key)) { 
        return;
    }
    event.preventDefault();
})