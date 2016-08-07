
// block scope

//let and const both create the block scope

for(var a=0;a<20;a++){
    let b = 2;  // let is a new var every time
}

console.log(b);  //undefined


for(var a=0;a<20;a++){
    const b = 2;  // const is a new var every time
    // bar = 3  error
}

console.log(b);  //undefined