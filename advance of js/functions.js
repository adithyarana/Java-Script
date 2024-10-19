
// functions in js

function saymyname (){
    console.log("adithya");
}

saymyname();


function add(){

    let a=12;
    let b=20;
    console.log(a+b);
}
add();

function multiply(num1,num2){

    let result =num1*num2
    return result

    
}

console.log(multiply(10,20));


function logiusermessage(username = "sam"){

    if(username=== undefined){
       console.log("plz enter the usrnmame");
       
    }

    return `${username} just logined in `
}

console.log(logiusermessage("adithya"));


// *******************************************************

// rest opeartor  is to print all the values with out giving the all the values onnly give dots 

function calculatecartprizce(...num1){

    return num1 
}

console.log(calculatecartprizce(2,3,4,5));


// how to acces objects through functions 


const user ={

    name:"adithya",
    age:23
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and the age is ${anyobject.age}`);
    
}

handleobject(user)
