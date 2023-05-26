import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"

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

export async function validateSignIn(req, res, next){
    const {email, password} = req.body

    try {
        const checkEmail = await db.query(`SELECT * FROM users WHERE email = $1;`, [email])
        if(checkEmail.rowCount === 0) return res.status(404).send({message: "Esse email nao foi cadastrado"})

        const checkHash = bcrypt.compareSync(password, checkEmail.rows[0].password)
        if(!checkHash) return res.status(401).send({message: "Senha incorreta"})

        res.locals.user = {username: checkEmail.rows[0].name, userId: checkEmail.rows[0].id}

        next()
    } catch (err){
        res.status(500).send(err.message)
    }
}