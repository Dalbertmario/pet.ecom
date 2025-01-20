import db  from '../config/rawdbConnect.js'
export const orderdetails = async (req,res)=>{
const {month} = req.params
let date 
const fulldate = new Date()
if(month === 'weekly'){
    fulldate.getDate() > 7 ? date = `${fulldate.getFullYear()}/${fulldate.getMonth()+1}/${fulldate.getDate() - 7}` : date=`${fulldate.getFullYear()}/${fulldate.getDate()}/${fulldate.getDate()}`
}
if(month === 'monthly'){
    fulldate.getMonth() >= 1 ? date = `${fulldate.getFullYear()}/${fulldate.getMonth()-1}/${fulldate.getDate()}}` : date=`${fulldate.getFullYear()-1}/${date = 12}/${fulldate.getDate()}`
}
if(month === 'annually'){
    date = `${fulldate.getFullYear()-1}/${fulldate.getMonth()+1}/${fulldate.getDate()}`
}
const finalDate = new Date(date).toISOString()
    try{
        const data = await db.query(`SELECT * FROM orders WHERE order_date >= $1 AND order_date <=CURRENT_DATE`,[finalDate])
        const visitorsData = await db.query(`SELECT * FROM visitors`)
        if(data.length ===0){
            res.status(400).json({messsae:'Unexpeted error'})
        }
        const vis = visitorsData.rows
        const datas= data.rows
        const d = {}
        
        if (month === 'weekly') {
            const dateCal = await db.query(
              `SELECT * FROM orders
               WHERE order_date >= $1 AND order_date <= CURRENT_DATE`,
               [finalDate]
            );
            for (let i = 0; i < dateCal.rows.length; i++) {
                const weekStart = dateCal.rows[i].order_date
                 if(!d[weekStart]){
                    d[weekStart] = 0
                 }
                 d[weekStart] = d[weekStart] + dateCal.rows[i].total
            }
    
        }
        if(month === 'monthly'){
            const dateCal = await db.query(`SELECT * FROM orders WHERE order_date >= $1 `,[finalDate]) 
              for(let i =0 ;i < dateCal.rows.length;i++){
            
                const da = dateCal.rows[i].order_date
                console.log(da)
                if(!d[da]){
                    d[da] = 0
                }
                d[da] = d[da] + dateCal.rows[i].total
            }
        }
        if(month === 'annually') {
            const st = await db.query(
                `SELECT DATE_TRUNC('year', order_date) AS year, 
                        SUM(total) AS total_sum
                FROM orders
                WHERE order_date <= CURRENT_DATE
                GROUP BY year
                ORDER BY year`
            );
    
          
            for (let i = 0; i < st.rows.length; i++) {
                console.log(st.rows[i])
               
                if(!d[st.rows[i].year]){
                    d[st.rows[i].year]
                }
                d[st.rows[i].year] = parseInt(st.rows[i].total_sum)
            }
    
        }
        const grapData = Object.entries(d).map(([date,price])=>{
            return {
                date : date,
                price:price
            }
        })


        //totalPrice
        const totalprice = datas.reduce((a,b)=>a+b.total,0)
        //totalorders
        const totalOrders = datas.length
        //Unique countrys
        const citys = []
        for(let i=0;i<vis.length;i++){
            if(!citys.includes(vis[i].country)){
                citys.push(vis[i].country)
            }
        }
       //Data formating
       const count= {}
       for(let i=0 ; i< vis.length;i++){
         const ss = vis[i].country
          if(!count[ss]){
            count[ss] = 0
          }
          count[ss]++
       }
     const arrayFormate = Object.entries(count).map(([contryname,count])=>{
        return {countryName:contryname,count:count}
     })
   
        res.status(200).json({totalprofit:totalprice,totalOrders:totalOrders,views:arrayFormate,graphData:grapData})
    }catch(err){
      res.status(500).json({message:'Unexpected error'})
    }
}

export const Allorder = async (req,res)=>{
    try{
        const result1 = await db.query(`SELECT p.productimage,p.brandname,p.productname,SUM(o.quantity) AS quantity FROM orders o JOIN products p ON o.productid = p.productid GROUP BY productimage,brandname,productname,quantity ORDER BY
        quantity desc`)
        if(result1.rows.length === 0){
            res.status(400).json({message:'Unexpected error'})
        }
        res.status(200).json(result1.rows.slice(0,7))
    }catch(err){
        res.status(500).json({message:'Unexpected error'})
    }
}

export const userRecentorder = async (req,res)=>{
    try{
      const result = await db.query(`SELECT o.orderid,u.user_name,o.order_date,o.total,o.orderid FROM users u JOIN orders o ON o.userid = u.user_id`)
      if(result.rows.length === 0){
        res.status(404).json({message:'Unexpected error'})
      }
      res.status(200).json(result.rows.slice(0,4))
    }catch(Err){
      console.log(Err.message)
      res.status(500).json({message:'unexpected error'})
    }
}

export const ProductShowFromTo = async (req,res)=>{
    const {next,previous}=req.body

    try{
       const result = await db.query(`SELECT 
    p.productimage,
    p.productname,
	v.weight,
    p.productid AS productid,
    v.id AS varientid,
    v.offerprice AS price,
    COALESCE(SUM(o.quantity), 0) AS total_orders
FROM 
    varient v
JOIN 
    products p 
ON 
    v.varient_id = p.productid
LEFT JOIN 
    orders o 
ON 
    v.varient_id = o.varientid
GROUP BY 
    p.productimage, 
    p.productname, 
    p.productid, 
    v.id, 
    v.offerprice,
	v.weight
ORDER BY total_orders desc`)
       if(result.length === 0){
        res.status(404).json({message:'Unexpected error'})
       }
    const length = result.rows.length
       res.status(200).json({len:length,products:result.rows.slice(previous,next)})
    }catch(er){

    }
    
}

export const adminDeleteItem = async (req,res)=>{
    const {id}=req.params

    try{
      const data = await db.query(`DELETE FROM varient WHERE varientid=$1`,[id])
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Variant not found" });
      }
     res.status(200).json({message:'Item deleted Successfully'})
    }catch(err){
       console.log(err.message)
       res.status(500).json({message:'Unexpected error'})
    }
}

