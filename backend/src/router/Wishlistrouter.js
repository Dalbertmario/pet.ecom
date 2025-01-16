import express from 'express'
import { deletewish, fetchWishlist, wishListData, wishlisting } from '../controller/Wishlistcontroller.js'

const router = express.Router()


router.post('/wishing',wishlisting)
router.delete('/deleteWish',deletewish)
router.get('/getWish/:userid',fetchWishlist)
router.get('/getwishData/:userid',wishListData)
export default router