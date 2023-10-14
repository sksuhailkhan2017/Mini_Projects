const increaseButton= document.querySelector('#increase')
const decreaseButton= document.querySelector('#decrease')
const resetButton= document.querySelector('#reset')
const result=document.querySelector('.result')
let counter=0;

// Note : instead using ids for each button, i could have used   .foreach() method.

increaseButton.addEventListener('click',()=>{
   counter+=1;
   result.innerHTML= counter
})

decreaseButton.addEventListener('click',()=>{
    counter-=1;
    result.innerHTML= counter
 })

 resetButton.addEventListener('click',()=>{
    counter=0;
    result.innerHTML= counter
 })