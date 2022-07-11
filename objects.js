// Objects & Functions
const user = {
    name: 'jon',
    age: 39,
    nationality: 'french',
    address: {
        street: 'street 101',
        city: 'paris',
        country: 'france'
    },
}

// Key & Value Pair
// Define a user object (name, age, nationality)

// console.log property name from user
// console.log(user.age)

// we access a property of an object using the dot notation
// console.log(user.name)

// Add a property (favouriteFood)
user.favouriteFood = 'peaches';

user.age = 25
// console.log(user)

// console.log(user)

// Remove property (delete)

// delete user.nationality

// console.log('user after nationality deletion', user)


// nested object (address)
// console.log(user.address.street)
// console.log(user.address.country)
// console.log(user.address.city)


// function on object (return name and age message)
function greeting (userObject) {
    return `Welcome ${userObject.name} ${userObject.age}`
}

console.log(greeting(user))

for(let i = 0; i < 5; i++) {
    if(i === 2) {
        console.log('we found number 2')
        // return;
    } else {
        console.log(i)
    }
}


// loop over object (for in loop)
for(key in user) {
    console.log('key', key);
    console.log('value', user[key]);
}

// object notations (bracket notation user[key]) (dot notation user.name)

// create an array of objects (users array)
const users = [
    { name: 'wendy', age: 30 },
    { name: 'john', age: 40 }
]

// loop over array of objects
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}