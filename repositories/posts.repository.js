import { db } from "../database/database.connection.js"

export async function createNewPostRepository(body, userId){
    const {image, description} = body

    await db.query(`INSERT INTO posts ("userId", image, description) VALUES ($1, $2, $3);`, [userId, image, description])
}