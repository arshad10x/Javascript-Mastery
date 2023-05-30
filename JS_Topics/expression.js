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

// > NOT ( ! ) { Change True to 'false' and False to 'true}

// var a=30;
// var b=-30;
// console.log(!((a > 0) || (b < 0)));
// console.log(!false);

// >> String Operator (Concatenation)

// console.log("Hello world");
// console.log("Hello " + "World");

// var myName='Arsh';
// console.log(myName);
// console.log(myName + " Ahmed");

// ------------------------------------------------------------------------------------------------------------

//  >> Difference between == and ===

// var num1=5;
// var num2= '5'
// console.log(num1==num2); //true
// -   == check only value

// console.log(num1===num2); //false
// -   === check both values and typeof value