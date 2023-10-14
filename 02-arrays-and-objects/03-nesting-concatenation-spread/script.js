let x;
const fruits = ['apple', 'pear', 'grape', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits[4][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

// x = fruits.concat(berries);

// Spread Operator (...)

x = [...fruits, ...berries];

// Flatten Arrays

const arr = [1, 2, [3, 4], 5, [6, 7], 8];

// console.log(arr);

x = arr.flat();

// Static Methods On Array Objects

x = Array.isArray(fruits);
x = Array.isArray('Hello');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);

