let buttonA=document.querySelector('button')
console.log(buttonA)

let list=document.querySelector('ul')
console.log(list)

let inputA=document.querySelector('input')
console.log(inputA)



buttonA.addEventListener('click',function(){
    let fruit=inputA.value
    let newfruit=document.createElement('li')
    newfruit.textContent=fruit
    list.appendChild(newfruit)
})