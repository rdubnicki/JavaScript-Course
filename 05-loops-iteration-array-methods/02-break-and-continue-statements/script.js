// Break

for (let i = 0; i <= 20; i++) {
    if (i === 12) {
        console.log('Breaking...');
        break;
    }
    console.log(i);
}

console.log('**********************');

// Continue
for (let j = 0; j <= 20; j++) {
    if(j === 13) {
        console.log('Skipping 13...');
        continue;
    }
    console.log(j);
}