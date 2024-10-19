class  user{
    
     constructor(email , password){
         this.email = email;
         this.password = password;
     }

     get email(){
         return this._email.toUpperCase()
     }

     set email(value){
          this._email = value  // we should not return setters 
     }

     get password(){
        return this._password.toUpperCase()
     }

     set password(value){
          this._password = value
     }
} 

const adi = new user("adit@gmail.com", "abc")
console.log(adi.password);
console.log(adi.email);

