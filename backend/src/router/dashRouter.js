import express from 'express'
import UserDash from '../models/userdashboard.js'

function dashRouter() {
    const router =express.Router()

    router.get('/logo',async(req,res)=>{
        try {
            const logo = await UserDash.findAll({ where: { description: "logoDashTop" } });
            if (!logo || logo.length === 0) {
                return res.status(404).json({ message: 'Logo not found' });
            }
       
            res.status(200).send(logo);
        } catch (err) {
            console.error('Error fetching logo:', err.message); // Log the error
            res.status(500).json({ message: 'Error in logo fetching' });
        }
    })
   
    router.get('/dashproduct',async(req,res)=>{
        try{
           const dash = await UserDash.findAll({
            where:{description:"catDashproduct"}
          });
           if(!dash || dash.length === 0) {
            res.status(404).json({message:'Cat products not found'})
           }
           res.status(200).json(dash)
        }catch(err){
             console.log(err.message)
             res.status(500).json({ message: 'Internal server error' });
        }
    })

    router.get('/dogDashprodut',async (req,res)=>{
        try{
         const dogDash = await UserDash.findAll({where:{description:'dogDashproduct'}})
         if(!dogDash || dogDash.length === 0){
            res.status(404).json({message:'Dog product not available'})
         }
         res.status(200).json(dogDash)
        }catch(err){
          console.log(err.message)
          res.status(500).json({message:'Internal server error'})
        }
    })
    router.get('/shopBybreed',async(req,res)=>{
        try{
            const shopBreed = await UserDash.findAll({where:{description:'shopByBreed'}})
            if(!shopBreed || !shopBreed.length===0){
                res.status(404).json({message:'Breed not found'})
            }
            res.status(200).json(shopBreed)
        }catch(err){
             console.log(err.message)
             res.status(500).json({message:'Internal server error'})
        }
    })
    return router;
}

export default dashRouter;
