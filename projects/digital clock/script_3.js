const clock= document.getElementById('clock')
//const clock =document.querySelector('#clock') we can use any of them 


 
 setInterval(() => {
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
 }, 1000);