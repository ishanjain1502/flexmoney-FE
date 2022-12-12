import Joi from "joi";
const LoginSchema = Joi.object({
    name : Joi.string().alphanum().min(2).max(30).required(),
    password: Joi.string().pattern(new RegExp('[0-9a-zA-Z]{6,}'))
})

export default LoginSchema;