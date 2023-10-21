// FALSY VALUES
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

const x = {};

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats

const children = 0 ;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = ['Post One', 'Post Two'];

if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts');
}

// Checking for empty objects
const user = {};

if (Object.keys(user).length > 0) {
    console.log('List user');
} else {
    console.log('No User');
}

// Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === 0);