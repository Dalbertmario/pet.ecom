import express from 'express'
import { deleteCartItem, fetchallcartItmes, postingCartItems } from '../controller/cartController.js'


const router = express.Router()

router.put('/items',postingCartItems)

router.get('/fetchCartItems/:userid',fetchallcartItmes)

router.delete('/itemDelete',deleteCartItem)
export default router;
