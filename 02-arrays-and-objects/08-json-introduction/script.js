const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
}

// Convert to JSON String
const str = JSON.stringify(post);

// Will not work, need to parse JSON
console.log(str.id);

// Parse JSON
const obj = JSON.parse(str);

// This will work
console.log(obj.id);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body'
    }
];

const str2 = JSON.stringify(posts);



console.log(str2);