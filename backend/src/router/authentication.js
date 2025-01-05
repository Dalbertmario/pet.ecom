import express from 'express'
import { register,login } from '../controller/authController.js'
import multer from 'multer'

const upload = multer();

const router = express.Router();

//Register
router.post('/register',upload.none(),register)

//Login
router.post('/login',upload.none(),login)

export default router