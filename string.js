
// // // // // // // // let city = "Mumbai"
// // // // // // // // console.log(city[0])
// // // // // // // // for (let i = 0; i < city.length; i++) {
// // // // // // // //     console.log(city[i])
// // // // // // // // }

// // // // // // // // console.log('Reversed ')
// // // // // // // // for (let i = city.length - 1; i >= 0; i--) {
// // // // // // // //     console.log(city[i])
// // // // // // // // }

// // // // // // // // //////

// // // // // // // // let fruits = "Mango"

// // // // // // // // let bb = fruits.toLowerCase()
// // // // // // // // console.log(bb)

// // // // // // // // let cc = fruits.toUpperCase()
// // // // // // // // console.log(cc)

// // // // // // // // // Method chaining


// // // // // // // // let abc = fruits.toLowerCase().toUpperCase().length
// // // // // // // // console.log(abc)


// // // // // // // // // include

// // // // // // // // let vegetables = "Potato"
// // // // // // // // let dd = vegetables.includes('o')
// // // // // // // // console.log(dd)

// // // // // // // // // indexOf

// // // // // // // // let coutry = "India"
// // // // // // // // let ff = coutry.indexOf("n")
// // // // // // // // console.log(ff)


// // // // // // // // let fruits2 = "apple mango chiku  grapes"
// // // // // // // // let userInput = "grapes"

// // // // // // // // if (fruits2.includes(userInput)) {
// // // // // // // //     console.log('Fruit is available')
// // // // // // // // }
// // // // // // // // else {
// // // // // // // //     console.log('Fruit is not available')
// // // // // // // // }

// // // // // // // // if (fruits2.indexOf(userInput) >= 0) {
// // // // // // // //     console.log('Fruit is available')
// // // // // // // // }
// // // // // // // // else {
// // // // // // // //     console.log("Fruit is not available")
// // // // // // // // }


// // // // // // // // // trim

// // // // // // // // let state = " Maharashtra"
// // // // // // // // console.log(state.length)
// // // // // // // // let hh = state.trimStart()
// // // // // // // // console.log(hh.length)
// // // // // // // // console.log(hh)

// // // // // // // // state = "Jaipur "
// // // // // // // // console.log(state)
// // // // // // // // let kk = state.trimEnd()
// // // // // // // // console.log(kk.length)
// // // // // // // // console.log(kk)


// // // // // // // // let hhhh = "I am new to js".toUpperCase()
// // // // // // // // let count = 0
// // // // // // // // for (let i = 0; i < hhhh.length; i++) {
// // // // // // // //     if (hhhh[i] == "A" || hhhh[i] == "E" || hhhh[i] == "I" || hhhh[i] == "O" || hhhh[i] == "U") {
// // // // // // // //         count = count + 1
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // console.log(count)

// // // // // // // // let abcd = "ameeiout"

// // // // // // // // let qq = abcd.split("").filter(function(el){
// // // // // // // //     return el == "a" || el == "e" || el == "i" || el == "o" || el == "u" 
// // // // // // // // })
// // // // // // // // console.log(qq)



// // // // // // // // let S = "5a3b2c2d"
// // // // // // // // let qqqq = ""

// // // // // // // // "aaaaabbbccdd"

// // // // // // // // for(let i = 0 ; i < S.length ; i++){
// // // // // // // //     if(Number(S[i])) {
// // // // // // // //         console.log(S[i+1].repeat(Number(S[i])))
// // // // // // // //         for(let j = 0 ; j < Number(S[i]);j++){
// // // // // // // //             qqqq +=  S[i+1]
// // // // // // // //         }

// // // // // // // //     }
// // // // // // // // }

// // // // // // // // console.log(qqqq)


// // // // // // // // let B = "6a5b4c3d"
// // // // // // // // let result = ""

// // // // // // // // for (let i=0;i<B.length;i++){
// // // // // // // //     if(Number(B[i])){
// // // // // // // //         for(let j=0;j<Number(B[i]);j++){
// // // // // // // //             result=result+B[i+1]
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // // }
// // // // // // // // console.log(result)


// // // // // // // let fullName = "Mayur"
// // // // // // // fullName[0]="m"
// // // // // // // console.log(fullName)

// // // // // // // // charAt

// // // // // // // let aaa = fullName.charAt(2)
// // // // // // // console.log(aaa)


// // // // // // // let bbb = fullName.charCodeAt(2)
// // // // // // // console.log(bbb)


// // // // // // // let nameaa= "I am learning javascriptA"
// // // // // // // let countx=0

// // // // // // // for (let i=0;i<nameaa.length;i++){
// // // // // // //     if(nameaa[i]>="A"&& nameaa[i]<="Z"){
// // // // // // //         countx=countx+1
// // // // // // //     }
    
// // // // // // // }
// // // // // // // console.log(countx)

// // // // // // // // concatination

// // // // // // // let firstNameB="Mayur"
// // // // // // // let lastNameC="kadam"

// // // // // // // console.log("My firstName is "+firstNameB+" My lastName is "+lastNameC)


// // // // // // // let abc = "I am mayur and i am learning javascript"
// // // // // // // // let cccc = abc.replace('javascript',"python")
// // // // // // // // console.log(cccc)


// // // // // // // function replaceAll(sentence,word,replw){
// // // // // // //     let arrrr = sentence.split(' ')
// // // // // // //     console.log(arrrr)
// // // // // // //     let kkk = arrrr.map(function(el){
// // // // // // //         if(el == word){
// // // // // // //             return el = replw
// // // // // // //         }
// // // // // // //         else{
// // // // // // //             return el
// // // // // // //         }
// // // // // // //     })
// // // // // // //     console.log(kkk.join(' '))
// // // // // // // }
// // // // // // // replaceAll(abc,"javascript","python")
// // // // // // //             /0 /1
// // // // // // // let abcd = "i am mayur"
// // // // // // // let ggg = abcd.search("mayur")
// // // // // // // console.log(ggg)





// // // // // // let sentence="i am mayur and my fullname is mayur kadam"
// // // // // // let reg =/mayur/gi

// // // // // // let aaaaa= reg.exec(sentence)
// // // // // // let bbbbb= reg.exec(sentence)
// // // // // // console.log(aaaaa)
// // // // // // console.log(bbbbb)



// // // // // // let subject="English Hindi Marathi English English Hindi Hindi Marathi"
// // // // // // let reg2=/Hindi/gi

// // // // // // let ccc=subject.search(reg2)
// // // // // // console.log(ccc)

// // // // // // let ddd=subject.match(reg2)
// // // // // // console.log(ddd)


// // // // // // let eee=subject.replace(reg2,"English")
// // // // // // console.log(eee)


// // // // // // let js = "I am learning javascript , i like JAVASCRIPT"

// // // // // // let regExp = /javascript/gi

// // // // // // let A = regExp.exec(js)
// // // // // // let AA = regExp.exec(js)
// // // // // // console.log(A)
// // // // // // console.log(AA)

// // // // // // let kkk = regExp.test(js)
// // // // // // console.log(kkk)


// // // // // // let abc  = '01546328974'
// // // // // // let pattern = ""
// // // // // // for(let i = 0 ; i < abc.length ; i++){
// // // // // //     if(abc[i] != 5 && abc[i] != 0){
// // // // // //         pattern = pattern + String(10 - Number(abc[i]))
// // // // // //         console.log(pattern)
// // // // // //     }
// // // // // //     else {
// // // // // //         val =  Number(abc[i])=== 0?5:0
// // // // // //         pattern = pattern + val
// // // // // //     }

// // // // // // }
// // // // // // console.log(pattern)



// // // // // // synchronous

// // // // // function addition(x,y){
// // // // //     console.log(x+y)
// // // // // }
// // // // // function addition1(x,y){
// // // // //     console.log(x+y)
// // // // // }

// // // // // addition1(12,13)
// // // // // addition(10,20)


// // // // // // asynchronous


// // // // // // function addition2(x,y){
// // // // // //     setTimeout(function(x,y){
// // // // // //         console.log(x+y)
// // // // // //     },2000,x,y)
    
// // // // // // }
// // // // // // function addition3(x,y){
// // // // // //     console.log(x+y)
// // // // // // }

// // // // // // addition2(20,20)
// // // // // // addition3(5,30)

// // // // // //program

// // // // // // function addition4(){
// // // // // //     setTimeout(function(){
// // // // // //         console.log("hello")
// // // // // //         setTimeout(function(){
// // // // // //             console.log("hi")
// // // // // //             setTimeout(function(){
// // // // // //                 console.log("bye")
// // // // // //     },2000)
    
    
// // // // // //     },1000)
    
    
// // // // // //     },3000)
    
// // // // // // }

// // // // // // addition4()


// // // // // // let abc=new Promise(function(resolve,reject){
// // // // // //     let x=10
// // // // // //     let y=20

// // // // // //     if(x==y){
// // // // // //         resolve("Hello i am equal")
// // // // // //     }
// // // // // //     else{
// // // // // //         reject("Hello i am not equal")
// // // // // //     }
// // // // // // })

// // // // // // abc.then(function(msg){
// // // // // //     console.log(msg)
// // // // // // },function(msg){
// // // // // //     console.log(msg)
// // // // // // })


// // // // let abd=new Promise(function(resolve,reject){
// // // //     let names=["mayur","vishal","prafull"]
// // // //     if(names.length==3){
// // // //         resolve(names)
// // // //     }
// // // //     else{
// // // //         reject(names.pop())
// // // //     }
// // // // })
// // // // abd.then(function(a){
// // // //     console.log(a)
// // // // },function(b){
// // // //     console.log(b)
// // // // })




// // // let  aaa = new Promise(function(resolve,reject){
// // //     if(22==22){
// // //         resolve("Hello")
// // //     }
// // //     else{
// // //         reject("Bye")
// // //     }
// // // })

// // // aaa.then(function(a){
// // //     console.log(a)
// // //     return a[1]
// // // })
// // // .then(function(b){
// // //     console.log(b)
// // //     return 1
// // // })
// // // .then(function(c){
// // //     console.log(c)
// // // })
// // // .catch(function(d){
// // //     console.log(d)
// // // })




// // let A= "i am learning python and i like Python"
// // console.log(typeof A)

// // let reg1= /python/gi

// // let a= reg1.exec(A)
// // console.log(a)

// // let b= reg1.exec(A)
// // console.log(b)

// // // test

// // let B= "i am learning python and i like Python"

// // let reg2= /python/

// // if(reg2.test(B)){
// //     console.log("pass")
// // }
// // else{
// //     console.log("fail")
// // }


// // // Metacharcters


// // // let abc= "apple a day keep doctors away"
// // // reg3=/^Apple/gi
// // // reg4=/ay$/gi

// // // if(reg3.test(abc)){
// // //     console.log("pass")
// // // }
// // // else{
// // //     console.log("fail")
// // // }

// // // if(reg4.test(abc)){
// // //     console.log("pass")
// // // }
// // // else{
// // //     console.log("fail")
// // // }


// // let fruit="mango"

// // let reg5=/.ago/

// // if(reg5.test(fruit)){
// //     console.log("pass")
// // }
// // else{
// //     console.log("fail")
// // }

// let vegetables="potato"

// let reg6=/po*/

// if(reg6.test(vegetables)){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }



// let kkk="mango"

// let reg7=/maaa?n?go/

// if(reg7.test(kkk)){
//     console.log("pass")
// }
// else{
//     console.log("fail")
// }


// //groups


// let qq="abcd"
// let reg8=/a[bb][bc]d/
// console.log(reg8.test(qq))


// let dd="mh8k"
// let reg9=/m[a-z][0-9]k/
// console.log(reg9.test(dd))



let reg=/abc/i
let a= "my name is ABC"

console.log(reg.test(a))

let reg1=/[abc][xyz][gek]/
let b= 'bzd'
console.log(reg1.test(b))

let reg2=/[DEF][SHJ][KLC]/
let c= "ABCDTEHL"
console.log(reg2.test(c))

let reg3=/[abc][0-9][0-8]/
let d="c47"
let e= "b59"
console.log(reg3.test(d))
console.log(reg3.test(e))


let reg4=/[bcd][e][a-zA-Z]/g
let q="hello deG new to bez"
console.log(q.match(reg4))


let reg5=/[^bcd][e][a-zA-Z]/g
let s="hello deG new to bez"
console.log(s.match(reg5))


let reg6=/ma*ur/  // mur maur maaur maaaur
let aaa = "mayur"
console.log(reg6.test(aaa))

let reg7=/vi*hal/ // vhal  vihal viihal viiihal
let bbb= "vishal"
console.log(reg7.test(bbb))

let reg8=/r*m/ //rm m
let ddd="ram"
console.log(reg8.test(ddd))






