import Joi from "joi";
const LoginSchema = Joi.object({
    email: Joi.string().pattern(new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),
    password: Joi.string().pattern(new RegExp('[0-9a-zA-Z]{6,}'))
})

export default LoginSchema;