// prototype in js 

function multiply(num){

    return num*5

}

multiply.power = 2

console.log(multiply(5)) // 25

console.log(multiply.power) // 2
console.log(multiply.prototype);


// example of this function

function creatuser (username , score){

    this.username = username;
    this.score = score
}

creatuser.prototype.increment = function (){

    this.score++
}

creatuser.prototype.printme =function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new creatuser("chai", 24)
const tea = new  creatuser ("tea", 345)

chai.printme()

