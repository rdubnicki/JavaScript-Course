const colorObject = {
    color1: 'red',
    color2: 'blue',
    color3: 'purple',
    color4: 'yellow',
    color5: 'cyan'
}

for (const key in colorObject) {
    console.log(key, colorObject[key]);
}

const colorArray = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArray) {
    console.log(colorArray[key]);
}