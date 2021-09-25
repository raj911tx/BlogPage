const mongoose = require('mongoose')
const BlogPost=require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});

// BlogPost.create({
//     title:'Electrical energy efficiency on United States farms',
//     body:'Hitherto almost entirely unregulated (except for zoning ordinances and the effects of property taxes), environmental concerns are now beginning to impose restrictions on farms'           
// },(error,blogpost)=>{
//     console.log(error,blogpost)
// })
// id="614d7e6a0368c73b4b46a26f"

// BlogPost.findById(id,(error,blogpost)=>{
//     console.log(error,blogpost)
// })

// BlogPost.findByIdAndUpdate(id,{title:'Quantum energy efficiency on United States farms'},(error,blogpost)=>{
//     console.log(error,blogpost)
// })