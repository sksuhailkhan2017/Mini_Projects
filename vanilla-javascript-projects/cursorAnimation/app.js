const cursor = document.querySelector(".cursor")
var timeout;


//cursor movement

document.addEventListener("mousemove", (e) => {
     let x= e.pageX;
     let y= e.pageY;

     cursor.style.top = y + "px";
     cursor.style.left = x + "px";
     cursor.style.display = "block";
    console.log("mousemoved")
     
   //stop animation
    function mousestopped(){
        cursor.style.display= "none";
     }

     //hide animation 
     clearTimeout(timeout);
     timeout= setTimeout(mousestopped,10000);


})

document.addEventListener("mouseenter", () => {
   cursor.style.display = "block";
 });

document.addEventListener("mouseleave",()=>{
   cursor.style.display="none";
})