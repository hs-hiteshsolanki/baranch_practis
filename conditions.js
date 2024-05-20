// let a=prompt("Hey whats you age")
// a=Number.parseInt(a);
a=19
if(a<0){
    //alert("This is an invalid age");
    console.log("This is an invalid age");
  }
  else if(a<9){
    console.log("You are a kid and you cannot even think of driving");
  }
  else if(a<18 && a>=9){
    console.log("You are a kid and you can think of driving after 18");
  }
  else{
    console.log("You can now drive as you are above 18");
  }

  // HomeWork - Explore switch statement and write a basic program in the comments

// Setup our variable to switch on
let switchValue = "JavaScript";

// Our switch statement
switch (switchValue) {
 case "Python":
    console.log("You're using Python!");
    break;
 case "JavaScript":
    console.log("You're using JavaScript!");
    break;
 case "Ruby":
    console.log("You're using Ruby!");
    break;
 default:
    console.log("Unknown language!");
}