import express from 'express'
import { fetchallcartItmes, postingCartItems } from '../controller/cartController.js'


const router = express.Router()

router.put('/items',postingCartItems)

router.get('/fetchCartItems/:userid',fetchallcartItmes)
export default router;