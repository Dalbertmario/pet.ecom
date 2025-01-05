function authorizeRole(...allowedrole){
   return (req,res,next)=>{
      if(!allowedrole.includes(req.user.role)){
        res.status(400).json({message:'Acceess denied'})
      }
      next()
   }
}

export default authorizeRole