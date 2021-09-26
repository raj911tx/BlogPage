const express=require('express')
// const path = require('path')
const ejs=require('ejs')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
// const BlogPost=require('./models/BlogPost')
const fileUpload=require('express-fileupload')
const newPostController=require('./controllers/newPost')
const homeController=require('./controllers/home')
const getPostController= require('./controllers/getPost')
const storePostController= require('./controllers/storePost')
const validationMiddleWare=require('./middleware/validationMiddleware');
const newUserController=require('./controllers/newUser')
const storeUserController=require('./controllers/storeUser')
const loginController=require('./controllers/login')
const loginUserController=require('./controllers/loginUser')
const expressSession=require('express-session')
const authMiddleware=require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware=require('./middleware/redirectIfAuthenticatedMiddleware')
const logoutController=require('./controllers/logout')
const flash=require('connect-flash')



mongoose.connect('mongodb+srv://raj911tx:freewifi@cluster0.7p6rh.mongodb.net/my_database',{useNewUrlParser:true})
const app=new express()
app.set('view engine','ejs')
global.loggedIn=null


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use('/posts/store',validationMiddleWare)
app.use(expressSession({
    secret:'john wick'
}))
app.use("*",(req,res,next)=>{
    loggedIn=req.session.userId;
    next()
})
app.use(flash());


let port=process.env.PORT
if(port==null || port==""){
    port=4000;
}
app.listen(4000,()=>{
    console.log('App listening...')
})

app.get('/',homeController)

// app.get('/contact',(req,res)=>{
//     res.render('contact')
// })

// app.get('/about',(req,res)=>{
//     res.render('about')
// })


app.get('/post/new',authMiddleware,newPostController)

app.get('/post/:id',getPostController)

app.post('/posts/store',authMiddleware,storePostController)

app.get('/auth/register',redirectIfAuthenticatedMiddleware,newUserController)

app.post('/users/register',redirectIfAuthenticatedMiddleware,storeUserController)

app.get('/auth/login',redirectIfAuthenticatedMiddleware,loginController)

app.post('/users/login',redirectIfAuthenticatedMiddleware,loginUserController)

app.get('/auth/logout',logoutController)

app.use((req,res)=>res.render('notfound'));