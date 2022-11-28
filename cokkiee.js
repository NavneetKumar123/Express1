const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const { response } = require('express');
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.cookie('course','js').send('our website have a cookie');
    console.log('***************************************')
    console.log('cookies :',req.cookies);

})
app.get('/clear',(req,res)=>{
    res.clearCookie('course','html');
    res.send('cookiee cleared')
    console.log('cokkkieee cleared');
})
app.listen(3000,()=>{
    console.log('ghhgvdshhdshgsdahgfdh')
})

