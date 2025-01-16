import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

export const register = async (req, res) => {

    try {
        const { username, password, role, email } = req.body;
      
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            user_name: username,
            user_password: hashPassword,
            user_email: email,
            role: role,
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error during user registration:', err);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const login = async(req,res)=>{
try{
  const {username,password}=req.body;
  const user = await User.findOne({where:{user_name:username}})
  if(!user){
    return res.status(401).json({message:'Invalid username or password'})
  }
  const isMatch = await bcrypt.compare(password,user.user_password)
  if(!isMatch) res.status(400).json({message:'Invalid credientails'})
  
  const token = JWT.sign({id:user.user_id,role:user.role},process.env.JWT_SECRET,{
    expiresIn:"1h"
  })

  res.status(200).json({token:token,username:user.user_name,email:user.user_email,user:{id:user.user_id,role:user.role}})
  }catch(err){
    res.status(500).json({message:'Something went wrong'})
    console.log(err)
}
}
