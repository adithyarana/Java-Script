
const course ={
    title: "JavaScript Basics",
    instructor: "John Doe",
    duration: 12,
    students: 100
}

// therse are the ways to access the objects 

console.log(course.title); // 1ways 

const {title : tell}=course // 2 ways 
console.log(tell);

// apis form 

// {
//   name:"adithya",
//   course:"js in hinid",
//   price: "free"
// }