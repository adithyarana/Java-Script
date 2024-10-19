// objects merge 

const obj1={1:"a" , 2:"b"}
const obj2={3:"a" , 4:"b"}

const merged= {...obj1,...obj2} // this is easy to merge the objects 




// const mer= obj1.concat(obj2) the concat will not work in objects 

console.log(merged);
const obj3 = Object.assign({},obj1,obj2)  // we can aslo merge with assign keyword 
console.log(obj3);



// how to accses the values and keys in objects 

const tinderuser={
    name:"Adithya",
    age:25,
    interests:["reading", "painting"],
    location:"New York"
}


console.log(Object.keys(tinderuser));

console.log(Object.values(tinderuser));

