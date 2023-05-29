import joi from "joi"

export const postSchema = joi.object({
    image: joi.string().uri().trim().required(),
    description: joi.string().max(200).trim().required()
})