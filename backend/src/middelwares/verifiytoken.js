import jwt from 'jsonwebtoken'

const secretkey = process.env.JWT_SECRET
const verifiytoken = (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1]
    console.log(token)
    console.log(req.headers)
    if(!token){
        res.status(401).json({message:'Token for password authentication not found'})
        }
    
   const decode=jwt.verify(token,secretkey)
   if(!decode){
    res.status(401).json({message:'Error verify token'})
   }
   req.user=decode;
     next()
}

export default verifiytoken;