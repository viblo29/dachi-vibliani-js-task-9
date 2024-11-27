const numbers = [3, 7, 12, 5, 8];

const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const checkNumbers = numbers.reduce((acc, i) => acc + i, 0 );
if (checkNumbers > 10 && checkNumbers % 2 === 0) {
    console.log(`True`)
} else {
    console.log(`False`)
}