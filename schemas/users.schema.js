import joi from "joi"

export const signUpSchema = joi.object({
    name: joi.string().trim().required().max(20),
    email: joi.string().email().trim().required(),
    image: joi.string().uri().trim().required(),
    description: joi.string().max(200).trim().allow('', null),
    password: joi.string().min(3).trim().required(),
    confirmPassword: joi.string().min(2).valid(joi.ref('password')).trim().required().messages({
        'any.only': 'As senhas nao coincidem'
    })
})