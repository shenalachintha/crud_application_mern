const Product=require('../models/product.model')

const getProducts=async(req,res)=>{
     try{
        const products= await Product.find({});
        res.status(200).json(products);

    }catch(err){
        res.status(500).json({message:'internal server error'})
    }
}

const getProductById=async(req,res)=>{
     try{
        const product= await Product.findById(req.params.id);       
        if(!product){
            return res.status(404).json({message:'product not found'})
        }   
        res.status(200).json(product);

    }catch(err){
        res.status(500).json({message:'internal server error'})
    }   
}
const createProduct=async(req,res)=>{
     try{
    const product = await Product.create(req.body) 
    res.status(201).json(product);
   }catch(err){
    res.status(500).json({message:'internal server error'})
}
}
const updateProduct=async(req,res)=>{
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
}
const deleteProduct=async(req,res)=>{
      try{
        const product=await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({message:'product not found'})
        }
        res.status(200).json({message:'product deleted successfully'});

    }catch(err){
        res.status(500).json({message:'internal server error'})
    }
}
module.exports={getProducts, getProductById, createProduct, updateProduct, deleteProduct}