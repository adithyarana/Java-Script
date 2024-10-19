
// IIFE (immediate invoved function expression )  this is important to interview process 


(function chai(){
    console.log(`db connected`);  // this is named iife 
    
})(); // to end the function we need the semicolen otherwise the next function will give error



// arrow function acces iife 

(  (name) => { // unnamed iife 
    console.log(`db connected ${name}`);
    
})('adithya');