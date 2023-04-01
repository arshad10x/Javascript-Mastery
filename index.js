 
// >> VAR

// var age=25;
// console.log(age);
// age=30;
// console.log(age);
// var age=35;
// console.log(age);


// >> LET

//1. 

// let name="arsh";
// function DemoName(){
//     let name="10x";
//     console.log(name);
// }
// DemoName();
// console.log(name);

//2. 

// function printNumbers(){
//     for(let i=0;i<=5;i++){
//         console.log(i);
//     }
//     console.log(i); 
// }
// printNumbers();



// >> HOISTING

// x=5;
// console.log(x);
// var x;

// helloWorld();
// function helloWorld(){
//     console.log("Hello World!");
// }

// >> CONST

// const person={name:'arsh',age:30, role: 'developer'};
// person.age=24;
// console.log(person);

// const number=[1,2,3,4];
// number.push(5);
// console.log(number);

// >> TYPE CONVERSION

// let x;
// let y;
// let z;


// x=Number("3.14");
// y=String("3.14");
// z=Boolean("abc");
// console.log(x,typeof x );
// console.log(y,typeof y );
// console.log(z,typeof z );

// ------------------------------------------------------------------------------------------------------------


// >> DATA TYPE 

// var myName='arshad ahmed';
// console.log(myName);
// console.log(typeof(myName));

// var iamArsh=true;
// console.log(iamArsh);
// console.log(typeof(iamArsh));


// ------------------------------------------------------------------------------------------------------------


// >> NULL vs UNDEFINED

// var useless=null;
// console.log(useless);
// console.log(typeof(useless)); //object

// var standBy;
// console.log(standBy);
// console.log(typeof(standBy)); //undefined


// What is NAN?

// - Property of Global Object 
// - It is a variable in global scope
// - NOT-A-Number

// console.log("Arsh"-"10x"); // NAN
// var number=0987654321;
// console.log(isNaN(number));


// var myName="arshad";
// console.log(isNaN(myName));
// if(isNaN(number)){
//     console.log("Please enter a valid Phone Number")
// }
// else{
//     console.log("Valid Phone Number");
// }

// ------------------------------------------------------------------------------------------------------------

// >> Expression and Operators


// -Assignment operator( = ) 
// var x=5;
// var y=5;
// console.log(`is both nubers are equal:${x == y}`);


// -Arithmetic Operator( + )
// console.log(3+3); //6
// console.log(10-5); //5
// console.log(20/5); //4
// console.log(5*6); //30
// console.log("Reminder Operator " + 81%8);




// >> Increment Operator( ++x or x++)

// > postfix ++ 
// var num=15;
// var newNum=num++;
// console.log(num); //16
// console.log(newNum++); //15


// > ++ prefix 
// var num=15;
// var newNum=++num;
// console.log(num); //16
// console.log(newNum); //16

// var num=15;
// var newNum=++num +5;
// console.log(num); //16
// console.log(newNum++); //21



// >> Decrement Operator ( x-- or --x )


// > postfix --
// var num=15;
// var newNum=num-- +5;
// console.log(num); //14
// console.log(newNum); //20
// var num=15;
// var newNum=--num +5;
// console.log(num); //14
// console.log(newNum); //19



//  >> Comparision Operator( == and === )


// var a=30;
// var b=10;

// console.log(a == b); //fasle
// console.log(a != b); //true
// console.log(a>=b); //true
// console.log(a<=b); //false



// >> Logical Operator



// > AND ( && ) {TRUE when all exp are 'true' else FALSE}
// var a= 30;
// var b= -30;
// console.log(a > b && b > -50 && b<0); //false


// > OR ( || ) { Anyone is 'true' then TRUE else FALSE }
// var a= 30;
// var b= -20;
// console.log((a > b) || (b > 0) || (b < 0)); // True


// > NOT ( ! ) { Change True to 'false' and Fasle to 'true}

// var a=30;
// var b=-30;
// console.log(!((a > 0) || (b < 0)));
// console.log(!fasle);

// >> String Operator (Concatenation) 

// console.log("Hello world");
// console.log("Hello " + "World");

// var myName='Arsh';
// console.log(myName);
// console.log(myName + " Ahmed");


// ------------------------------------------------------------------------------------------------------------



//  >> Diffrence between == and === 

// var num1=5;
// var num2= '5'
// console.log(num1==num2); //true
// -   == check only value

// console.log(num1===num2); //false
// -   === check both values and typeof value




// >> Control Statement and Loops 



// -- If ... Else statement

// var tomr='sunny';

// if(tomr=='rain'){
//     console.log(`Take a raincoat`);
// }
// else{
//     console.log(`No need to raincoat`);
    
// }


// -- Write a program that work if a given leap year is a leap year or not


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



//  >> What is truthy and falsey value in Javascript?

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




// >> Functions 

// - Function Definitation Calling, Parameters, Argument

// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }
// sum(10,10);
// sum(20, 30);
// sum(50, 30)


// - Function Expression

// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }
// var funExp = sum(10,10);



// - Return Keyword

// function sum (a,b){
//     return total = a + b;
// }
// var funExp = sum (10,10);
// console.log(funExp);



// - Anonymous Function

// var funExp = function(a,b){
//     return total = a + b;
// }

// var sum = funExp(5,15);
// console.log('the sum of two no is ' + sum);


// ------------------------------------------------------------------------------------------------------------




// >> ECMASCRIPT 2015

// ✔ LET vs CONST vs VAR

// function biodata(){
//     let myFirstName = 'Arshad';
//     console.log(myFirstName); // Arshad
    
//     if(true){
//         var myLastName ="Ahmed";
//         console.log('inner ' + myLastName); // Ahmed
//         console.log('inner ' +myFirstName); // Arshad
//     }
//     console.log('innerOuter ' + myLastName); // Ahmed
// }
// biodata();



// - Template Literals

// for(let num =1; num<=10; num++){
//     let table =12;
//     console.log(`${table} * ${ num}  = ${table * num} `);
// }



// - Default Args/ Paramaters

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



// >> Arrays in JS



// var p1='Reyna';
// var p1='Sage';
// var p1='Raze';

// var p = ['Reyna', 'Sage', 'Raze', true, 20,12,23];
// console.log(p);


// > Travesal in Array

// navigate through an array

// var agents = ['Reyna', 'Sage', 'Raze', 'Omen'];
// console.log(agents[agents.length-1]);


// > use for loop to navigate

// var agents = ['Reyna', 'Sage', 'Raze', 'Omen'];

// for (var i=0; i<agents.length; i++) {
    
//     console.log(agents[i]);
// }


// > for in loop (gives index number)


// var agents = ['Reyna', 'Sage', 'Raze', 'Omen'];

// for(let elements in alphabates) {
//     console.log(elements);
// }


// > for of loop (give elements of particular array)


// var agents = ['Reyna', 'Sage', 'Raze', 'Omen'];

// for (let elements of agents) {
//     console.log(elements);
// }

// > forEach loop (calls a function for each element in an array )


// var agents = ['Reyna', 'Sage', 'Raze', 'Omen'];

// - combination of "for in" and "for of" loop
// - can't use break statement
// - support "this" argument. 

// agents.forEach(function(element, index,array){
//     console.log(`${element} index: ${index} ${array}`);
// })


// - by arrow function
// - arrow function doesn't support "this" argument. 


// agents.forEach((element,index,array) =>{
//     console.log(`${element} index: ${index} ${array}`);
    
// })


// ------------------------------------------------------------------------------------------------------------



// >> Searching and Filter in an Array



// -- 1. Array.prototype.indexOf()

// -- Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// -- Search from the 0th index number

// var agents = ['Reyna', 'Sage', 'Raze', 'Omen', 'Raze'];
// console.log(agents.indexOf('Raze',3));


// -- 2. Array.prototype.lastIndexOf()

// -- Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.



// var agents = ['Reyna', 'Sage', 'Raze', 'Omen', 'Raze'];
// console.log(agents.lastIndexOf('Raze',3));


// -- 3. Array.prototype.includes()

// -- Determines whether an array includes a certain element, returning true or false as appropriate.
// -- Do forward Search

// var agents = ['Reyna', 'Sage', 'Raze', 'Omen'];
// console.log(agents.includes('Raze'));
// console.log(agents.includes('Raze',3));



// -- 4. Array.prototype.find()

// -- arr.find(callback(element[, index[, array]])[, thisArg])
// -- Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// -- Problem: Return only the one element


// const prices = [200, 300, 350, 400, 450 , 500, 600];


// const findElement = prices.find((currVal) =>{
//     return currVal < 400;
// });

// console.log(findElement); -- Problem: Return only the one element



// > Removing Curly Braces

// const prices = [200, 300, 350, 400, 450 , 500, 600];

// const findElement = prices.find((currVal) => 
// currVal < 400
// );
// console.log(findElement);



// - -- 5. Array.prototype.findIndex()

// -- Returns the found index in array, if an element in the array satisfies the testing function, or -1 if the element is not found.


// const prices = [200, 300, 350, 400, 450 , 500, 600];
// console.log( prices.findIndex((currVal) => currVal < 400));



// -- 6. Array.prototype.filter()

// - Returns a new array containing all the elements of the calling array for which the provided filtering function returns true.

// const prices = [200, 300, 350, 400, 450 , 500, 600];

// const newPriceTag= prices.filter((elem, index) =>{
//     return elem > 1400;
// })
// console.log(newPriceTag);



// -- 7. Array.prototype.sort()

// -- Sorts an array in place. This method mutates the array and returns a reference to the same array.
// -- If number are sorted as string



// const days = ['Sun', 'Tue', 'Mon',  'Wed', 'Fri', 'Thu', 'sat'];

// console.log(days.sort());

// const arr1 = [1, 10000, 30, 34, 05, 6, 7];
// console.log(arr1.sort());


// >> Perform CURD


// > 8.Array.prototype.push()

// - The push() method adds one or more elements to the end of the array and returns the new lenght of the array

// const groceries = ['Sugar','Rice', 'Floor','Wheat','Snacks'];

// groceries.push('Eggs');
// console.log(groceries);
// const count = groceries.push('Eggs');
// console.log(count);


// > 9.Array.prototype.unshift()

// - The unshift() method adds one or more elements to the start of the array and returns the new lenght of the array

// Ex:1 
// const groceries = ['Sugar','Rice', 'Floor','Wheat','Snacks'];
// groceries.unshift('Eggs');
// console.log(groceries);


// Ex:2
// const number =[1,2,3,4]
// number.unshift(5,6)
// console.log(number);


