// dates and time in js

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());

// TO CRAETE THE DATE IN JA 

let createdate= new Date(2023 ,0,23)
console.log(createdate.toDateString());

// to create the timestamp 

let timestamp = Date.now();
console.log(timestamp); // to get the time stamp
console.log(createdate.getTime()); // to get the time current time in sec
console.log(Math.floor(Date.now()/1000));

