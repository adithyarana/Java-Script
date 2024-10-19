// call and this in js 

function setusername (username){
    this.username = "adithya"
}

function createuser (username , email , password){

    setusername.call(this, username)  // this is important 

    this.email = email;
    this.password = password;
}

const chai = new createuser("chai", "chai@123.com", "123" )
console.log(chai);
