// Topics to cover
// Introduce conditional statements and pseudocode

// if (true) {
// if the condition is true this block of code will run
// } else {
// if the condition is false this block of code will run
// }

const isTheLightTurnedOn = false;
// if the light is on console.log the power is working
if(isTheLightTurnedOn === true){
    // console.log('the power is working');
} else {
    // console.log('we need to fix the power')
}
// else the light is off console.log we need to fix the power

// 1. Comparison operators > , >= , < , <= (numbers)
// e.g. grocery budget tracker (compare last week and this weeks grocery bill)
const lastWeeksGroceryBill = 100;
const thisWeeksGroceryBill = 100;

if(thisWeeksGroceryBill > lastWeeksGroceryBill) {
    // console.log('you need to stop spending so much money and save more');
}

if (thisWeeksGroceryBill < lastWeeksGroceryBill) {
    // console.log('well done for saving some money this week');
}

if(thisWeeksGroceryBill === lastWeeksGroceryBill) {
    // console.log('you spent the same as last week');
}


// 2. logical or  ( || ) operator
// e.g. meal time tracker (check if lunchtime or dinnertime allow people to eat if not alert user to stop snacking)
const lunchTime  = 12;
const breakfastTime  = 9;
const dinnerTime = 18;

const currentTime = 18;

if( lunchTime || dinnerTime || breakfastTime === currentTime ) {
    console.log('you are allowed to eat now')
} else {
    console.log('stop snacking')
}

if( lunchTime === currentTime || dinnerTime === currentTime) {
    console.log('you are allowed to eat now');
} else {
    console.log('stop snacking');
}

// 3. logical and ( && ) operator 
// create a password and email checker (plan out the pseudocode)

const userInDatabase = 'kenny';
const userTryingToLogin = 'kenny';

const userPasswordInDatabase = '12345';
const userPasswordTryingToLogin = '12345';
// incorrect username - the username does not exist
if(userInDatabase !== userTryingToLogin) {
    console.log('the user does not exist');
}
// check username and password match for the user if true allow user to login
else if (
    userPasswordInDatabase === userPasswordTryingToLogin 
    && 
    userInDatabase === userTryingToLogin
    ) {
        console.log('welcome user');
    }
// incorrect password - incorrect password, reset your password
else {
    console.log('incorrect password, reset your password here');
}



// 4. ternary operator 
// if statement does not return a value
// ternary operator returns a value
// e.g track your mimo dev completion 

const myCurrentProgress = 20;

const courseStatus = myCurrentProgress === 100 ? 
    'you have completed the course' 
    : 
    'you still have some work to do';

console.log('courseStatus: ', courseStatus);


// 5. switch statement
// e.g. city checker

const cityToCheck = 'random city';

switch(cityToCheck) {
    case 'London':
        console.log('welcome to london')
    break;
    case 'Boston':
        console.log('Welcome to Boston');
    break;
    case 'Berlin':
        console.log('welcome to berlin')
    break;
    default:
        console.log('could not find the city you were looking for')
    break;
}