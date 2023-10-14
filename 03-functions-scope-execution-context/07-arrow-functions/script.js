// function add(a, b) {
//     return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
    return a + b;
}

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = a => a * 2;

// Returning an object

const createObject = () => ({
    name: 'Robert'
});

const numbers = [1,2,3,4,5];

// numbers.forEach(function (n) {
//     console.log(n);
// })

// Arrow Function in a callback
numbers.forEach(element => console.log(element));

console.log(add(1,2));
console.log(subtract(4,2));
console.log(double(8));
console.log(createObject);
