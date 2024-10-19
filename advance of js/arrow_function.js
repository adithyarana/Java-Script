// arrow function in js

const  user ={
    username:"adithya",
    price:333,

    welcomemessage :function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }


}

user.welcomemessage()
console.log(this);


// arrow function 

function chai(){
    console.log(this);
    
}

chai()

const adi = () => {
    let username= "adithya"
    console.log(this);
    
}

adi()

// two wayas to declare arrow  function 

// method 1 
const addtwo = (num1 , num2 ) => {  // in currly brackets we should erite the return keyword 


    return num1 + num2;

}

console.log(addtwo(10,20));



// 2 method

const multiply = (num1 , num2 ) => num1 * num2; // in this we no need return keyword 

console.log(multiply(10,20));


