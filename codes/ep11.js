function x() {
    var i = 1; // Declare a variable 'i' and set it to 1
    setTimeout(function () { // Set a timeout to execute a function after 3 seconds
        console.log(i); // This will print the value of 'i' after 3 seconds
    }, 3000); // 3000 milliseconds = 3 seconds
    
    console.log("Namaste Javascript"); // This will print immediately when the function is called
}

x(); // Call the function 'x'

    



 //eample -2
 
 function k() {
    // Start a loop that runs from i = 1 to i = 10
    for (let i = 1; i <= 10; i++) {
        setTimeout(
            function() { // Set a timeout to run this function after a delay
                console.log(i); // This will print the value of 'i' after the delay
            },
            i * 10000 // The delay increases with each iteration (10 seconds for i=1, 20 seconds for i=2, and so on)
        );
    }
}

k(); // Call the function 'k'







 //example-3
//using-var

function a() {
    // Start a loop that runs from i = 1 to i = 5
    for (var i = 1; i <= 5; i++) {
        // Define function 'b' inside the loop, which accepts an argument 'i'
        function b(i) {
            setTimeout(function() { 
                // Set a timeout to print the value of 'i' after a delay
                console.log(i); // This will print the current value of 'i' after the delay
            }, i * 1000); // The delay increases with each iteration (1 second for i=1, 2 seconds for i=2, etc.)
        }
        b(i); // Call the function 'b' with the current value of 'i'
    }
}

a(); // Call the function 'a'

