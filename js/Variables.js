console.log("Variables.js");

// ========== 1. let - Block scoped variable ========== 
// let x = 10;
// console.log(x);

// function testLet() { 
//     console.log(x);
//     let y = 20;
//     console.log(y);
//     if (true) {
//         console.log(x);
//         console.log(y);
//         let z = 30;
//         console.log(z);
//     }
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// testLet();

// ======== 2. const - Block scoped variable ============
// const x = 10;
// console.log(x);

// x = 20;

// ========== 3. var- Function scoped variable ==========
var x = 10;

function testVar() { 
    console.log(x);
    var z = 30;
    if (true) {
        var y = 20;
        console.log(y);
    }
    console.log(y);
    console.log(z);
}
testVar();
console.log(z);