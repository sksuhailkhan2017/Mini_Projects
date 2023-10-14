const mobileNavbar = document.querySelector('#toggle')
const navHeader= document.querySelector('.header')
const xbtn= document.querySelector('#xbtn')

mobileNavbar.addEventListener('click',() => {
    navHeader.classList.add('active')
})

xbtn.addEventListener('click',() =>{
    navHeader.classList.remove('active')
})
