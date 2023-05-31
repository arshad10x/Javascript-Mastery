// && - AND operator - Both need to be true
// || - OR operator - One side need to be true

let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log("Welcome");
    console.log("Access granted to paid course");
}else if(isVerified || isGuest){
    console.log("Allow free previews");
}else{
    console.log("Please contact admin")
}