// >> ECMASCRIPT 2015


// ✔ LET vs CONST vs VAR

// function bioData(){
//     let myFirstName = 'Arshad';
//     console.log(myFirstName); // Arshad

//     if(true){
//         var myLastName ="Ahmed";
//         console.log('inner ' + myLastName); // Ahmed
//         console.log('inner ' +myFirstName); // Arshad
//     }
//     console.log('innerOuter ' + myLastName); // Ahmed
// }
// bioData();

// - Template Literals

// for(let num =1; num<=10; num++){
//     let table =12;
//     console.log(`${table} * ${ num}  = ${table * num} `);
// }



// - Default Args/ Parameters

// function mul(a,b=5){
//     return a*b;
// }
// console.log(mul(5)); // 25

// - Fat Arrow Function

// console.log(sum());
// function sum(){
//     let a = 5; b = 6;
//     let sum = a+b;
//     return `The sum of the two number is ${sum}`;
// }

// - 1st
// console.log(sum());

// const sum = () => {
//     let a = 5; b = 6;
//     let sum = a+b;
//     return `The sum of the two number is ${sum}`;
// }

// - 2nd

// const sum = () =>{
//     return `The sum of two number is ${(a=5) + (b=5)}`
// }
// console.log(sum());

// - 3rd

// const sum = () =>
// `The sum of two number is ${(a=5) + (b=5)}`
// console.log(sum());
