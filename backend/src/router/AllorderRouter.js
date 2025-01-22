import express from 'express'
import { adminDeleteItem, Allorder, EditForm, formdataFetching, orderdetails, ProductShowFromTo, userRecentorder } from '../controller/AllOrderDetails.js'

const router = express.Router()

router.get('/orderDetails/:month',orderdetails)

router.get('/adminAllorder',Allorder)

router.get('/adminRecentOrder',userRecentorder)

router.post('/allOrderFromto',ProductShowFromTo)

router.delete('/adminDelete/:id',adminDeleteItem)

router.post('/form',formdataFetching)

router.put('/editproduct',EditForm)

export default router