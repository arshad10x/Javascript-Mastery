//Rest & Spread Operator
// Case in Array

//1Rest Operator

function addNumbers(a,b,c,...other){
    console.log(other);
return a+b+c;
}

const result = addNumbers(2,3,4,8,9)
console.log(result);

//2.Spread Operator

var names = ["Arsh", "Arish","Arshad"];

function getNames(name1, name2, name3){
console.log(name1,name2,name3);
}
getNames(...names) 

// Case in Object

//1.Rest Operator

var students={
    name:'arsh',
    age:'23',
    email:'arsh@gmail.com'
}
const {...arr}=students //destructing
console.log(arr);


//2.Spread Operator

var newStudents={
    ...students,
    age:'24'
}
console.log(newStudents)