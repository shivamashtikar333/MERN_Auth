 import bcrypt from 'bcrypt'
 import User from "../models/user.js";
 import jwtUtils from '../utils/jwtUtils.js';
 import authMiddleware from '../utils/authMiddleware.js';

 async function login (email,password) {
    try {
       const existingUser = await User.findOne({email});
       if(!existingUser){
        throw new Error ("User not found");
       }
       const isPasswordValid = bcrypt.compare(password,existingUser.password);
       if(!isPasswordValid){
        throw new Error ('Incorrect Password');
       }
       const token = jwtUtils.generateToken(existingUser);
       return token
    } catch (error) {
        console.log('Login Error: ',error.message);
        throw new Error('Invalid Credentials');
    }
 }

 async function refreshToken(oldToken){
   try {
      const decodedToken = authMiddleware.verifyToken(oldToken);
   const user = User.findById(decodedToken._id);
   if(!user){
      throw new error('User not found');
   }
   const newToken = jwtUtils.generateToken(user);
   return newToken;
   } catch (error) {
      throw new Error('invalid Token')
   }
 }

 export default {
   login,
   refreshToken
 };
