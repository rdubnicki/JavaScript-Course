let x;

const person = {
    name: 'Robert Dubnicki',
    age: 34,
    isAdmin: true,
    address: {
        street: '8th Jagielly Street',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
}

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[1];

person.name = "Bonzo";
person['isAdmin'] = false;
delete person.age;

person.hasChildren = true;

person.greet = function() {
    console.log(`Hello, my name is ${this.name}`)
}
person.greet();

const person2 = {
    'first name': 'Robert',
    'last name': 'Dubnicki',
}

x = person2['first name'];

x = person;

console.log(x);