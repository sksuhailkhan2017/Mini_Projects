const addButtonlist= document.querySelectorAll('.add')
const subButtonlist= document.querySelectorAll('.sub')
const ansCardlist= document.querySelectorAll('.ans')
const button= document.querySelectorAll('.btn')

addButtonlist.forEach((addButton,index)=> {
        addButton.addEventListener('click',()=>{
        addButton.classList.add('hide')
        subButtonlist[index].classList.add('show')
        ansCardlist[index].classList.add('show')
    })
});

subButtonlist.forEach((subButton,index) => {
    subButton.addEventListener('click',()=>{
        subButton.classList.remove('show')
        addButtonlist[index].classList.remove('hide')
        ansCardlist[index].classList.remove('show')
    })
});