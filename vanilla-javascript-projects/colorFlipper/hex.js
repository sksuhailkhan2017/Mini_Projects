const arr= [0,1,2,3,4,5,6,7,8,9, 'A','B','C', 'D', 'E', 'F']
const btn= document.querySelector('button')
const main=document.querySelector('main')
const colorName= document.querySelector(".color")
btn.addEventListener("click",()=>{
    let a= "#"
    for(let i=0;i<6;i++){
        a+=arr[Math.floor(Math.random()*arr.length)]
    }
    main.style.backgroundColor=a
    colorName.innerHTML=a
})