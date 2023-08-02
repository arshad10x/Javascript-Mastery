// Call, Apply & Blind

//Problem

let userDetails1 = {
    name:'Arshad',
    age:24,
    Designation: "UI Developer",
    printDetails:function(){
        console.log(this);
    }
}

userDetails1.printDetails();

let userDetails2 = {
    name:'Arshad',
    age:24,
    Designation: "UI Developer",
    
}
userDetails1.printDetails.call(userDetails2)