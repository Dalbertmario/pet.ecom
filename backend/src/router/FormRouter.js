import express from 'express'
import db from '../config/rawdbConnect.js'
const router = express.Router()

router.put('/form',async(req,res)=>{

const {pincode,Address,Petsname,mobile,userid,doorNo}=req.body

    try{
      const result = await db.query(`UPDATE users SET mobile=$1, petname=$2, address=$3, houseno=$4, pincode=$5 WHERE user_id=$6`,[mobile,Petsname,Address,doorNo,pincode,userid])
      if(result.length === 0){
        return res.status(400).json({message:'Could not find your user id'})
      } 
      res.status(200).json({message:'Form submitted successfully'})
    }catch(err){
        console.log(err.message)
        res.status(500).json({message:'Expected error'})
    }
})

export default router;