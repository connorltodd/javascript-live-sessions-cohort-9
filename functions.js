// Functions
// console.log inside functions
// e.g. create a function which displays a welcome message sending in a name parameter

// here we have the function definition
// your function should ideally have a single purpose
// function welcomeMessageGenerator () {
//     console.log('hello')
// }


// function execution
// welcomeMessageGenerator()


// return value from function and wrap in console.log
// e.g. change the function to console.log the return value of the function
// function welcomeMessageGenerator () {
//     return 'hello';
// }

// console.log(welcomeMessageGenerator())


// e.g. use the return value of the function and store it in a variable to use it later on
// create a favourite food function that receives a favourite food parameter it will return a message stating what the favourite food is. Store this in a variable
// print out the result of the favourite food variable and the welcome message variable.

// parameter are in the parentheses of the function definition
function favouriteFoodMessageGenerator (food) {
    return `My favourite food is ${food}`;
}

function welcomeMessageGenerator (name) {
    return `Welcome ${name}`
}


// arguments are in the parentheses below
// console.log(favouriteFoodMessageGenerator('pizza'))

const petersWelcome = welcomeMessageGenerator('peter');
const josiesFavouriteFood = favouriteFoodMessageGenerator('cheese');

const petersCustomMessage = petersWelcome + ', ' + josiesFavouriteFood
// console.log('petersWelcome', petersWelcome)
console.log(petersCustomMessage)

// combine function and conditionals
// add a conditional inside the favourite sport condition of your choice

function sportChecker (sport) {
    if(sport === 'tennis') {
        console.log('We recommend you to watch this documentary about andy murray')
    }
}

sportChecker('golf')
sportChecker('tennis')


// combine function, loop and array
// e.g create a cityWelcomeMessage function which uses the cities array and prints out a welcome message for each city

function cityWelcomeMessage (cities) {
    for(let i = 0; i < cities.length; i++) {
        if(cities[i] === 'paris') {
            console.log(`Welcome to ${cities[i]}, we have a special offer for you today`)
        } else {
            console.log(`Welcome to ${cities[i]}`)
        }
    }
}

cityWelcomeMessage(['berlin', 'new york', 'paris', 'london'])

// combine function, loop, array and conditional
// e.g. add an if statement to print out a different message for the city of your choice.