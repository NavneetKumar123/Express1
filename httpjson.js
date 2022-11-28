 const http=require('http')
 const fs=require('fs');
const { error } = require('console');

// const { response } = require('express')
// const { log } = require('console')
// const server=http.createServer((req,res)=>{
//     fs.readFile('./student-1.json',(err,data)=>{
//         if(err) throw err
//         let student=JSON.parse(data);
//         res.write(JSON.stringify(student))
//         res.end()
//     })
// })
// server.listen(4000,()=>{
//     console.log('jhfsdhfgshfdhgfsdhghsd')
// })

// const prompt=require('prompt-sync')()

// var student=new Object();
// student.name=prompt("Enter name of students :")
// student.age=prompt("Enetr age of student")
// student.gender=prompt("Enter the gender of student :")

// let data= JSON.stringify(student)
// fs.writeFile('student.json',data,(err)=>{
//     if(err) throw error;
//     console.log("data writen succesfully")
// })
// const server=http.createServer(function(req,res){
//    fs.readFile('student.json',(err,data)=>{
//     if(err) throw error;
//     let stud=JSON.parse(data)
//     res.write(JSON.stringify(stud))
//     res.end()

//    });
// });

// server.listen(4000,()=>{
//          console.log('jhfsdhfgshfdhgfsdhghsd')
//      })
const prompt=require('prompt-sync')()
var student1=new Object()
student1.name=prompt("Enter your name:")
student1.email=prompt("Enter your email:")
student1.age=prompt("Enter your age")

let data=JSON.stringify(student1)
fs.writeFile('student1.json',data,(err)=>{
    if(err) throw error;
    console.log('dat writen sucesssfully.........')
})
const server=http.createServer(function(req,res){
   fs.readFile('student1.json',(err,data)=>{
    if(err) throw err;
    let stud=JSON.parse(data);
    res.write(JSON.stringify(stud))
    res.end()
   })
})
server.listen(3000,()=>{
    console.log("server is running..........................")
})

