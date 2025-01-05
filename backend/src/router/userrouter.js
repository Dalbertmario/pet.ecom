import express from 'express'
import verifiytoken from '../middelwares/verifiytoken.js'
import authorizeRole from '../middelwares/rolemiddelware.js'

const router = express.Router()

router.get('/admin',verifiytoken,authorizeRole("admin"),(req,res)=>{
    console.log(req.user)
    res.json({message:'welcom admin',user:{id:req.user.id,role:req.user.role}})
})

router.get('/user',verifiytoken,authorizeRole("admin","customercare","user"),(req,res)=>{
    res.json({message:'welcome user',user:{id:req.user.id,role:req.user.role}})
})

router.get('/customercare',verifiytoken,authorizeRole("admin","customercare"),(req,res)=>{
    res.json({message:'welcome customercare'})
})

export default router;