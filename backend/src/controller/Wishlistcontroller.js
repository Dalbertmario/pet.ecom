import db from "../config/rawdbConnect.js"


export const wishlisting = async (req,res)=>{
    const {proid,userid} = req.body
    console.log(userid , 'wish lising')
    try{
        const resil = await db.query('INSERT INTO wishlist(proid,userid) VALUES($1,$2)',[proid,userid])
        if(resil.length ===0){
            res.status(401).json({message:'Faild to add product to the your wishlist'})
        }
        res.status(200).json({message:'Item successfully instered into your wishlist'})
    }catch(Err){
         res.status(500).json({message:'Unexpected error'})
         console.log(Err.message)
    }
}

export const deletewish = async (req,res)=>{
    const {proid,userid} = req.body
    console.log(userid,proid,'deleteing wish')
    try{
        const result = await db.query(`DELETE FROM wishlist WHERE proid = $1 AND userid = $2`,[parseInt(proid),parseInt(userid)])
        if(result.length === 0) {
            res.status(400).json({message:'Unexpected error'})
        }
        res.status(200).json({message:'Successfully deleted the wish'})
    }catch(err){
        res.status(500).json({message:'Unexpected error'})
    }
}

export const fetchWishlist = async(req,res)=>{
const {userid} = req.params
    try{
       const result  = await db.query(`SELECT * FROM wishlist WHERE userid=$1`,[parseInt(userid)])
       if(result.length === 0){
        res.status(400).json({message:'Unexpected error'})
       }
       res.status(200).json(result.rows)
    }catch(err){
        res.status(500).json({message:'Unexpedted errro'})
    }
}

export const wishListData= async (req,res)=>{
    const {userid }= req.params
    console.log(userid)
    try{
      const result = await db.query(`SELECT p.productimage,p.productid,p.productname,p.brandname FROM wishlist w JOIN products p ON p.productid = w.proid
      WHERE w.userid = $1`,[parseInt(userid)])
      if(result.length === 0 ){
        res.status(400).json({message:'Unexpected error'})
      }
      console.log(result.rows)
      res.status(200).json(result.rows)
    }catch(Err){
       console.log(Err.message)
       res.status(500).json({message:'unexpected error'})
    } 
}