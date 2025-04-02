import { verify } from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    verifyotp: {type: String, default: ""},
    verifyotpExpireAt: {type: String, default: 0},
    isAccountVerified: {type: Boolean, default: false},
    resetotp: {type: String, default: ""},
    resetotpExpireAt: {type: Number, default: 0},
    
})

export default userModel  = mongoose.models.user ||mongoose.model("user", userSchema)
