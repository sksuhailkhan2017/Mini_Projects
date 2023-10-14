const colors = ['crimson','lightseagreen','burlywood','rgb(133,122,200)','#f15025']
const btn = document.getElementById('btn')
const bg = document.querySelector('main')
const colorName = document.querySelector('.color')

btn.addEventListener("click", () => {
   let a=colors[Math.floor(Math.random()*colors.length)]
   bg.style.backgroundColor = a
   colorName.textContent= a 
})