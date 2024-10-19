
// number and maths in js 

//************number*********************************** */

const score = 300.12

console.log(score.toFixed(3)); // in this fixed uses  to print the points of the number ex_ 300.00

console.log(score.toPrecision(3)); // this is used to persious the number

// to seprate the numbers 

 const hundred = 1000000

 console.log(hundred.toLocaleString('en-IN'));
 

 //*********************maths***************************** */

console.log(Math);

console.log(Math.abs(-7)); // helps to remove negetive sign 

console.log(Math.round(4.6)); // its give the roundoff value 

console.log(Math.ceil(4.4)); // its give the next higher number

console.log(Math.floor(4.6)); // its give the next lower number

console.log(Math.max(4, 8, 10)); // it give the maximum number

console.log(Math.min(4, 8, 10)); // it give the minimum number

console.log(Math.pow(2, 3)); // it give the power of the number

console.log(Math.sqrt(16)); // it give the square root of the number

console.log(Math.random()); // it give the random number between 0 and 1

console.log(Math.random() * 10); // it give the random number between 0 and 10


// formula for the random number generate 

const  min=10
const max=20

console.log(Math.floor(Math.random() * (max-min +1 ))+max);
