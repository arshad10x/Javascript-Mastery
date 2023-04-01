// 1. Leap Year

// var year = 2024;
// debugger;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log(`Year ${year} is a leap year`);
//         }
//         else{
//             console.log(`Year ${year} is not a leap year`);
//         }
//     }
//     else{
//     console.log(`Year ${year} is a leap year`);
//     }
// }
// else{
//     console.log(`Year ${year} is not a leap year`);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2. simple calculator

// let result;

// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// 3. Days of Week

// let day = 4;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Sunday';
//     break;
//   case 2:
//     dayName = 'Monday';
//     break;
//   case 3:
//     dayName = 'Tuesday';
//     break;
//   case 4:
//     dayName = 'Wednesday';
//     break;
//   case 5:
//     dayName = 'Thursday';
//     break;
//   case 6:
//     dayName = 'Friday';
//     break;
//   case 7:
//     dayName = 'Saturday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }

// console.log(dayName); 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// 4. day count based of a month

// let year = 2016;
// let month = 2;
// let dayCount;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     dayCount = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     dayCount = 30;
//     break;
//   case 2:
//     // if leap year
//     if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
//       dayCount = 29;
//     } else {
//       dayCount = 28;
//     }
//     break;
//   default:
//     dayCount = -1; // invalid month
// }

// console.log(dayCount); // 29

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// 5. print numbers from 1 to 10

// function printNumbers() {
//     for(var i=1;i<=10;i++){
//       console.log(i);
//     }
//   }
  
//   printNumbers() 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// 6.print Even numbers

// function printEven(arr) {
//     for (var i=0;i<arr.length;i++){
//       if(arr[i]%2==0){
//         console.log(arr[i]); //print even number
//       }  
//     }
//   }
//   var arr = [13,23,12,45,22,48,66,100]
  
//   printEven(arr) 


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// 7. to delete all occurrence of element

// function deleteElement(arr, ele) {
//     for (var i=0;i<arr.length;i++){
//       if(arr[i]==ele){
//         arr.splice(i,1); //Delete element from array
//       }
//     }
//     return arr;
//   }
//   var arr = [23,56,4,78,5,63,45,210,56];
//   arr = deleteElement(arr, 56)
  
//   console.log(arr);
  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  

// 8.find the no of digits in a number

// function digitCount(num) {
//     var count=0; //return 1 for pow=0
//     while(num!=0){
//       num=Math.floor(num/10);
//       count++;
//     }
//     return count;
//   }
//   console.log(digitCount(8367)); //4
//   console.log(digitCount(563349)); //6

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// 9. Fibonacci series for a given value of N

// function fibonacci(n) {
//     var n1=0;
//     var n2=1;
//     var count=2;    
//     var n3;
//     console.log(n1,n2);
//     while(count<n){
//      n3=n1+n2;
//      console.log(n3); //print current element
//      n1=n2;
//      n2=n3;
//      count++;
//     }
//   }
  
//   fibonacci(8) 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// 10. Write a JS code to count all letters in a word


let str = "Suggesting";
let charFreq = new Array(26).fill(0);
str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
  let charCode = str.charCodeAt(i);
  if (charCode >= 97 && charCode <= 122) { // Check if lowercase letter
    charFreq[charCode - 97]++;
  }
}

for (let i = 0; i < 26; i++) {
  let char = String.fromCharCode(i + 97);
  if (charFreq[i] > 0) {
    console.log(`Character ${char} has occurred ${charFreq[i]} times`);
  }
}
