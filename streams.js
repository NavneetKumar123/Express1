const fs=require('fs');
const express=require('express')
const app= express();
fs.writeFile('fjdhghsgd.txt',"asdfghjkqwertyuizxcvbnm",(err)=>{
if(err) throw err;
console.log("file created successfully");
})
fs.readFile('fjdhghsgd.txt',(err,data)=>{
   if(data.length==0){
    console.log("there is nothin");
   }else if(err){
    throw err
   }else{
    console.log("data"+data.toString());
   }

   
})
fs.open('fjdhghsgd.txt','w',(err,file)=>{
if(err) throw err;
else console.log("file recived");
})
fs.appendFile('fjdhghsgd.txt',"fhgsdhgsjhdfgsgehfgesygsyer",'utf-8',(err)=>{
    if(err) throw err;
    else console.log("data done");
})

// var data="jhfjhgfjhgrsfgsrhgf"
// var writer=fs.createWriteStream('text.txt')
// writer.write(data,'UTF-8')
// writer.end()
// writer.on('finish',function(){
//     console.log("written done");
// })
// writer.on('error',function(err){
//     console.log('error');
// })
// var reader=fs.createReadStream('text.txt')
// reader.setEncoding('UTF-8')
// reader.on('data',function(chunk){
//     data=chunk
    
// })
// reader.on('end',function(){
//     console.log("bfhjbjhd");
// })
// reader.on('error',function(err){
//     console.log(err);
// })
app.listen(3000,()=>{
    console.log("server is running");
})

