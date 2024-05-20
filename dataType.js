console.log("primitive dataType");
let a = null;
let b = 345;
let c = true;
let d = BigInt = ("567") + BigInt("3");
let e = "hit";
let f = Symbol("I am nice symbol");
let g;
console.log(a, b, c, d, e, f, g);
console.log(typeof c);

console.log("Non primitive dataType objects");
const data = {
    "hitesh": 22,
    "divya": 22,
    "bhautik": 21,
    "dharmesh": undefined
}
console.log(data["hitesh"]);

//Question solution 
let a1 = "hitesh";
let b1 = 1;
console.log(a1 + b1);
console.log(typeof (a1 + b1));

const detail = {
    name: "hitesh",
    section: 1,
}
// detail =67 //throw error
detail["friend"]="dharmesh"
detail["name"]="hit"
console.log(detail)