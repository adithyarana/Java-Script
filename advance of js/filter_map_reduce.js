
// filter is used to filter the values and usaed callback function

const mynums =[1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.filter((num) => num>4)

console.log(newnums);



// in curly brackets we should use return keyeord 

const mynums1 =[1,2,3,4,5,6,7,8,9,10]

const newnums1 = mynums.filter((num) => {
    return num>4
})

console.log(newnums1);


// example of filter 

const books =[
    {
        title:"book1",
        price:100,
        author:"john",
        published: 2004

    },
    {
        title:"book2",
        price:1003,
        author:"adi",
        published: 1987

    },
    {
        title:"book3 ",
        price:1002,
        author:"aksh",
        published: 2008

    },
    {
        title:"book4",
        price:567,
        author:"uday",
        published: 1989

    },
]

const cheapbooks = books.filter((book) => {
    return book.price<1000
})

console.log(cheapbooks);


const cheapbooks1= books.filter((adi) =>  adi.published <2000 && adi.author == 'john')
console.log(cheapbooks1);


//***************************************************************************************************** */

// maps 

    // map is used to transform the values and usaed callback function

const mynums2 =[1,2,3,4,5,6,7,8,9,10]

const newnums2 = mynums2.map((num) => num*2)

console.log(newnums2);



// chaining in filters and maps 

    // example of chaining 

    const mynumber3 =[1,2,3,4,5,6,7,8,9,10]

    const newnums3 = mynumber3
                          .map((num) => num*10)
                          .map((num) =>num+1 )
                          .filter((num)=> num>=40)

                          console.log(newnums3);
                

//***************************************************************************************************** */

// reduce

/*

To reduce an array in JavaScript, you can utilize the reduce() method.
 This method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element.
  The final result of running the reducer across all elements of the array is a single value.

*/

const reduc= [1,2,3]

const sum= reduc.reduce(function (acc , cuurval){
    console.log(`acc :${acc} and curval${cuurval}`);
    
    return acc + cuurval
} , 0)

console.log(sum);


// in arrow function use in redux 

const sum1= reduc.reduce((acc,curval) => {
    return acc+curval
}, 0)

console.log(sum1);

