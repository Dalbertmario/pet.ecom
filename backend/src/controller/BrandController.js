import Product from "../models/product.js"


export const brandFetching = async (req,res)=>{
    const {brand} = req.params

    try{
     const result = await Product.findAll({where:{brandname:brand}})
     if(result.length === 0){
        res.status(401).json({message:"Couldn't find brand name"})
     }
     console.log(result)
     res.status(200).json(result)
    }catch(err){
       res.status(500).json({message:err.message})
    }
}