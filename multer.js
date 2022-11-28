const express=require("express")
const multer=require("multer")
const app=express()
// var storage=multer.diskStorage({
//     destination: function (req, file, cb){
//         cb(null,"uploads") },
//         filename: function(req,file,cb){
//             cb(null, file.filename+Date.now());
//         }
    
// })
// const maxSize=1*8000*8000;
// var upload=multer({
//     storage: storage,
//     limits:{fileSize: maxSize },
// }).single("file");

// app.get("/", function(req,res){
//     res.sendFile(__dirname+ '/upload.html');
// })
// app.post("/uploadFile",function (req,res,next){
//     upload(req,res,function(err){
//         if(err){  res.send("File size is too large") }
//     else {   res.send("Sucess, uploaded!")}
//     })
// })
// var storage=multer.diskStorage({
//     destination:function(req,res,cb){
//         cb(null,'uploads')},
//         filename:function(req,res,cb){
//             cb(null,file.filename+Date.now())
//         }
    
// });
// const maxSize=1*8000*8000;
// var upload=multer({
//     storage:storage,
//     limits:{fileSize:maxSize}

// }).single("File");

// app.get("/", function(req,res){
//         res.sendFile(__dirname+ '/upload.html');
//     })
//     app.post("/uploadFile",(req,res,next)=>{
//         upload(req,res,function(err){
//             if(err) {res.send("file six is big")
//         }else{
//             res.send("successfullt")
//         }
//         })

        

//     })
var storage=multer.diskStorage({
    destination :function(req,file,cb){
        cb(null,"uploads")
    },filename:function(req,file,cb){
        cb(null,file.filename+Date.now())

    }
})
const max=1*8000*8000
var upload=multer({
    storage:storage,
    limits:{fileSize:max}
}).single("file")
app.get("/", function(req,res){
            res.sendFile(__dirname+ '/upload.html');
        })
app.post("/uploadFile",(req,res,next)=>{
    upload(req,res,function(err){
        if(err){
            res.send("larze size")
        }else{
            res.send("successfully")
        }
    })
})
app.listen(2000,function(error){
    if(error) throw error
    console.log("server created sucessfully on port 2000")
})