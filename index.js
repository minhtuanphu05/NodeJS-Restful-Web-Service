import express from 'express'
import mongoose from 'mongoose';
import { login_web, register_web } from './controller/auth';
const app = express()
const port = 3000;
app.use(express())
const connectDb = async ()=>{
    try {
        await mongoose.connect(``)
        console.log("ket noi db thanh cong");
        
    } catch (error) {
        console.log("ket noi db that bai");
        
    }
}
app.post("/web/register",register_web)
app.post("/web/login",login_web)
app.listen(port,async()=>{
    await connectDb()
})