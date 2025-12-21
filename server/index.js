const express= require('express')
const mongoose= require('mongoose')
const Product=require('./product.model')
const app=express();


app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello server is running')
})
app.get('/api/products',async (req,res)=>{
    try{
        const products= await Product.find({});
        res.status(200).json(products);

    }catch(err){
        res.status(500).json({message:'internal server error'})
    }
})
app.get('/api/products/:id',async (req,res)=>{
    try{
        const product= await Product.findById(req.params.id);       
        if(!product){
            return res.status(404).json({message:'product not found'})
        }   
        res.status(200).json(product);

    }catch(err){
        res.status(500).json({message:'internal server error'})
    }   
})
app.post('/api/products',async (req,res)=>{
   try{
    const product = await Product.create(req.body) 
    res.status(201).json(product);
   }catch(err){
    res.status(500).json({message:'internal server error'})
}})
app.put('/api/products/:id',async (req,res)=>{
    try{
        const product=await Product.findByIdAndUpdate(req.params.id,req.body);
            if(!product){
                return res.status(404).json({message:'product not found'})
        }
        const updateProduct=await Product.findById(req.params.id);
        res.status(200).json(updateProduct);
    }
    catch(err){
        res.status(500).json({message:'internal server error'})
    }
})
app.delete('/api/products/:id',async (req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({message:'product not found'})
        }
        res.status(200).json({message:'product deleted successfully'});

    }catch(err){
        res.status(500).json({message:'internal server error'})
    }
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