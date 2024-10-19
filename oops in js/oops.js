const user ={
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "12345"

    }

}

 

console.log(user.name);


// new is the conatructor functions 

//const promisone = new Promise()

function user1(username , logincount , isoggedin){
    this.username = username;
    this.logincount = logincount;
    this.isoggedin = isoggedin;
    return this
}

// without new keyword the values will overright 

const user2 = new user1("jane", 10, true);
const user3 = new user1("jane1", 11 , false);

console.log(user2);
console.log(user3);