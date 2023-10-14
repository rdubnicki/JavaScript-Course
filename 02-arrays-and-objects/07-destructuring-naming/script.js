const firstName = 'Bobby';
const lastName = 'Digital';
const age = 30;

const person = { 
    firstName,
    lastName,
    age,
}

console.log(person.age);

// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Robert',
    },
};

const { 
    id: todoId,
    title, 
    user: { name } 
}  = todo;

console.log(todoId);


// Destructure Arrays

const numbers = [32, 34, 45, 40];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);