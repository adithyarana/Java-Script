
// if and else in the js control flow 

const isuserlogin =true

if (isuserlogin){ // in this if the condition is true the code will execute otherw no

    console.log("welcome user"); 

}


// scope in cf

const score = 200

if (score > 100){
    const power = "fly"
    console.log(`Congratulations, you have power ${power}`);
}

//console.log(`Congratulations, you have power ${power}`); this will not rn bacsuse of scope in the scope it will run 


// implecet scope 

const balance = 1000

if (balance > 500) console.log("test");

// mutiple condition

const grade = "A"

if (grade === "A" || grade === "B" || grade === "C"){
    console.log("You are good");
}

// example real lfe use 

// in and use all the condition should be true otherwise code will not execute 

const userloggin= true
const debitcard =  true
const loggedinfromgoogle= false
const logginfromemail = true

if(userloggin && debitcard){
    console.log("allow to shopping");
    
}else{
    console.log("not allow for the shopping");
    
}

if(loggedinfromgoogle || logginfromemail || false){
    console.log("user loged in ");
    
}
