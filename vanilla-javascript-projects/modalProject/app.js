const showtnc=document.querySelector(".terms")
const pagetnc= document.querySelector(".read")
const exitButton= document.querySelector(".exitbtn")
const checkbox= document.querySelector(".check")
const submitButton= document.querySelector(".submit")
const warning= document.querySelector(".warningMsg")

showtnc.addEventListener('click',() => {
   pagetnc.classList.add('show')
})

exitButton.addEventListener('click', () => {
    pagetnc.classList.remove('show')
})

submitButton.addEventListener('click',() => {
    if(checkbox.checked){
        submitButton.innerHTML="Done!"
        warning.classList.remove('show')
        submitButton.style.backgroundColor="lightgreen"
    }
    else{
      warning.classList.add('show')
      submitButton.innerHTML="Submit your response"
      submitButton.style.backgroundColor="lightseagreen"
    }
})