// >> Arrays in JS

// var p1='Reyna';
// var p1='Sage';
// var p1='Raze';

// var p = ['Reyna', 'Sage', 'Raze', true, 20,12,23];
// console.log(p);



// > Traversal in Array

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

// > 9.Array.prototype.pop()
// -- The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

// const marvelCharacters = ['IronMan','SpiderMan','Scarlwt Witch','Thor','Hulk'];

// console.log(marvelCharacters.pop()); //remove last element and return it
// console.log(marvelCharacters);

// > 10.Array.prototype.unshift()

// - The unshift() method adds one or more elements to the start of the array and returns the new lenght of the array

// Ex:1
// const groceries = ['Sugar','Rice', 'Floor','Wheat','Snacks'];
// groceries.unshift('Eggs');
// console.log(groceries);

// Ex:2
// const number =[1,2,3,4]
// number.unshift(5,6)
// console.log(number);




// > 11.Array.prototype.shift()

// - The shift() method removes the first element from the array and returns that removed element. This method changes the array length.



// const groceries = ["Sugar", "Rice", "Floor", "Wheat", "Snacks"];
// console.log(groceries.shift());  // remove
// console.log(groceries);


// ================================================


// let name = ['a','b','c','d']
// name.push('f');
// name.unshift('e');
// console.log(name)
// console.log(name[2]);
// console.log(name.length);

// let name = ['ash','bsh','csh','dsh']
// name.splice(1,2);
// console.log(name);



// forEach vs Map

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num * num);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// const fruits = ["apple", "banana", "orange"];
// fruits.forEach((fruit) => console.log(fruit));

// let num = [10,30,50,35,20];
// let num1 = [10,20,30];
// let num2 = [40,50,60,10];
// let a =num.slice(1,4)
// console.log(a);
// console.log(num1.concat(num2));
// console.log(num2.indexOf(40));
// console.log(num1.reverse());
// console.log(num.sort());


