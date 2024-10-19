 const discripter = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(discripter);

// console.log(Math.PI);


const chai = {
  
    name : 'ginger chai',
    price : 456,
    isavalable : true

}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai , 'name' ,{
    writable : false,
    enumerable :true,
    configurable :false
    
})


console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for (let  [key , value] of Object.entries(chai)) {
  console.log(`${key} : ${value} `);
     
}