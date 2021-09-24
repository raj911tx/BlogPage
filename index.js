const express=require('express')
const path = require('path')
const ejs=require('ejs')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const BlogPost=require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})
const app=new express()
app.set('view engine','ejs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(4000,()=>{
    console.log('App listening on port 4000')
})

app.get('/',async (req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    const blogposts=await BlogPost.find({})
    res.render('index',{
        blogposts:blogposts
    });
    // console.log(blogposts)
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/post',(req,res)=>{
    res.render('post')
})

app.get('/post/new',(req,res)=>{
    res.render('create')
})

app.post('/posts/store',async (req,res)=>{
    // console.log(req.body)
    await BlogPost.create(req.body)
    res.redirect('/')
})