import db from "../config/rawdbConnect.js"

export const search =async (req,res)=>{
    const  query = req.query.q
    if(!query){
        return res.status(400).json({message:'Query params requeried'})
    }
    const ques = query.trim().replace(/\s+/g, ' & '); 
    try{
     const result =await db.query(`
        SELECT * FROM products WHERE 
        to_tsvector('english',productname) @@ to_tsquery($1)
        OR
        to_tsvector('english',brandname) @@ to_tsquery($1)
        OR
        to_TSVECTOR('english',category) @@ to_tsquery($1)
        LIMIT 10;
    `, [`${ques}:*`]);  

     res.json(result.rows)
    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
}