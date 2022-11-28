const express=require('express')
const app = express();
const {check,validationResult} =require('express-validator');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.urlencoded());


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/form.html');
})
app.post('/savedata',[
    check('name').isAlpha().withMessage('name should onlt in alphabet').isLength({min:10,max:20}).withMessage('name should only 10 to 20'),
    check('email').isEmail().withMessage('email should on only ').isLength({min:10,max:20}).withMessage('esdfghjfdxghjgfdghjgf'),
    check('password').isLength({min:10 , max:20}).withMessage('must be 10 to 30'),
    check('number').isLength({min:10,max:20}).withMessage('must be 10 to 20 ')
],(req,res)=>{
    const errors=validationResult(req)
 if(!errors.isEmpty()){
    res.send(errors)
}else{
    response={
        
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            number:req.body.number
    
    
        
    }
    console.log(response);
    let data=JSON.stringify(response)
    console.log(data);
}
})









app.listen(3000,()=>{
 console.log('server is listening');
})
