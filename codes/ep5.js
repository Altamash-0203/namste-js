var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10
// this and window both are (this===window)

//----------------------------------------------------------------\\

// Example 1: Global Scope (this refers to window)  

console.log(this); // Refers to the window object in the browser

// Example of accessing a global variable using 'this'
var name = "John";
console.log(this.name); // Outputs: "John"


//----------------------------------------------------------------\\

//Example 2: Inside a Function (this in function refers to window in non-strict mode)
function showName() {
    console.log(this); // Refers to the window object
  }
  
  showName();

//----------------------------------------------------------------\\


// Example 3: Inside an Object (method, this refers to the object)
const person = {
  name: "Alice",
  sayName: function() {
    console.log(this.name); // Refers to 'person' object
  }
};

person.sayName(); // Outputs: "Alice"   
//In this case, this inside the sayName method refers to the person object because it was called on person.


//---------------------------_____________________-------------------------------------\\

