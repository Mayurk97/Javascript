let headingone=document.querySelector('h1')
console.log(headingone)

let list=document.querySelectorAll('li')
console.log(list)

let buttonone=document.querySelector('button')
console.log(buttonone)


buttonone.addEventListener('click',function(){

    for(let i=0;i<list.length;i++){

        if(i%2==0){
            list[i].style.color="green"
        }
        else{
            list[i].style.color="red"
        }

    }
      

})