// if(condition){
//     //code
// }else{
//     //code
// }


//Grade system

//10 - Great job
// 5 - work Harder
// 2 - poor
// 0 - fail

// Boolean - T/F

let grade = 0;

if(grade >=10){
    console.log('Great job');
}
else if(grade >=5){
    console.log('Work Harder');
}
else if(grade >=1){
    console.log('Poor');
}
else{
    console.log('Fail');
}

var whoIsHere = 'user'

if(whoIsHere === 'user'){
    console.log('Welcome user');
    console.log('you can access all courses');
}
else if(whoIsHere === 'teacher'){
    console.log('Welcome Teacher  ');
    console.log('Allow access to his courses');
}
else{
    console.log('MESSAGE: please verify your email');
    console.log('send user an email for verification');
}