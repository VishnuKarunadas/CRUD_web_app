require("dotenv").config()
const express= require("express")
const session=require("express-session")
const db = require('./config/db')

const app=express()
const PORT= process.env.PORT || 5000;

app.use(express.urlencoded({extended: false}));//form data 
app.use(express.json()); // json  data


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
    
}))

app.use((req,res,next)=>{
     res.locals.session=req.session.message;
     delete  req.session.message;
     next();

})


app.set("view engine","ejs");

app.use("",require("./routes/routes.js"))
app.use(express.static('uploads'))


app.listen(PORT,()=>{
     console.log(`Server Start http://localhost:${PORT}`);
     
})