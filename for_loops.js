let sum=0;
let n=7;
n=Number.parseInt(n);
for(let i=1; i<=n; i++){
    sum+=i;
}
console.log("sum of first " + n + " natural number "+ sum);

let obj ={
    hitesh:90,
    dharmesh:90,
    bhautik:85
}

//for in loop 
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
}

//for of loop  data is iterable
for(let b of "Hitesh"){
    console.log(b);
}