
let buttonA = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')



buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newElement = document.createElement('li') 
    newElement.textContent = text 
    ulList.appendChild(newElement)
})


 CreateButton(newElement,"remove")
 CreateButton(newElement,"up")
 CreateButton(newElement,"down")

 ulList.append(newElement)

// function CreateButton(li){

//    let remove =  document.createElement('button') 
//    remove.textContent = "remove" 
//    remove.classList = "remove" 
//    li.append(remove)
   
//    let down =  document.createElement('button') 
//    down.textContent = "down"
//    down.classList = "down"
//    li.append(down)
   
//    let up =  document.createElement('button') 
//    up.textContent = "up"
//    up.classList = "up"
//    li.append(up)
   
// }

function CreateButton(li,name){
    let buttonElement =  document.createElement('button') 
    buttonElement.textContent = name 
    buttonElement.classList = name 
    li.append(buttonElement)
 }
