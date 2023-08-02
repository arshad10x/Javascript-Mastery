// Call, Apply & Blind

//Problem

let userDetails1 = {
    name:'Arshad',
    age:24,
    Designation: "UI Developer",
   
}

let printDetails=function(state){
    console.log(this.name+ " " + state) ;
}

printDetails.call(userDetails1,"Maharashtra");

let userDetails2 = {
    name:'Arsh',
    age:24,
    Designation: "UI Developer",
    
}
printDetails.call(userDetails2);

let userDetails3 = {
    name:'Arish',
    age:24,
    Designation: "UI Developer",
    
}
printDetails.call(userDetails3);
