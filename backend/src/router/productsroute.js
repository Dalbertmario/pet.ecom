import express from 'express';
import { catfood, selectedProduct,ProductPrice,selectedProductlist} from '../controller/productController.js';
import { brandFetching } from '../controller/BrandController.js';
import { Shopbypets } from '../controller/ShopbypetController.js';
const router = express.Router();

router.get('/basic-product/:content',catfood); 
router.get('/price',ProductPrice);
router.get('/cat-food/:id',selectedProduct)
router.get('/selected-food-product/:id',selectedProductlist)
router.get('/brandpack/:brand',brandFetching)
router.get('/pets/:petname',Shopbypets)
export default router;
