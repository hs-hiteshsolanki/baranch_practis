let marks = {
    harry: 90,
    subham: 9,
    lovish: 56,
    monika: 4
}

// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("the mark of "+ Object.keys(marks)[i] +" are "+ marks[Object.keys(marks)[i]]);
// }

// for(let i in marks){
//     console.log("the mark of "+ i +" are "+ marks[i]);
// }

// let ch=3;
// let i;
// while(i != ch){
//     i=prompt("enter a number")
// }
// console.log("you have entered a correct number")

const mean= (a , b , c , d) => {
    return (a + b + c + d) / 4;
}
console.log(mean(4,5,6,7))