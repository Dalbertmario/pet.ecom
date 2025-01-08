import cart from "../models/Cart.js"
import Product from "../models/product.js";
import varient from "../models/varient.js";

export const postingCartItems =async (req,res)=>{
const {userid,productid,varientid,quantity} = req.body
   try{
    const newcartItem= await cart.create({
       userid:userid,
       varientid:varientid,
       productid:productid,
       quantity:quantity
    })
    res.status(201).json({
        message: 'Cart item added successfully',
        cartItem: newcartItem,
      });
   }catch(err){
    console.error('Error inserting cart item:', err.message); 
    res.status(500).json({
      message: 'Error posting the cart items into the database',
      error: err.message, 
    });   }
}

export const fetchallcartItmes = async (req,res)=>{
const {userid} = req.params
const user = parseInt(userid)
console.log(user)
    try{
        const cartItem = await cart.findAll({
            where: { userid: userid },
        });

        if(cartItem.length === 0) {
            res.status(404).json({message:`No cart items found for user Id ${userid}`})
        }
        console.log(cartItem)

        res.status(200).json(cartItem)
    }catch(err){
         console.log(err)
         res.status(500).json({message:'Error retiving the cart items'})
    }
}