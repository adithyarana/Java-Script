
// arrays in loops 

// 1 for of looop use 

const arr= [1,2,3,4,5]

for (const val of arr) {
    console.log(val);
    
}

const greeting = "hello world"

for (const i of greeting) {
    console.log(i);
    
}

//*************************************************************************************** */

// maps in js // this store unique values and order vise 

const map = new Map()

map.set('in' , "india")

map.set('us' , "usa")

map.set('fr', 'france')

console.log(map);

for (const [key , value]  of map) {
    console.log(key , ':-', value);
    
}

//**************************************************************** */
// maps in objects 

const myobject1 = {
    'name': 'adithya',
    'age': '25'

}

// for (const [key , value]of myobject) {
//     console.log(key , ':-', value);       this for of loop will not work in objects 
    
// }


//**************************************************************************** */

// for in loop use  // this will work in objects

const myobject2={
    name: 'adithya',
    age: '25'
}

for (const key in myobject2) {
    console.log(`${key} shocut of for ${myobject2[key]}`);
    
}

const programming=["js" , "c", "c++"]

for (const key in programming) {
    console.log(programming[key]);
    
}

//******************************************     */


// for in loop is not work in maps becsuae it is not itrateble 

const map1 = new Map()

map.set('in' , "india")

map.set('us' , "usa")

map.set('fr', 'france')


for (const [key, value] in map) {
    console.log(key , ':-', value);
}




//**********************************//***************************************************************** */ */

// for each loop use

const coding = ["js", "cpp", "java", "python"]

// by using normal function 
coding.forEach( function(val){
    console.log(val);
    
})

// by using arrow function 

coding.forEach((val)=>{
console.log(val);

})

// use case of foreach 

// coding.forEach(val , index , arr) => {

// })



//arays in object iteration imp to learn 

const mycoding =[
    {
        name: 'js',
        language: 'functional'
    },

    {
        name: 'py',
        language: 'functional'
    },

    {
        name: 'ruby',
        language: 'functional'
    },

    {
        name: 'cpp',
        language: 'functional'
    }
]

mycoding.forEach((item )=>{
  console.log(item.name);
  
})