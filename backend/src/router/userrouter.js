import express from 'express'
import verifiytoken from '../middelwares/verifiytoken.js'
import authorizeRole from '../middelwares/rolemiddelware.js'

const router = express.Router()

router.get('/admin',verifiytoken,authorizeRole("admin"),(req,res)=>{
    console.log(req.user)
    res.json({message:'welcom admin',user:{id:req.user.id,role:req.user.role,username:req.user.user_name,email:req.user.user_email}})
})

router.get('/user',verifiytoken,authorizeRole("admin","customer-care","user"),(req,res)=>{
    res.json({message:'welcome user',user:{id:req.user.id,role:req.user.role,username:req.user.user_name,email:req.user.user_email}})
})

router.get('/customer-care',verifiytoken,authorizeRole("admin","customer-care"),(req,res)=>{
    res.json({message:'welcome customercare',user:{id:req.user.id,role:req.user.role,username:req.user.user_name,email:req.user.user_email}})
})

export default router;