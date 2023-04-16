//------------------------------------------------------
//  USER INPUT

// let username;
// document.getElementById('myButton').onclick=function(){
//     username=document.getElementById('myText').value;
//    document.getElementById('myLabel').innerHTML="Hello"+username;
// }

// let age=window.prompt("How old are you?");
// console.log(typeof(age));
// age=Number(age);
// age+=1;
// console.log(`You are ${age} years old`);

//------------------------------------------------------

// TYPE CONVERSION

// let x;
// let y;
// let z;


// x=Number("3.14");
// y=String("3.14");
// z=Boolean("abc");
// console.log(x,typeof x );
// console.log(y,typeof y );
// console.log(z,typeof z );

//------------------------------------------------------

// CONST

// const PI=3.14;
// let radius;
// let circumference;

// radius=window.prompt("Enter the radius of a circle");
// radius=Number(radius);

// circumference=2 * PI * radius;

// console.log("The circumference is: ", circumference);

//------------------------------------------------------

//  MATH FUNCTION


// let x=3.14;
// let y=5;
// let z=10;
// let maximun;
// let minimum;
// x=Math.round(x);
// x=Math.ceil(x);
// x=Math.pow(x,2);
// x=Math.sqrt(x);
// x=Math.abs(x)
// maximun=Math.max(x,y,z);
// minimum = Math.min(x,y,z);
// x=Math.PI
// console.log(x);


// Find hypotenouse 

// let a;
// let b;
// let c;

 

// document.getElementById("submitButton").onclick=function(){
//     a=document.getElementById("aTextBox").value;
//     a=Number(a);
   
//     b=document.getElementById("bTextBox").value;

//     b=Number(b);
   
//     c=Math.round(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
   
//     document.getElementById("cLabel").innerHTML="Side C: "+c;
// }


   
  
// function Calculate(a, b, operation) {
//     switch (operation) {
//       case "add":
//         return a + b;
//       case "subtract":
//         return a - b;
//       case "multiply":
//         return a * b;
//       case "divide":
//         return a / b;
//       default:
//         return "Invalid Operation";
//     }
//   }
  
//   var result = Calculate(10, 20, "add");
//   console.log(`The result is: ${result}`);
  
//   result = Calculate(10, 20, "subtract");
//   console.log(`The result is: ${result}`);
  
//   result = Calculate(10, 20, "multiply");
//   console.log(`The result is: ${result}`);
  
//   result = Calculate(10, 20, "divide");
//   console.log(`The result is: ${result}`);
  
//   result = Calculate(10, 20, "modulo");
//   console.log(`The result is: ${result}`);

  

//   function WaveShaperNode(values) {
//     if (values.length === 3) {
//       console.log("Values are for triangle");
//     } else if (values.length === 4) {
//       console.log("Values are for square");
//     } else {
//       console.log("Values are not for triangle or square");
//     }
//   }
  
//   WaveShaperNode([10, 10, 10, 10]);
  
//   WaveShaperNode([10, 10, 10]);
  
//   WaveShaperNode([10, 10, 10, 10, 10]);

//   function Shapes(side1, side2, side3, side4){
//     if(side1 === side2 && side2 === side3 && side3 === side4){
//       return 'This value is for Square..';
//      }
//     else if(side1 === side3 && side2 === side4){
//       return 'This value is for Ractangle..';
//     }
//     else{
//       return 'Values are not valid for Square and Ractangle..'
//     }
//     }
//     var result = Shapes(10, 20, 10, 10);
//     var result1 = Shapes(10, 20, 10, 20);
//     document.write(result);

//   function Shape(values){
//     if(values.length === 3){
//      return 'This Value is for Tringle ';
//     }
//     else if(values.length === 4){
//      return 'This value is for Square';
//     }
//     else{
//      return 'Enter valid number for Shapes';
//     }
//    }
//    var result = Shape([10, 10, 10]);
//    var result1 = Shape([10, 10, 10, 10]);
//    var result2 = Shape([10, 10, 10, 10, 10]);
//    document.write(result,'<br>', result1,'<br>',result2);

//    function multipleShapes(side1, side2, side3) {
//     if (side1 === side2 && side1 === side3) {
//       return "Equilateral Triangle";
//     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//       return "Isosceles Triangle";
//     } else {
//       return "Scalene Triangle";
//     }
//   }

//   document.write(multipleShapes(10, 10, 10));
//   document.write(multipleShapes(10, 20, 20));
//   document.write(multipleShapes(10, 20, 30));
