import mongoose from "mongoose";

const webSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    age: { type: Number, required: true}, 
    dateCreated: { type: Date, default: Date.now }, // Tự động gán ngày hiện tại nếu không có giá trị
},
  { timestamps: true }
);

export const webModel = mongoose.model("webs", webSchema);
