console.log("opretors")
// aarithmetic operations
let a=20;
let b=2;
console.log("a + b =", a+b)
console.log("a - b =", a-b)
console.log("a / b =", a/b)
console.log("a * b =", a*b)
console.log("a ** b =", a**b)
console.log("a % b =", a%b)
console.log("a++ =", a++)
console.log("a =", a)
console.log("a-- =", a--)

console.log("++a =", ++a)
console.log("--a =", --a)

//comparison Operators
let comp1=6;
let comp2="6";
console.log("comp1 == comp2 is ", comp1==comp2);
console.log("comp1 != comp2 is ", comp1!=comp2);
console.log("comp1 === comp2 is ", comp1===comp2); //check data and its data type
console.log("comp1 !== comp2 is ", comp1!==comp2);
console.log("comp1 > comp2 is ", comp1>comp2);

//Logical Operators it works in boolean
let x=5;
let y=6;
console.log(x<y && x==5) //if true and true = true any other false
console.log(x>y || x==5) //if false and false = false any other true
console.log(!true) 


  //turnery operator
let age=prompt("Hey whats you age")
age=Number.parseInt(age);
console.log("You can", (age<18? "not drive" :"drive"))