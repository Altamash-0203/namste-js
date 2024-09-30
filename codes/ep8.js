//Hoisting with let, const, and var


// var ==>
     
    console.log(b); // undefined
    var b = 15;
    console.log(b); // 15
    console.log(window.b); // 15

    
//let

    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 10;
    console.log(a); // 10
    console.log(window.a); // undefined


//const

    const b = 100;
    b = 1000; // TypeError: Assignment to constant variable.



//temproral dead zone (TDZ)

// Example:

console.log(a);


let a = 10;

//.