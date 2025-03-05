import { userModel } from "../model/user";
import bcrypt from "bcryptjs";
import Jwt from 'jsonwebtoken'
export const register_web = async (req,res)=>{
    try {
        const body = req.body;
        const {email,password} = body;
        const checkUser = await userModel.findOne({email:email})
        if (checkUser) {
            throw{
                mes:"tk da ton tai",
                code:403
            }
        }
        body.password=await bcrypt.hash(password,11)
        const newUser = await new userModel(body).save()
        res.status(201).send({
            message:"dang ky thanh cong",
            status:true,
            data:newUser
        })
    } catch (error) {
        res.status(error.code??500).send({
            message:error.mes??"dang ky that bai",
            status:false
        })
    }
}
export const login_web = async (req,res)=>{
    try {
        const body = req.body;
        const {email,password} = body;
        const checkUser = await userModel.findOne({email:email})
        if (!checkUser) {
            throw{
                mes:"tk ko ton tai",
                code:404
            }
        }
        const checkPass = await bcrypt.compare(password,checkUser.password)
        if (!checkPass) {
            throw{
                mes:"sai mk",
                code:400
            }
        }
        const token = Jwt.sign({id:checkUser._id},"12345",{expiresIn:"1h"})
            checkUser.password = undefined
        res.status(200).send({
            message:"dang nhap thanh cong",
            status:true,
            data:checkUser,
            token:token
        })
    } catch (error) {
        res.status(error.code??500).send({
            message:error.mes??"dang nhap that bai",
            status:false
        })
    }
}