// Challenge 1: Fahrenheit to Celsius
// Create a function called `getCelsius()` that takes a temperature in Fahrenheit
// as an argument and returns the temperature in celsius.

/* Formula for conversion:
`(F - 32) * 5 / 9`
*/

function getCelsiusClassic(temp) {
    const cTemp = (temp - 32) * 5 / 9;
    return`The temperature is ${Math.round(cTemp)} \xB0 C.`
}

const getCelsiusArrow = (f) => {
    return `The temperature is ${Math.round((f - 32) * 5 / 9)} \xB0 C`;
}

console.log(getCelsiusClassic(32));
console.log(getCelsiusArrow(64));

// Challenge 2: Min Max Challenge
// Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers
// in the array.

/* ```JavaScript
console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }
*/

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {min,
            max};
}

console.log(minMax([5,6,56,233,212]));


// Challenge 3:
// Create an IIFE (Immediately Invoked Function Expression)
// that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

// 1.  The area of a rectangle is `length * width`. These should get passed into the IIFE as arguments.
// 2.  You do not have to return anything from this function, just log to the console.

((length, width) => {
    const area = length * width;
    const consoleOutput = `The area of rectangle with length ${length} and width ${width} is ${area} `;
    console.log(consoleOutput);
    }
)(4,8);