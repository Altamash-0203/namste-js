//HOISTING IN JAVASCRIPT 

//ex-1
console.log(x);  // memory is allocated to x but before code execution phase x is pritef so value of x is undefined 
getname()  
var x=5
function getname()
{
    var y=10
    console.log(y);
}
