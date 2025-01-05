import Product from "../models/product.js"
import varient from "../models/varient.js"
import { sequelize } from "../config/dbconnect.js"
export const catfood = async(req,res)=>{
    try{
     const result =await Product.findAll({where:{category:'cat-food'}})
     if(!result){res.status(401).json({message:'Product not found'})}
     res.status(200).json(result)
    }catch(err){
       res.status(500).json(err)
       console.log(err)
    }

}

export const ProductPrice =  async(req,res)=>{
    try{
      const query = `SELECT p.productid,v.varient_id,v.offerprice,v.price,v.weight,v.id FROM products p,varient v WHERE p.productid = v.varient_id`
      const [results] = await sequelize.query(query)
      res.status(200).json(results);
    }catch(err){
      res.status(500).json({message:'Internal server error',err:err.message})
    }
}

export const selectedProduct = async(req,res)=>{
const {id} = req.params
  try{
    const result = await Product.findAll({where:{productid:id}})
    if(result.length === 0) { 
     return res.status(404).json({message:'Product details not found'})}
    return res.status(200).json(result)
  }catch(err){
    console.log(err)
    return res.status(500).json({message:`caught an error ${err.message}`})
  }
}
export const selectedProductlist = async(req,res)=>{
  const {id} = req.params
  try{
    const result = await varient.findAll({where:{varient_id:id}})
    console.log(result)
    if(result.lenght === 0){
     return res.status(404).json({message:'product not found'})
    }
    return res.status(200).json(result)
  }catch(err){
    return  res.status(500).json({message:`${err.message}`})
  }
}