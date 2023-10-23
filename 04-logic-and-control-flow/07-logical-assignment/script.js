// ||= assigns the right side value only if the lefts is a falsy value.

let a = false;

// if (!a) {
//     a = 20;
// }

// a = a || 20;

a ||= 20;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.

let b = 30;

// if(b) {
//     b = 40;
// }

// b = b && 40;

b &&= 40;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined.

let c = null;

// if(c === null || c === undefined) {
//     c = 60;
// }

// c = c ?? 65;

c ??= 70;

console.log(c);
