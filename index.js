const express = require('express')
const handlebars= require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const dotenv = require('dotenv')
const path = require ('path')
const { extname } = require('path')
const app=express()

//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())
dotenv.config()
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',handlebars({extname:'hbs',dafaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts/'}))
app.set('view engine','hbs')
//database connection
mongoose.set('strictQuery',false)
mongoose.connect(process.env.dbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }
)
//routes
app.get('/',(req,res)=>{
    res.send("boobs")
})

app.listen(process.env.PORT,()=>{
    console.log('App running')
})