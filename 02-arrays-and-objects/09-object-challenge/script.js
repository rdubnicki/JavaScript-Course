// Step 1

const library = [
    {
        title: 'W pustyni i w puszczy',
        author: 'Henryk Sienkiewicz',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'Strażak',
        author: 'Joe Hill',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },    {
        title: 'Diuna',
        author: 'Frank Herbert',
        status: {
            own: true,
            reading: false,
            read: false,
        },
    },
]

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;


// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// for (const book of library) {
//     book.status.read = true;
// }

// Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);