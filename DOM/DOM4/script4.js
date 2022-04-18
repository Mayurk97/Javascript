let ullist=document.querySelector('ul')
console.log(ullist)

let inputtext=document.querySelector('input')
console.log(inputtext)

let addbutton=document.querySelector('#one')
console.log(addbutton)


let lilist=document.querySelector("li")
for(let i=0;i<lilist.length;i++){
    CreateButton(lilist[i])

}
        


addbutton.addEventListener('click',function(){
    let a=inputtext.value
    let li= document.createElement('li')
    li.textContent=a
    CreateButton(li)
    ullist.appendChild(li)
    inputtext.value=""
})


ullist.addEventListener('click',function(event){
    if(event.target.classList=="remove"){
        let li= event.target.parentElement
        let ul= li.parentElement
        ul.removeChild(li)
    }

    if(event.target.classList=="up"){
        let li = event.target.parentElement
        let prevLi = li.previousElementSibling
        let ul= prevLi.parentElement

        if(prevLi){
            ul.insertBefore(li,prevLi)
        }
    }
    if(event.target.classList=="down"){
        let li=event.target.parentElement
        let nextLi=li.nextElementSibling
        let ul= nextLi.parentElement
        if(nextLi){
            ul.insertBefore(nextLi,li)
        }
    }

  
})


function CreateButton(li){
    let remove=document.createElement('button')
    remove.textContent="Remove"
    remove.classList="remove"
    li.appendChild(remove)


    let up=document.createElement('button')
    up.textContent="Up"
    up.classList="up"
    li.appendChild(up)

    let down=document.createElement('button')
    down.textContent="Down"
    down.classList="down"
    li.appendChild(down)
}