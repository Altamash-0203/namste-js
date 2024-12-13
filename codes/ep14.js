//callback funtion 

const calculate =(a,b,opration)=>
{
    return opration (a,b);
}

// METHOD-1
 const addition=calculate(3,4,function(num1,num2)
 {
    return num1+num2
 })
 console.log(addition)


 //METHOD-2
  const subtraction=(a,b) => a-b;
  const subresult=calculate(4,7,subtraction)
console.log(subresult);


//METHOD-3

function multiply(a,b)
{
    return a*b
}

const mulresult=calculate(4,5,multiply)

console.log(mulresult)