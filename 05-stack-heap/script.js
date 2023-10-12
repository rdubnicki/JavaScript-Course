// Values are stored on the stack
const name = 'Avon';
const age = 34;

// Reference values are stored on the heap
const person = {
    name: 'Robert',
    age: '35',
};

let newName = name;
newName = 'Stringer';

let newPerson = person;
newPerson.name = 'Mouzone';

console.log(name, newName);
console.log(person, newPerson);