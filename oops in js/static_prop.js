
// staic properities

// in the static method the function will not be accessed by calling 

class user {
    constructor(username){
        this.username = username;
        
    }

    logme(){
        console.log(`username : ${this.username}`);
        
    }

     static createid(){
        return`123`
    }
    
}

const adi= new user("adithya")
// console.log(adi.createid());
123
class teacher extends user{
    constructor(username ,email){
        super(username)
        this.email = email;
    }
}

const tae = new teacher("adithya", "adi@123")

tae.createid();