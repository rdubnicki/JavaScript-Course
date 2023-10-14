let x;

// Array Literal
const numbers = [14, 58, 283, 10, 5];

// Array Constructor

const fruits = new Array('Apple', 'Orange', 'Grape', 'Banana');

x = fruits[3];

x = `My favourite fruit is ${fruits[3]}`;

x = numbers[2] + numbers[3];

x = numbers.length;

fruits[1] = 'Pear';

// fruits.length = 2;

fruits[fruits.length] = 'Blueberry';
fruits[fruits.length] = 'Peach';
fruits[fruits.length] = 'Strawberry';

console.log(fruits);