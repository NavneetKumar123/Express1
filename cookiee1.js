const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const { response } = require('express');
app.use(cookieParser());
let users= {
    name:"navneet",
    email:"djhgsjhgfahds@gmail.com"
}
app.get('/set',(req,res)=>{
    res.cookie('userdata:',users);
    res.send('user data added to cokkiieee')
})
app.get('/get',(req,res)=>{
    res.send(req.cookies);
    
})
app.get('/clear',(req,res)=>{
    res.clearCookie('userdata :',users);
    res.send('cookie cleared');
})
app.listen(4000,()=>{
    console.log('hgdhhsfgshhdfghshd')
})
