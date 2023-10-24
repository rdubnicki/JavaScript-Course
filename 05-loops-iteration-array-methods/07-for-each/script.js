const socials = ['Twitter', 'LinkedIn', 'Instagram', 'Facebook', 'Telegram', 'TikTok', 'MySpace'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//     console.log(item);
// });

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));

function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com'},
    { name: 'Facebook', url: 'https://facebook.com'},
    { name: 'LinkedIn', url: 'https://linkedin.com'},
    { name: 'Instagram', url: 'https://instagram.com'}
]

socialObjs.forEach((item) => console.log(item.url));