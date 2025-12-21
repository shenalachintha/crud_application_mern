const express= require('express')
const mongoose= require('mongoose')
const Product=require('./models/product.model')
const app=express();
const productRoute=require('./routes/product.route')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products",productRoute);


app.get('/',(req,res)=>{
    res.send('Hello server is running')
})

mongoose.connect('mongodb+srv://admin:20020209@applicationdb.qi79asq.mongodb.net/Crud_App?appName=ApplicationDb')
.then(()=>{
    console.log('connected to database')
    app.listen(3000,()=>{
    console.log('sever running on port 3000')
})
}).catch((err)=>{
    console.log('error connecting to database',err)

})