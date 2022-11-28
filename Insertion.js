const express=require('express');
const app= express();
const bodyParser= require('body-parser');
const MongoClient= require('mongodb').MongoClient
const url="mongodb://localhost:27017/"
app.use(bodyParser.urlencoded({extended:false}))
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + "/mongo.html")
// })
// app.post('/signup',(req,res)=>{
// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     var dbo=db.db('user')
//     dbo.collection('user_details').insertOne(req.body,function(err,result){
//         if(err) throw err;
//         console.log('inserted');
//         db.close()
//         res.sendFile(__dirname + '/signup.html')
//     })
// })
// })
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/serach.html")
})
app.post('/ser',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo=db.db('user')
        dbo.collection('user_details').find(req.body).toArray(function(err,result){
            if(err) throw err
            console.log(result)
            db.close()
            res.send(result)

        })
    })
})











// app.post('/signup',(req,res)=>{
//     MongoClient.connect(url,function(err,db){
//         if(err) throw err;
//         var dbo=db.db('employeee')
//         dbo.collection('employeee-details').insertOne(req.body,function(err,result){
//             if(err) throw err
//            console.log("inserted");
//            db.close();
//            res.sendFile(__dirname + '/signup.html')
          

//         })

//     })
// })
// app.post('/ser',(req,res)=>{
//     MongoClient.connect(url,function(err,db){
//         if(err)  throw err;
//         var dbo=db.db('customers')
//         dbo.collection('customers_details').find(req.body).toArray(function(err,result){
//             if(err) throw err
//             console.log(result);
//             db.close()
//             res.json(result)
//         })
//     })
// })
app.post('/delete',(req,res)=>{
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo=db.db('user')
        dbo.collection('user_details').deleteMany(req.body,function(err,result){
            if(err) throw err;
            console.log(result);
            db.close();
          
        })
    })

})


app.listen(4000,(req,res)=>{
    console.log("server is listening");
})
