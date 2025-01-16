import db from "../config/rawdbConnect.js";

export const orderPost = async (req, res) => {
    const { userid, items } = req.body;
  
    try {
      const posting = `
        INSERT INTO orders (userid, productid, varientid, quantity, total)
        VALUES ${items
          .map(
            (el, i) =>
              `($1, $${2 + i * 4}, $${3 + i * 4}, $${4 + i * 4}, $${5 + i * 4})`
          )
          .join(', ')}`;
       const deleteingcart = `DELETE FROM cart WHERE userid=$1`
      const orders = items.flatMap((el) => [
        el.productid,
        el.varientid,
        el.quantity,
        el.quantity * el.offerprice,
      ]);
  

      const postingOrder = await db.query(posting, [userid, ...orders]);
      const deleteingallcart = await db.query(deleteingcart,[userid])
      if (postingOrder.rowCount === 0) {
        return res.status(400).json({ message: 'Error ordering' });
      }
  
      res.status(200).json({ message: 'Successfully ordered' });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ message: 'Unexpected error' });
    }
  };
  

  export const orderfetching =async(req,res)=>{
    const {id}=req.params 

    try{
      const result = await db.query( `SELECT 
        p.productimage, 
        p.productname, 
        o.total, 
        o.quantity, 
        v.weight ,
        o.orderid
     FROM orders o 
     JOIN varient v ON v.id = o.varientid 
     JOIN products p ON o.productid = p.productid 
     WHERE o.userid = $1`,[id])
      if(result.length === 0){
        res.status(404).json({message:'could not find your order'})
      }
      res.status(200).json(result.rows)
    }catch(err){
      console.log(err.message)
       res.status(500).json({message:'Unexpected error'})
    }
  }


  export const orderCanceling =async (req,res)=>{
    const {id} = req.params

    try{
       const result =  await db.query(`DELETE FROM orders WHERE orderid = $1`,[id])
      if(result.length === 0 ){
        res.status(400).json({message:"The order can't be deleted"})
      }
      res.status(201).json({message:'Item deleted successfully'})
    }catch(err){
        res.status(500).json({message:'Unexpected error'})
        console.log(err.message)
    }
  }
