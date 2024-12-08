//block 

{
    let a=10
    const b=20
    //this is block
}


//block scoped 

{var k=10 
    let l=20
    const m=30 
}
console.log(k); // access
console.log(l); //error
console.log(m); //error






// shadowing in javascript


let x=20
{
    let x=40
    console.log(x)//output -40
}
console.log(x) //output-20   is called shadowing





//illegal shadowing

let b=30
{
    let b=40
    console.log(b);
    
}
console.log(b);