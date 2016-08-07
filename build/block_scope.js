"use strict";

// function scope

for (var a = 0; a < 20; a++) {
    var _b = 2; // let is a new var every time
}

console.log(b); //undefined
