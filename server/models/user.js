import mongoose from "mongoose";

const User = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String, enum: ["admin", "customer"], default: "customer"}
});

const userSchema =  mongoose.model('User',User);

export default userSchema ;

