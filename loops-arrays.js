// Arrays

// create a cities array
//                0          1         2          3
const cities = ['London', 'Paris', 'Berlin', 'Stockholm'];
// const numbers = [10, 11, 14, 10];

// display the length of the cities array
console.log(cities.length);

// show index of an element within the array
// retreive a value using the index from the array
console.log(cities[0])

// push a new element to the array
// console.log('cities before push method', cities)
// cities.push('Madrid');
// console.log('cities after push method', cities)

// pop that new element off the end of the array
// cities.pop();
// console.log('after pop', cities)

// remove an element from a specific index
// cities.splice(1, 1);
console.log(cities)

// change the value of an element within the array
// cities[2] = 'Kansas';
// console.log(cities)


// Loops
// for loops
// e.g create a loop which runs 5 times printing out the iterator and a message of what iteration the loop is at
for(let i = 0; i < 5; i++) {
    // console.log('We are on iteration number ' + i);
}

// e.g. loop over array of cities and print out a welcome message for each city
for(let i = 0; i < cities.length; i++) {
    // level 2. add a conditional to check if the city is Berlin and print a different message
    if(cities[i] === 'Berlin') {
        console.log('Berlin is at index ' + i )
    } else {
        console.log('Welcome to ' + cities[i])
    }
}

// create a list numbers of your choice
const numbers = [3,1,2,5,4,8,6,8];

// if the number is divisable by 2 print it is an even number
// else print it is an odd number
for(let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i] + ' is an even number')
    } else {
        console.log(numbers[i] + ' is an odd number')
    }
}

console.log(3 % 2 === 0);


// while loops
// e.g. loop 5 times each time incrementing
// show drawbacks of while loops
// if you do not increment the iterator, it will create an infinite loop
// top tip would be to avoid the while loop if possible

