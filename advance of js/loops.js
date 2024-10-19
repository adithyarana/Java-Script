
// loops in js 

let i=10
for(let i= 0 ; i<=10 ;i++){
    const elemnt = i;
    console.log(elemnt);
}

// printing tall tables from loops 

for (let i = 0; i <= 10; i++) {
   console.log(`outer loop value: ${i}`);

   for (let j = 0; j <= 10; j++) {
     console.log(i + '*' + j + '=' +i*j);
     
    
   }
   
    
}

// using array with for loop 

let myarr = ["flash", "superman " , "batman"]
console.log(myarr.length);
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    console.log(element);
    
}

// breks and continue 

for (let i = 0; i <= 10; i++) { // this is suse to exit the code 
    if(i===5){
        console.log(" 5 is detected ");
        
        break;
    }
    console.log(i);
    
}

// countinue 
 
for (let i = 0; i <= 10; i++) { // this is used to skip the value 
    if(i===5){
        console.log("skip 5 ");
        
        continue;
    }
    console.log(i);
    
}

