
// console.log(myname.trim().length); we can use this to remove extra spaces in the string 
// but we use the true lenght leyword to  trim alll the extra spaces from all strings

// let myname = "adithya  "
// console.log(myname.truelength);

let herosm =["batman","thor"]

let heropoewer ={
    name: "Hero",
    power: "Fire",
    attack: function(){
        console.log(`${this.name} attacks with ${this.power}`);
    }
}

Object.prototype.adithya= function(){
    console.log(`adithya is present in all onjects`);
    
}

Array.prototype.heyadi = function(){
    console.log(`heyadi is present in all arrays`);
}

herosm.adithya();

herosm.heyadi();

// mordern syntax of inheritance 

Object.setPrototypeOf()