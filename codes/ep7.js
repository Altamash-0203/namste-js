// example---1

function a()
{
    console.log(b);
}
var b=10;
a()

/*
#in memory allocation phase memory allocated to function and variable.

#in code exexrion pahse GEC creted   function a is stored memory line 3 is ignored goes on line 7 and assign value of b =10

#on line 8 function a invoked  and local execution is created  inside fuction execute line 5 it search value of b in local memory 
 if b value is not find in local memory it will serch in global memory this is known as lexixal envoirment 

K
*/


/*===================================================================================================================================*/
//exampal-2

function a() {
    function c() {
      console.log(b); // Outputs: 10
    }
    c();
  }
  var b = 10;
  a();
//   Even though function c is nested inside a, it can still access b from the global scope.
/*===================================================================================================================================*/



//example-3 
function a() {
    function c() {
      var b = 100;
      console.log(b); // Outputs: 100
    }
    c();
  }
  var b = 10;
  a();
//Here, the local variable b inside c overrides the global b. Local scope takes precedence over global scope.


/*===================================================================================================================================*/

//example-4
function a() {
    var b = 10;
    function c() {
      console.log(b); // Outputs: 10
    }
    c();
  }
  a();
  console.log(b); // Error: b is not defined
  //The local variable b inside function a is accessible only within a and c, but not outside.
/*===================================================================================================================================*/
  