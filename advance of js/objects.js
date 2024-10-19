// objects in js

//singleton 
 // objects literals 

 // symbols we shouls use only in square brackets 

 const sym=Symbol("key1")

 const user={
    name:"adithya",
    "fullname":"adithya rana",
    [sym]:"mykey1",
    age:24,
    city:"bengaluru",
    email:"adithya@gmail.com",
    isloggeed:false,
    lastlogindays : ["monday" , "saturday"]

 }

 // two types to access the objects 

console.log(user.name);
console.log(user["email"]);
console.log(user.fullname);
console.log( user[sym]);


// freeze keyword used because we cannot change the values after freezing the objects

user.email="adithya.google.com"
//Object.freeze(user)
user.email="adithya.chatgpt.com"
console.log(user.email);


user.greeting = function(){
    console.log(`hello user, ${this.name}`)
}

console.log(user.greeting());

// string interpolation

