const express=require('express')
const path = require('path')
const ejs=require('ejs')

const app=new express()
app.set('view engine','ejs')

app.use(express.static('public'))
app.listen(4000,()=>{
    console.log('App listening on port 4000')
})

app.get('/',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('index')
})

app.get('/contact',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact')
})

app.get('/about',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about')
})

app.get('/post',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
})