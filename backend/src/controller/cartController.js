import { REAL } from "sequelize";
import db from "../config/rawdbConnect.js";
import cart from "../models/Cart.js"

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
    try{
        const result = await db.query(`SELECT c.cartid,p.productname,p.productimage,v.price,v.offerprice,c.quantity FROM cart c JOIN varient v ON c.productid = v.id 
            JOIN products p ON p.productid = c.productid WHERE c.userid=$1`,[user])
        if(result.length === 0) {
            res.status(404).json({message:`No cart items found for user Id ${user}`})
        }
     const cartItem = result.rows.map(el=>{
        const totalcost = el.quantity * el.offerprice;
        const price = el.quantity * el.price
        return {
            productname:el.productname,
            productimage:el.productimage,
            price:el.price,
            offerprice:el.offerprice,
            quantity : el.quantity,
            totalprice: totalcost,
            actualprice: price
        }
     })
     const grandtotal = cartItem.reduce((a,b)=>a+b.totalprice,0);
     const acutalPrice = cartItem.reduce((a,b)=>a+b.actualprice,0)
        res.status(200).json({cartItem,grandtotal,acutalPrice})
    }catch(err){
         console.log(err)
         res.status(500).json({message:'Error retiving the cart items'})
    }
}