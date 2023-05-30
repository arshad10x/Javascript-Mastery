// >> Control Statement and Loops

// -- If ... Else statement

// var tomorrow='sunny';

// if(tomorrow=='rain'){
//     console.log(`Take a raincoat`);
// }
// else{
//     console.log(`No need to raincoat`);
// }


//  >> What is truthy and falsy value in Javascript?

// -- 0, "", undefined, NaN,null, false

// if (NaN){
//     console.log(`We lost the game`);
// }
// else{
//     console.log(`We won the game`);
// }

// >> Conditional (ternary) operator
// -- Take three operands

// var age=19;
// console.log((age>=18)? "you can vote" : "you cannot vote");



// >> Switch Statement

// -- Find the area of circle, triangle and rectangle?

// var area='rectangle';
// var PI=3.14, l=5,b=4,r=3;
// if(area=="circle"){
//     console.log("the area of the circle is:" + PI*r**2);
// }else if(area=="triangle"){
//     console.log("the area of the triangle is:" + (l*b)/2)
// }else if(area=="rectangle"){
//     console.log("the area of the rectangle is:" +(l*b));
// }
// else{
//     console.log(`invalid area`);
// }

// -- To sort above code we use Switch Statement

// var area="rectangle";
// var PI=3.14, l=5,b=4,r=3;

// switch(area){
//     case 'circle':
//         console.log("the area of the circle is:" + PI*r**2);
//         break;
//     case 'triangle':
//         console.log("the area of the triangle is:" + (l*b)/2);
//         break;
//     case 'rectangle':
//         console.log("the area of the triangle is:" + (l*b));
//         break;
//     default:
//         console.log("Enter valid data");
// }

// >> While Loop

// var num=20;
// while(num <=10){
//     console.log(num); //infinite loop
//     num++;
// }

// >> Do while loop

// var num=0;
// do{
//     console.log(num);
//     num++;
// }
// while(num <=10);

// >> For Loop

//  for(var num=0; num<=10; num++){
//     console.log(num);
//  }

// ------------------------------------------------------------------------------------------------------------