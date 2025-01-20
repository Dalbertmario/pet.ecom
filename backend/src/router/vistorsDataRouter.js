import express from  'express'
import db from '../config/rawdbConnect.js'

const router = express.Router()

router.post('/data',async(req,res)=>{
    const  {ip,city,region,country} = req.body
    try{
        const result = await db.query(`INSERT INTO visitors(ip_address,city,region,country) VALUES($1,$2,$3,$4)`,[ip,city,region,country])
        if(result.length === 0){
            res.status(401).json({message:'Unable to store something'})
        }
        res.status(200).json({message:'Successfully stored'})
    }catch(err){
        console.log(err.message)
        res.status(500).json({message:'Error in setting the data'})
    }
})

export default router