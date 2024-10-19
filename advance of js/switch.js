
// switch case statement

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

//  truthy and falsy value 

// falsy value are 
/*
false 
0
-0
BigInt
""
null
undefined
NaN
*/


// truety value 

/*
"0"
"false"
""
[]
{}
function(){}
*/

// how to find empty object in cf

const emptyobj = {}

 if(Object.keys(emptyobj).length===0){
    console.log("object is empty ");
    
 }

 // hoew to detect array is empty

 const arr = [];
 if(arr.length===0){
    console.log("array is empty");
 }

 // nullish coalescing operator (??) : null, undifined 

 let val1;

 val1 = 5??10
 val2= null ?? 10
 val3= undefined?? 10

 console.log(val1);
 console.log(val2);
 console.log(val3);
 

 // terniary operator 

 const iceteaprice = 100
 iceteaprice <=80 ? console.log("less than 80") : console.log("more then 80")
 
 