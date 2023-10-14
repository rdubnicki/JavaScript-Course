let x;

const arr = [4, 8, 15, 16, 23, 42];

// arr.push(108);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(11);

x = arr.indexOf(23);

x = arr.slice(1, 4);

// x = arr.splice(2, 3);

// x = arr.splice(3, 1);

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);