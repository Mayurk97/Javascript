let headone=document.querySelector('h1')
console.log(headone)

let buttonone=document.querySelector('button')
console.log(buttonone)

let inputtext=document.querySelector('input')
console.log(inputtext)


buttonone.addEventListener(click,function(){
    let colorc= inputtext.value
    headone.style.color=colorc
})