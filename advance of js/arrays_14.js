// arrays in js 

/*
JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/

const myarr =[1,2,3,4,5]

console.log(myarr[3]);

const arr2 = new Array(1,2,3,4)

console.log(arr2.length);
console.log(arr2[1]);


//methods of array in js 

arr2.push(5)

console.log(arr2);

arr2.pop()

console.log(myarr.includes(3)); // its checks the number is there or not its return in boolean

console.log(myarr.indexOf(2)); // its checks the index of the number 



  // slice and splice 

  /*
  The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
  */

  const arr5=[1,2,3,4,5]

  console.log(("A",arr5));
  
  const my1= arr5.slice(1,3)

  console.log(my1);
  

  console.log("B",arr5);



  //splice 
/*
The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
*/

  const my2= arr5.splice(1,3)
  console.log(my1);
  console.log(my2);


// more methods of array in js 

/*at
: 
ƒ at()   
concat
: 
ƒ concat()
constructor
: 
ƒ Array()
copyWithin
: 
ƒ copyWithin()
entries
: 
ƒ entries()
every
: 
ƒ every()
fill
: 
ƒ fill()
filter
: 
ƒ filter()
find
: 
ƒ find()
findIndex
: 
ƒ findIndex()
findLast
: 
ƒ findLast()
findLastIndex
: 
ƒ findLastIndex()
flat
: 
ƒ flat()
flatMap
: 
ƒ flatMap()
forEach
: 
ƒ forEach()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
join
: 
ƒ join()
keys
: 
ƒ keys()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
map
: 
ƒ map()
pop
: 
ƒ pop()
push
: 
ƒ push()
reduce
: 
ƒ reduce()
reduceRight
: 
ƒ reduceRight()
reverse
: 
ƒ reverse()
shift
: 
ƒ shift()
slice
: 
ƒ slice()
some
: 
ƒ some()
sort
: 
ƒ sort()
splice
: 
ƒ splice()
toLocaleString
: 
ƒ toLocaleString()
toReversed
: 
ƒ toReversed()
toSorted
: 
ƒ toSorted()
toSpliced
: 
ƒ toSpliced()
toString
: 
ƒ toString()
unshift
: 
ƒ unshift()
values
: 
ƒ values()
with
: 
ƒ with()

*/
