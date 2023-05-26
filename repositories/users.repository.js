import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt"

export async function signUpRepository(body){
    const {name, email, image, description, password} = body

    const hash = bcrypt.hashSync(password, 10)

    return db.query(`INSERT INTO users (name, email, image, description, password) VALUES ($1, $2, $3, $4, $5);`, [name, email, image, description, hash])
}