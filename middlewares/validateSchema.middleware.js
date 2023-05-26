export function validateSchema(schema){
    return (req, res, next) => {
        const validation = schema.validate(req.body, {abortEarly: false})

        if(validation.error){
            const errors = validation.error.details.map(deatil => deatil.message)
            return res.status(409).send(errors)
        }
        next()
    }
}