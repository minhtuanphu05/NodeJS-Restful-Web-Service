import Joi from "joi";

export const webValidate = Joi.object({
  title: Joi.string().trim().required().messages({
    "string.empty": "Tiêu đề không được bỏ trống",
    "any.required": "Tiêu đề là bắt buộc",
  }),
  content: Joi.string().trim().min(10).required().messages({
    "string.empty": "Nội dung không được bỏ trống",
    "string.min": "Nội dung ít nhất 10 ký tự",
    "any.required": "Nội dung là bắt buộc",
  }),
  author: Joi.string().trim().required().messages({
    "string.empty": "Tên tác giả không được bỏ trống",
    "any.required": "Tên tác giả là bắt buộc",
  }),
  age: Joi.number().min(0).required().messages({
    "number.min": "Tuổi phải là số dương",
    "number.base": "Tuổi phải là một số",
    "any.required": "Tuổi là bắt buộc",
  }),
  dateCreated: Joi.date().messages({
    "date.base": "Ngày tạo phải là định dạng ngày hợp lệ",
  })
});



export const userValidate = Joi.object({
  userName: Joi.string().trim().min(3).max(30).required().messages({
    "string.empty": "Tên người dùng không được bỏ trống",
    "string.min": "Tên người dùng phải có ít nhất 3 ký tự",
    "string.max": "Tên người dùng không được quá 30 ký tự",
    "any.required": "Tên người dùng là bắt buộc",
  }),
  email: Joi.string().trim().email().required().messages({
    "string.empty": "Email không được bỏ trống",
    "string.email": "Email không hợp lệ",
    "any.required": "Email là bắt buộc",
  }),
  password: Joi.string().trim().min(6).required().messages({
    "string.empty": "Mật khẩu không được bỏ trống",
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự",
    "any.required": "Mật khẩu là bắt buộc",
  }),
  role: Joi.string().valid("admin", "user").default("user").messages({
    "any.only": "Vai trò chỉ có thể là 'admin' hoặc 'user'",
  }),
});
