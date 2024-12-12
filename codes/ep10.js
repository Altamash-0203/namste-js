//_________closures_________//


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
///_____________________/////


 // Step 1: Define the outer function 'name'
function name() {
    // Step 2: Declare a variable 'n' inside the outer function
    var n = "shaikh"; 

    // Step 3: Return an inner function 'user' from the outer function
    // This inner function has access to the 'n' variable from the outer function
    return function user() {
        // Step 4: The inner function uses the 'n' variable from the outer function
        console.log(n);  // Output: "shaikh"
    };
}

// Step 5: Call the outer function 'name' and store the returned inner function in 'getname'
let getname = name();  // Here, 'getname' now holds the inner function 'user'

// Step 6: Call the 'getname' function (which is actually calling 'user')
getname();  // Output: "shaikh"


//////////////////////////////////////////////////////////////////////////////


// EX-1- adder

f// Step 1: Define the outer function 'adds' which takes a number 'num' as a parameter
function adds(num) {
    // Step 2: Return an inner function 'adder' which takes a number 'b' as a parameter
    // The inner function 'adder' has access to 'num' from the outer function (closure)
    return function adder(b) {
        // Step 3: Inside 'adder', print the sum of 'num' and 'b'
        console.log(num + b);  // This will print the result of adding 'num' and 'b'
    }
}

// Step 4: Call the outer function 'adds' with the argument 9 and store the returned inner function in 'addTo9'
let addTo9 = adds(9);  // Now 'addTo9' is the inner function 'adder' with 'num' set to 9

// Step 5: Call the 'addTo9' function with different values of 'b'
addTo9(20);  // Output: 9 + 20 = 29
addTo9(39);  // Output: 9 + 39 = 48


/////////////////////////////////////////\\\\

//practical use of closure 

// Step 1: Define the outer function 'makeSizer' that accepts a parameter 'size'
function makeSizer(size) {
    // Step 2: Return an inner function that changes the font size of the document body
    return function () {
      // Step 3: Set the font size of the document body to the specified size (in pixels)
      document.body.style.fontSize = `${size}px`;  // Uses the 'size' variable from the outer function
    };
  }
  
  // Step 4: Create three functions for different font sizes by calling 'makeSizer' with different arguments
  const size12 = makeSizer(12);  // Returns a function that sets the font size to 12px
  const size14 = makeSizer(14);  // Returns a function that sets the font size to 14px
  const size16 = makeSizer(16);  // Returns a function that sets the font size to 16px
  
  // Step 5: Attach the returned functions to click events for buttons with specific IDs
  document.getElementById("size-12").onclick = size12;  // When the button with id 'size-12' is clicked, set font size to 12px
  document.getElementById("size-14").onclick = size14;  // When the button with id 'size-14' is clicked, set font size to 14px
  document.getElementById("size-16").onclick = size16;  // When the button with id 'size-16' is clicked, set font size to 16px
  