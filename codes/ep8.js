//Hoisting with let, const, and var


// var ==>
     
    console.log(b); // undefined
    var b = 15;
    console.log(b); // 15
    console.log(window.b); // 15

    
//let

    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    // let a = 10;
    console.log(a); // 10
    console.log(window.a); // undefined


//const

    const b = 100;
    b = 1000; // TypeError: Assignment to constant variable.

/* ----------------------------------------------------------------*/


//temproral dead zone (TDZ)

// Example:

console.log(a);


//let a = 10;

/* ----------------------------------------------------------------*/


//types of errors


// 1- ReferenceError  

    console.log(err)  // if we access value before intilization then it shows reffrence error


//2-syntx error

   let a=10
   //let a=100   // if we redecaler and let variable then it throws syntax error

//Type error

 const b=10
  b=100        //if we change const varible then it throws type error




