// how to return a blank array

let names=["mayur","poorva","amol","aman"]

for (let i=0;i<names.length;i++){
    names.splice(0,names.length)
}
console.log(names)


// how to check if num is an integer or not

function number(x){
  if(x%1===0){
    console.log('num is integer')
  }
  else{
    console.log('num is not an integer')
  }
}
number(643.1)

//write a function thet would allow you to do this
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27


function createBase(x=3,y=3){
   
    return x+y;

}
let a = createBase()
console.log(a)

let b = (a+10)
console.log(b)

let c = (a+20)
console.log(c)

//


function createBase(n){
    return function(y){
    return n+y
}
}
var addSix = createBase(6);
console.log(a=addSix(10)) 
console.log(b=addSix(21))


// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.


function palindrom(){
  let strng="madam"
  revstrng=strng.split('').reverse().join('')
  if(strng==revstrng){
      return true
  }else{
      return false
  }
  
}
console.log(a=palindrom())

// find a square of num

let numberr = 9
let result=Math.sqrt(numberr)
console.log('the square root of '+numberr+' is '+result)


//concatination

let firstNameB="Mayur"
let lastNameC="kadam"
console.log("My firstName is "+firstNameB+" My lastName is "+lastNameC)



