
(function () {
    const user = 'George';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function (name) {
    console.log('Hello ' + name);
})('Shaaaawn');

(function hello() {
    console.log('Hello');
    
})();
hello();