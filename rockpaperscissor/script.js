console.log("Script loaded!");

const computerResponse = document.getElementById('computerResponse');
const userResponse = document.getElementById('userResponse');
const selectedButtons = document.querySelectorAll('button');
const lost= document.getElementById('computer');
const won= document.getElementById('user');
const resultDisplay=document.querySelector(".result")
let userChoice;
let computerChoice;
let result;

selectedButtons.forEach(x => x.addEventListener("click",(e) => {
      console.log("button clicked!")
      userChoice= e.target.id
      userResponse.innerHTML=userChoice
      generatedChoice()
      showResult()
         
}))

function generatedChoice() {
   const randomNumber= Math.floor(Math.random() * 3) + 1;

   if(randomNumber == 1) {
      computerChoice="rock"
   }
   else if(randomNumber == 2) {
      computerChoice="paper"
   }
   else{
      computerChoice="scissors"
   }
   computerResponse.innerHTML=computerChoice;
}

function showResult(){
      if(userChoice===computerChoice){
         result="tie!!!"
         won.style.border="5px solid blue";
         won.style.boxShadow="0 0 0.1px blue, 0 0 0.2px blue, 0 0 3px blue";
         lost.style.border="5px solid blue";
         lost.style.boxShadow="0 0 0.1px blue, 0 0 0.2px blue, 0 0 3px blue";
      }
      else if(computerChoice==="rock" && userChoice==="scissors"){ 
        result="You Lost!!!"
        won.style.border="5px solid red";
        won.style.boxShadow="0 0 0.1px red, 0 0 0.2px red, 0 0 3px red";
        lost.style.border="5px solid green";
        lost.style.boxShadow="0 0 0.1px green, 0 0 0.2px green, 0 0 3px green";
      }
      else if(computerChoice==="scissors" && userChoice==="paper"){
            result="You Lost!!!"
            won.style.border="5px solid red";
            won.style.boxShadow="0 0 0.1px red, 0 0 0.2px red, 0 0 3px red";
            lost.style.border="5px solid green";
            lost.style.boxShadow="0 0 0.1px green, 0 0 0.2px green, 0 0 3px green";
      }
      else if(computerChoice=="paper" && userChoice==="rock"){
            result="You Lost!!!"
            won.style.border="5px solid red";
            won.style.boxShadow="0 0 0.1px red, 0 0 0.2px red, 0 0 3px red";
            lost.style.border="5px solid green";
            lost.style.boxShadow="0 0 0.1px green, 0 0 0.2px green, 0 0 3px green";
      }
      else{
            result="You Won!!!"
            won.style.border="5px solid green";
            won.style.boxShadow="0 0 0.1px green, 0 0 0.2px green, 0 0 3px green";
            lost.style.border="5px solid red";
            lost.style.boxShadow="0 0 0.1px red, 0 0 0.2px red, 0 0 3px red";
      }

      resultDisplay.innerHTML=result;
} 

