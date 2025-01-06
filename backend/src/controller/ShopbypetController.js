import Product from "../models/product.js"


export const Shopbypets = async (req,res)=>{
    const {petname} = req.params
    console.log(petname)
    try{
     const result = await Product.findAll({where:{productsfor:petname}})
     if(result.length === 0){
        res.status(401).json({message:"Couldn't find brand name"})
     }
     console.log(result)
     res.status(200).json(result)
    }catch(err){
       res.status(500).json({message:err.message})
    }
}