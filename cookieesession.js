const express = require('express')
const app=express()
const cookieSession=require('cookie-session')


app.use(cookieSession({
name:"navneet",
keys:['key1','key2']
}))
app.get('/',(req,res,next)=>{
if(req.session.views){
    req.session.views++;
    res.send("No fo visitor" + req.session.views)

}else{
    req.session.views=1;
    res.send("No of visotor"+req.session.views)
}
})
app.listen(3000,()=>{
    console.log("ghfghftft");
})