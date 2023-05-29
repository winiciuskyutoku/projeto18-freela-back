import { db } from "../database/database.connection.js"

export async function getFollowerPageValidation(req, res, next){
    const {id} = req.params

    try {
        const checkUser = await db.query(`SELECT * FROM users WHERE id = $1;`, [id])
        if(checkUser.rowCount === 0) return res.status(404).send({message: "Esse usuario nao existe"})

        next()
    } catch (err){
        res.status(500).send(err.message)
    }
}

export async function followSomeoneValidation(req, res, next){
    const {userId, followerId} = req.body

    try {
        const checkFollower = await db.query(`SELECT * FROM followers WHERE "userId" = $1 AND "followerId" = $2;`, [userId, followerId])
        if(checkFollower.rowCount !== 0) return res.status(402).send({message: "Voce ja segue essa pessoa"})

        next()
    } catch(err){
        res.status(500).send(err.message)
    }
}