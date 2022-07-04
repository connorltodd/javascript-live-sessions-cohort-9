// Objects & Functions
const user = {
    name: 'jon',
    age: '39',
    nationality: 'french',
    address: {
        street: 'street 101',
        city: 'paris',
        country: 'france'
    }
}

// Key & Value Pair
// Define a user object (name, age, nationality)

// console.log property name from user

// we access a property of an object using the dot notation
// console.log(user.name)

// Add a property (favouriteFood)
user.favouriteFood = 'peaches';

user.age = 25

// console.log(user)

// Remove property (delete)

delete user.nationality

// console.log('user after nationality deletion', user)


// nested object (address)
console.log(user.address.street)
console.log(user.address.country)
console.log(user.address.city)


// function on object (return name and age message)
// loop over object (for in loop)
// create an array of objects (users array)
// loop over array of objects