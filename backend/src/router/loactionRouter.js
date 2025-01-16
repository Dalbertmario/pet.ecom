import epxress from 'express'
import NodeGeocoder from 'node-geocoder';
const router = epxress.Router()
const geocoder = NodeGeocoder({ provider: 'openstreetmap' });
router.post('/location',async(req,res)=>{
    const {lat, log} = req.body
    try{
    const location = await geocoder.reverse({lon: log,lat });
    if(!location) res.status(400).json({message:'location data not found'})

    res.status(200).json(location)
    }catch(err){
        console.log(err.message)
    }
})

export default router