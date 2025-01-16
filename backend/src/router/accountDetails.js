import express from 'express'
import User from '../models/userModel.js'

const router = express.Router()

router.get('/details/:id',async(req,res)=>{
    const {id} = req.params
    try{
        const result = await User.findAll({where:{user_id:id}})
        if(!result){
           res.status(401).json({message:`Account id ${id} not found`})
        }
        res.status(200).json(result)
    }catch(err){
        res.status(500).json({message:'Unexpected error'})
    }
})

export default router