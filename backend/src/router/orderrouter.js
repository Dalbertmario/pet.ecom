import express from 'express'
import { orderCanceling, orderfetching, orderPost } from '../controller/orderController.js'



const router = express.Router()

router.post('/items',orderPost)

router.get('/fetch/:id',orderfetching)

router.delete('/orderDelete/:id',orderCanceling)

export default router