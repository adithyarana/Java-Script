// DATA TYPE CONSERSION 

let score= "33and"

console.log(typeof score);

let valuenumber = Number(score)
console.log(valuenumber);

console.log(typeof score);

// "33"=> 33
//"33abc"=> NaN


// conversion to boolean 


let islogged = "adithya"

let bolleanislogged = Boolean(islogged)
console.log(bolleanislogged);


// conversion in string 

let somenumber= 33

let numberof = String(somenumber)
console.log(numberof);
console.log( typeof numberof);



// **************************OPERATION********************************

let str1 = "helloi"
let str2 = " adithya"

str3=str1+str2

console.log(str3);
console.log("1"+2); //output is 12 
console.log("1"+2+2);//output is 122
console.log(2+2+"1");// in this the output will be the differnt 41

// postfix and prefix 

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"


// in this the output is change 
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



