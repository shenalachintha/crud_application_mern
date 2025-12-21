const express= require('express')
const Product=require('../models/product.model')
const routes= express.Router();
const productController=require('../controller/product.controller')

// Get all products
routes.get('/', productController.getProducts);
routes.get('/:id', productController.getProductById);
routes.post('/',productController.createProduct)
routes.put('/:id', productController.updateProduct);
routes.delete('/:id', productController.deleteProduct);




module.exports=routes;