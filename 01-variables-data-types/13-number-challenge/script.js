let x, y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

let sumOutput, differenceOutput, productOutput, quotientOutput, rmOutput;

sumOutput = x.toString() + ' + ' + y.toString() + ' = ' + (x + y);
differenceOutput = x.toString() + ' - ' + y.toString() + ' = ' + (x - y);
productOutput = x.toString() + ' * ' + y.toString() + ' = ' + (x * y);
quotientOutput = x.toString() + ' / ' + y.toString() + ' = ' + (x / y);
rmOutput = x.toString() + ' % ' + y.toString() + ' = ' + (x % y);


console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);