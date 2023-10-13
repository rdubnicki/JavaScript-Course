// Ways to declare a variable
// var, let, const

let firstName = 'Robert';
let lastName = 'Dubnicki';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;

console.log(age);

let score;

score = 4;

console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 44;

const arr = [2,5,6,9];

arr.push(23);

console.log(arr);

const person = {
    name: 'Fryderyk',
}

person.name = 'George';
person.email = 'georgef@gmail.com';

console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
      e = 340,
      f = 20;

console.log(b);

console.log(e);