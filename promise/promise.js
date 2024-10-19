// A Promise is a proxy for a value not necessarily known when the promise is created. 
//It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: 
//instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Promises are used in JavaScript for asynchronous programming and can be chained together using the then() and catch() methods.

// Create a new Promise

const promiseone = new Promise((resolve, reject)=>{
  
    // do an async task 
    // db calls , cryptography, network

    setTimeout(() => {
        console.log('async task is complete');
        resolve() // this is connected with then keyword
    }, 1000);
})

// then() method: This method is called when the promise is resolved.

promiseone.then(()=>{
    console.log('Promise one is resolved');
})

// new example 
// withot storing in the varaible 

new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("async task 2 ");
        resolve()
    }, 1000);
}).then(()=>{
    console.log('Promise two is resolved');
})


// 2 example 

 const promisethree = new Promise((resolve , reject)=>{

   setTimeout(() => {
    resolve({username:'chai', email:'chai@.com'})
   }, 1000);
})

promisethree.then((user)=>{
  console.log(user);
  
})

// 4 example

const promisefour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true // true 
        if(!error){
            resolve({username :"adithya", pass : '123'})
        }else{
            reject('ERROR : something went worng')
        }
    }, 1000);
})

 promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    

}).catch((error)=>{
  console.log(error);
}).finally(()=>{
    console.log('This is finally block');
})


// we can use any method up and  down method 
//*************************************************************************************** */

// example 5 

    const promisefive = new Promise((resolve, reject)=>{
        setTimeout(() => {
            let error = true // true 
            if(!error){
                resolve({username :"javascript", pass : '123'})
            }else{
                reject('ERROR : js went worng')
            }
        }, 1000);
    })

    // using the async , await rather then then
    // we should this async and await by try and catch method  only 

    async function conusmseprommisefive(){
         
        try {

         const response = await promisefive
         console.log(response);
         
            
        } catch (error) {
            console.log(error);
            
        }
    }

    conusmseprommisefive()


    //********************************* */
    // api calll with fetch method and with try and catch method

    async function getalluser() {

      try {

        const responsive = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data  = await responsive.json()
        console.log(data);
        
      } catch (error) {
        console.log("E:", error);
        
      }
        
    }

    getalluser()


    // now using the then and catch and finally mathod 

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((responsive)=>{
        return responsive.json()
 
    })
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))