// Loop through arrays
const items = ['book', 'table', 'fork', 'car', 'battery'];
const users = [
    { name: 'Robert'},
    { name: 'Aleksandra'},
    { name: 'Paulina'},
    { name: 'Jan'}
];

// for (const item of items) {
//     console.log(item);
// }

for (const user of users) {
    console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}


// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', '30');

for (const [key, value] of map) {
    console.log(key, value);
}