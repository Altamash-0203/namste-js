var n = 2;  // in first phase memory allocated for variables and function and the value of variabel is undefined and the value of fuction is hold the code inside the function 
function square(num) {
  var ans = num * num;
  return ans;

}
var square2 = square(n);
var square4 = square(4);
// in code execution phase  the variable value is assigne to that particular variable and fuction values 

// after all execution of code the  functions are poped out from call stack.



