import express from 'express';
import { catfood, selectedProduct, selectedProductlist} from '../controller/productController.js';
import { ProductPrice } from '../controller/productController.js';
const router = express.Router();


router.get('/cat-food', catfood); 
router.get('/price',ProductPrice);
router.get('/cat-food/:id',selectedProduct)
router.get('/selected-food-product/:id',selectedProductlist)
export default router;
