
// concat use 
const marvalhero = ["thor" , "ironman" , "spiderman"]
const dc=["superman" , "flash", "batman"]

const superheroes = marvalhero.concat(dc)

console.log(superheroes);


// use of the spred  same as concat works we can use any of them 

const all_new_heros=[...marvalhero, ...dc]
console.log(all_new_heros);


// this flat() helps to seprate the arrys that are mixed in one array 
const another_array=[1,2,3,[1,2,3],[1,2,3],[1,2,3]]
const real=another_array.flat(Infinity)
console.log(real);


// use of the sort 
let name=[1,2,3,5,7,3,9]

name.sort()

console.log(name);


console.log(Array.isArray("adithya")); // this will tell that the number or string is array or not 

console.log(Array.isArray([1,2,3])); // same 
console.log(Array.from("adithya")); // this will convert the string in to  array 


// this of also create the array 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); 

