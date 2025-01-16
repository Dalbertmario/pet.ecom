import db from "../config/rawdbConnect.js"


export const header = async (req,res)=>{
    const {item} = req.params
   
    try{
       const resquest = await db.query(`SELECT * FROM products WHERE typeof=$1`,[item])
       if(!resquest){
        res.status(400).json({message:'Item not found'})
       }
       console.log(resquest)
       res.status(200).json(resquest.rows)
       
    }catch(er){
        res.status(500).json({message:'Unexpected error'})
    }
}
