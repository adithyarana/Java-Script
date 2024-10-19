// class , conmstructor , and static   es6 

class user {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
 
    }

    encryptpassword(){
        return`${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user ("chai", "chao@.com", "1233")

console.log(chai.encryptpassword());
console.log(chai.changeusername());
 

// inheritance in js  example 

class user1 {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`usernae is ${this.username}`);
        
    }
}

class teacher extends user1{
    constructor(username , email , password){
        super(username) // calling parent constructor
        this.email = email
        this.password=password
    }

    teach(){
        console.log(`adithya is drinking  ${this.username}`);
        
    }
}

const adi = new teacher("chai" , "cahi@123", "123")
adi.teach()

const masalachai = new user1("masala chai")

masalachai.logme()

console.log(adi === masalachai);
