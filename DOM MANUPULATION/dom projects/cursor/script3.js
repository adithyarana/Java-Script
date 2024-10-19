 var main = document.querySelector('#main')
 var crsr = document.querySelector(".cursor")

 main.addEventListener("mousemove", (dets)=>{
 crsr.style.left = dets.pageX + "px"
 crsr.style.top = dets.pageY + "px"
    
 })