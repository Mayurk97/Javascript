
// // // // // // // let person={
// // // // // // //     firstname:"mayur",
// // // // // // //     lastname:"kadam",
// // // // // // //     age:24,
// // // // // // //     rollno:50
// // // // // // // }

// // // // // // // console.log(person)

// // // // // // //update

// // // // // // //person.firstname="aman"
// // // // // // // person['firstname']="aman"
// // // // // // // console.log(person)

// // // // // // // //add

// // // // // // // person.language="hindi"
// // // // // // // person['language']="english"
// // // // // // // console.log(person)

// // // // // // // //delete

// // // // // // // delete person.language
// // // // // // // console.log(person)








// // // // // // // let bank={
// // // // // // //     bankname:"sbi",
// // // // // // //     accno:"123",
// // // // // // //     accType:"saving"
// // // // // // // }

// // // // // // // console.log(bank['bankname'])

// // // // // // // for(let key in bank){
// // // // // // //     console.log(key,bank[key])
// // // // // // // }





// // // // // // // let students = [

// // // // // // //     {
// // // // // // //         fullName: "mayur kadam",
// // // // // // //         age: 24,
// // // // // // //         skills: ["python", "java", "css3"],
// // // // // // //         city:"pune"

// // // // // // //     },
// // // // // // //     {
// // // // // // //         fullName: "vishal mane",
// // // // // // //         age: 25,
// // // // // // //         skills: ["python", "html", "javascript"],
// // // // // // //         city:"nagpur"
// // // // // // //     }
// // // // // // //     ,
// // // // // // //     {
// // // // // // //         fullName: "prafull ghate",
// // // // // // //         age: 30,
// // // // // // //         skills: ["c++", "sql", "oracle"],
// // // // // // //         city:"mumbai"
// // // // // // //     }

// // // // // // // ]

// // // // // // // console.log(students[0].fullName)
// // // // // // // console.log(students[0]['fullName'])
// // // // // // // students[0].skills.push('manual testing')
// // // // // // // console.log(students)


// // // // // // // for(let i = 0 ; i < students.length ;i++){
// // // // // // //     console.log(students[i]['fullName'],students[i]['skills'].length)
// // // // // // // }

// // // // // // // students.forEach(function(el,index,arr){
// // // // // // //     console.log(el['fullName'],el['skills'].length)

// // // // // // // })

// // // // // // // let hhh = students.filter(function(el){
// // // // // // //     return el.age >= 25
// // // // // // // })
// // // // // // // console.log(hhh)

// // // // // // // hhh.forEach(function(el){
// // // // // // //     console.log(el.fullName)
// // // // // // // })

// // // // // // // // average age

// // // // // // // let ra= students.reduce(function(acc,el){
// // // // // // //     return acc + el.age
// // // // // // // },0)
// // // // // // // console.log(ra/students.length)


// // // // // // // --------------------------------------------------------

// // // // // // // let u = students.filter(function(el){
// // // // // // //     return el.city == "nagpur" && el.skills.includes('python')
// // // // // // // })
// // // // // // // console.log(u)

// // // // // // // u.forEach(function(el){
// // // // // // //     console.log(el['fullName'])
// // // // // // // })


// // // // // // // let amol={

// // // // // // //     fullname:"amol rao",
// // // // // // //     rollno:23,
// // // // // // //     skills:["python","js"]
// // // // // // // }

// // // // // // // let poorva={

// // // // // // //     fullname:"poorva vyas",
// // // // // // //     rollno:25,
// // // // // // //     skills:["python","js","jquery"]
// // // // // // // }

// // // // // // //   //update


// // // // // // // amol.skills="jquery"
// // // // // // // amol["skills"]="jquery"
// // // // // // // console.log(amol)


// // // // // // //  add


// // // // // // // poorva.city="pune"
// // // // // // // poorva["lang"]="hindi"
// // // // // // // console.log(poorva)

// // // // // // // // retrive


// // // // // // // console.log(amol.fullname)
// // // // // // // console.log(poorva["fullname"])

// // // // // // // // delete


// // // // // // // delete poorva.city
// // // // // // // delete poorva["lang"]
// // // // // // // console.log(poorva)


// // // // // // // using constructor



// // // // // // // class person3{

// // // // // // //     constructor(fn,rn,ag){

// // // // // // //         this.fullname=fn
// // // // // // //         this.rollno=rn
// // // // // // //         this.age=ag


// // // // // // //     }

    
// // // // // // // }

// // // // // // // let mayur= new person3("mayur",12,24)
// // // // // // // console.log(mayur)



// // // // // // // using the set method


// // // // // // // class Person4{

// // // // // // //     setAge(ag){
// // // // // // //         this.age=ag
// // // // // // //     }

// // // // // // //     setfullname(fn){
// // // // // // //         this.fullname=fn
// // // // // // //     }

// // // // // // //     setrollno(rn){
// // // // // // //         this.rollno=rn
// // // // // // //     }
// // // // // // // }

// // // // // // // let amol5= new Person4()
// // // // // // // console.log(amol5)

// // // // // // // amol5.setfullname("amol5")
// // // // // // // console.log(amol5)
// // // // // // // amol5.setrollno(100)
// // // // // // // console.log(amol5)
// // // // // // // amol5.setAge(24)
// // // // // // // console.log(amol5)


// // // // // // // class Bank{

// // // // // // //     constructor(accname,accno,bal){
// // // // // // //         this.accname=accname
// // // // // // //         this.accno=accno
// // // // // //     //     this.bal=bal
// // // // // //     // }
// // // // // //     // depoist(amount){
// // // // // //     //     this.bal=this.bal+amount
// // // // // //     //     return this.bal
// // // // // //     // }
// // // // // //     // withdrawl(amount){
// // // // // //     //     if(amount<this.bal){
// // // // // //     //         this.bal=this.bal-amount
// // // // // //     //         return this.bal
// // // // // //     //     }
// // // // // //     //     else{
// // // // // //     //         console.log("in sifficient balance")
// // // // // //     //     }
// // // // // //     // }
// // // // // // // }

// // // // // // // let aman= new Bank("aman",122,200000)
// // // // // // // console.log(aman)

// // // // // // // let totalbal= aman.depoist(200000)
// // // // // // // console.log(totalbal)

// // // // // // // let r= aman.withdrawl(300000)
// // // // // // // console.log(r)



// // // // // // // // 4 object,values set,loop


// // // // // // // class Person3{

// // // // // // //     constructor(age,rollno,fullname){
// // // // // // //         this.age=age
// // // // // // //         this.rollno=rollno
// // // // // // //         this.fullname=fullname
// // // // // // //     }
    
// // // // // // // }

// // // // // // // let students=[

// // // // // // //     new Person3(12,22,"mayur"),
// // // // // // //     new Person3(15,24,"vishal"),
// // // // // // //     new Person3(16,28,"prafull"),
// // // // // // //     new Person3(11,29,"aditya")
// // // // // // // ]

// // // // // // // //console.log(students.length)

// // // // // // // students.forEach(function(el){
// // // // // // //     for (let key in el){
// // // // // // //         console.log(key,el[key])
// // // // // // //     }
// // // // // // // })

// // // // // // // let rrr=students.find(function(el){
// // // // // // //     return el.fullname="mayur"
// // // // // // // })

// // // // // // // console.log(rrr)


// // // // // // // let ppp=students.reduce(function(acc,el){
// // // // // // //     return acc+el.age
// // // // // // // },0)

// // // // // // // console.log(ppp)



// // // // // // // object literal


// // // // // // let mayur = {
// // // // // //     fullName: "mayur kadam",
// // // // // //     age: 24,
// // // // // //     skills: ["javacript", "cypress"]
// // // // // // }
// // // // // // let prafull = {
// // // // // //     fullName: "prafull ghate",
// // // // // //     age: 30,
// // // // // //     skills: [ "javscript", "cypress"]
// // // // // // }


// // // // // // // retrive
// // // // // // mayur.fullName
// // // // // // mayur['fullName']
// // // // // // console.log(mayur)

// // // // // // // update 
// // // // // // mayur.fullName = "vishal"
// // // // // // mayur['fullName'] = "ram"
// // // // // // console.log(mayur)


// // // // // // // add 
// // // // // // prafull.lang = "marathi"
// // // // // // prafull['lang'] = "marathi"
// // // // // // console.log(prafull)

// // // // // // //delete 

// // // // // // delete prafull.age
// // // // // // delete prafull['age']
// // // // // // console.log(prafull)

// // // // // // // setting the properties outside the class


// // // // // // class Person {
// // // // // //     fullName = undefined
// // // // // //     age = undefined
// // // // // //     skills = undefined
// // // // // // }


// // // // // // let ram = new Person()
// // // // // // let sham = new Person()
// // // // // // console.log(sham)
// // // // // // sham.fullName = "sham rao"
// // // // // // sham.age = 34
// // // // // // sham.skills = ["javscript", "cpp"]
// // // // // // sham.language = "marathi"
// // // // // // console.log(sham)
// // // // // // console.log(ram)



// // // // // let Mayur = {
// // // // //     fullName:"Mayur kadam",
// // // // //     age:24
// // // // // }

// // // // // let person = function(fullName,age){
// // // // //     this.fullName=fullName
// // // // //     this.age=age
// // // // //     this.display=function(){
// // // // //         console.log(this.fullName)
// // // // //     }
// // // // // }

// // // // // person.prototype.display=function(){
// // // // //     console.log(this.fullName)
// // // // // }

// // // // // let vishal=new person("vishal",24)
// // // // // console.log(vishal)
// // // // // vishal.display()


// // // // // console.log(vishal instanceof person)

// // // // // let person1 = function(fullName,age){
// // // // //     this.fullName=fullName
// // // // //     this.age=age
// // // // // }

// // // // // let prafull = new person1("mayur",24)
// // // // // console.log(prafull)

// // // // // if(prafull  instanceof person1 ){
// // // // //     prafull.fullName="prafull g"
// // // // //     prafull.age= 24
// // // // // }


// // // // // //Array

// // // // // let names=["mayur","vishal","prafull","ram","vishal"]

// // // // // console.log(names)
// // // // // console.log(names instanceof Array)
// // // // // console.log(names._proto_===Array.prototype)
// // // // // names.push("sham")

// // // // // Array.prototype.duplicate=function(arr){
// // // // //     return Array.from(new Set(arr))
// // // // // }

// // // // // console.log(names.duplicate(names))
// // // // // console.log(names)

// // // // // let a = "wednesday is good day"
// // // // // let rev=""

// // // // // for(i=0;i<a.length;i++){
// // // // //     rev = a[i]+rev
// // // // // }
// // // // // console.log(rev)
// // // // // revstring=rev.split(' ').reverse().join(' ')
// // // // // console.log(revstring)

// // // //ES6 class

// // // let student=class{

// // //     constructor(firstName,lastName,rollNo,age){

// // //         this.firstName = firstName
// // //         this.lastName = lastName
// // //         this.rollNo = rollNo
// // //         this.age = age
// // //     }
   
// // // }

// // // // student.prototype.greet=function(){
// // // //     console.log("Welcome")
// // // //}
// // // let student1 = new student("mayur","kadam",15,24)
// // // console.log(student1)

// // //  inheritance without constructor

// // class student{
// //     fullName="mayur"
// //     rollNo=15
// //     age=24
// // }
// // class employee extends student{
// //     salary= 20000
// // }
// // class Maneger extends employee{
// //     field= "IT"
// // }

// // let mayur1=new Maneger()
// // console.log(mayur1.salary)
// // console.log(mayur1.fullName)
// // console.log(mayur1.rollNo)
// // console.log(mayur1.age)
// // console.log(mayur1.filed)
// // console.log(mayur1)

// // // Using constructor

// // class student1 {

// //     constructor(fullName,age,rollNo){
// //         this.fullName=fullName
// //         this.age=age
// //         this.rollNo=rollNo
// //     }
// //     display(){
// //         console.log(this.fullName)
// //     }
// // }

// // class employee1 extends student1{
// //     constructor(fullName,age,rollNo,salary){
// //         super(fullName,age,rollNo)
// //         this.salary=salary
// //     }
// //     display(){
// //         console.log(this.salary)
// //         super.display()
// //     }
// // }

// // class Maneger1 extends employee1{
// //     constructor(fullName,age,rollNo,salary,field){
// //         super(fullName,age,rollNo,salary)
// //         this.field=field
// //     }
// //     display(){
// //         console.log(this.field)
// //         super.display()
// // }
// // }

// // let mayur2=new Maneger1("Mayur",24,15,20000,"IT")
// // console.log(mayur2)
// // console.log(mayur2.age)
// // mayur2.display()

// // ES6 classs

// class Bank {

//     constructor(accName, accNo, Bal) {
//         this.fullName = accName
//         this.accNo = accNo
//         this.Bal = Bal
//         this.trans= []
//     }

//     depoist(amount) {
//         this.Bal = this.Bal + amount
//         this.trans.push(amount)
//         return this.Bal
//     }

//     withdrawl(amount) {
//         if (amount < this.Bal){
//             this.Bal = this.Bal - amount
//             this.trans.push(-amount)
//             return this.Bal
//         }
//         else
//             console.log('Insufficent Bal')
//     }
//     createUserName(){
//         this.useName = 
//         this.fullName.split(" ").map(function(el){
//             return el[0] 
//         }).reduce(function(acc,el){
//             return acc + el
//         },"")
//     }
//     transaction(){
//        return this.trans.slice(-5)
        
//     }

// }

// let mayur = new Bank("mayur kadam",123,20000000)
// let transactions = [15000,-4444,6667,-6666,15468,999,1000,8888]
// for(let x = 0 ; x < transactions.length ; x++){
//     if(transactions[x] < 0){
//        mayur.withdrawl(transactions[x])   
//     }
//     else {
//      mayur.depoist(transactions[x])
//     } 
// }
// mayur.createUserName()
// console.log(`The last five transaction of  username ${mayur.useName} : ${mayur.transaction()}`)


// let student ={
//     fullName:"Mayur kadam",
//     age:24,
//     display:function(){
//         console.log(this.fullName)
//     }
// }

// student.display()

// let student1={
//     fullName:"prafull ghate",
//     age:23
// }

// student1.display=function(){
//     console.log(this.fullName)
// }

// student1.display()


//bind


let Mayur = {
    fullName:"Mayur kadam",
    age:24,
    display:function(){
        console.log(this.fullName)
    }
}

let prafull = {
    fullName:"Prafull ghate",
    age:25
}

let display2=function(){
    console.log(this.fullName)
}

let aaa = display2.bind(Mayur)
aaa()
display2.bind(prafull)()



//Call

let person1 = {
    fullName:"Ram",
    age:25
}

let person2 = {
    fullName:"Sham",
    age:26
}

let person3 = {
    fullName:"Kiran",
    age:27
}

let display3 = function(){
    console.log(this.age)
}

display3.call(person1)
display3.call(person2)
display3.call(person3)


//Apply

let mayur={
    info:"mayur kadam",
    mailid:"mayur12@gmail.com"

}

let display4=function(lastName){
    console.log(this.info,lastName)
}

display4.call(mayur,"kadam")
display4.call(mayur,["kadam"])


//////////////

class bank {
    
    constructor(bn){
        this.bankName = bn
    }

    static displayName(){
        console.log(this.bankName)
    }

}

let aa = new bank ("Axis")

bank.displayName.bind(aa)()
bank.displayName.call(aa)
bank.displayName.apply(aa)