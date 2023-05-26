import { db } from "../database/database.connection.js"

export async function validateSignUp(req, res, next){
    const {email} = req.body

    try {
        const checkEmail = await db.query(`SELECT * FROM users WHERE email = $1;`, [email])
        if(checkEmail.rowCount !== 0) return res.status(409).send({message: "Esse mail ja esta em uso"})

        next()
    } catch (err){
        res.status(500).send(err.message)
    }
}