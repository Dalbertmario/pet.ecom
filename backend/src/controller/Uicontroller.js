import db from "../config/rawdbConnect.js"

export const uicorosel = async (req,res)=>{
    try{
       const result = await db.query(`SELECT * FROM UICOROSEL`)
       if(result.length ===0){
        res.status(401).json({message:'Unexpected error'})
       }
       res.status(200).json(result.rows)
    }catch(er){
        res.status(500).json({message:'Unexpected error'})
    }
}