
// scopes in js 
let a= 200  // this is globle scope 

if(true){
    let a = 10
    const b=12
  console.log("inner" ,a); // this  is local scopee
  

}

console.log(a);

//console.log(b); // this will give error as b is declared in block scope       


// example for scope
function one(){

    const username = "adithya"

    function two(){
        const website = "youtube"
        console.log(username); 
        
    }

   // console.log(website); // we cannot acces the website beaause the website is inside the function 

    two()
}

one()



// declaration od the functionm


console.log(addone(5));

function addone(num){
    return num+1
}

addnum(5)
const addnum = function(num){
    return num+1
}