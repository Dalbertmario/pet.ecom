import express from 'express'
import { header } from '../controller/UihearderController.js'
import { uicorosel } from '../controller/Uicontroller.js'

const router = express.Router()

router.get('/cat-header/:item',header)
router.get('/corsol',uicorosel)

export default router