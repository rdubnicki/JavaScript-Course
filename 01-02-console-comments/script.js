console.log(100);
console.log('Hello World!');
console.log(20, 'Hello', true);

const x = 120;
console.log(x);

console.error('Alert!');

console.warn('Warning!');

console.table({name: 'Robert', email: 'rddubnic@gmail.com'});

console.group('simple');
console.log(x);
console.error('Atenzione!');
console.warn('Nuclear!');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);