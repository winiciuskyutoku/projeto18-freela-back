import { db } from "../database/database.connection.js"

export async function createNewPostRepository(body, userId){
    const {image, description} = body

    await db.query(`INSERT INTO posts ("userId", image, description) VALUES ($1, $2, $3);`, [userId, image, description])
}

export async function likePostRepository(id, body){
    const {condition, likedBy, postOwnerId} = body
    const likedById = Number(likedBy)

   /*  if(condition === true){
        await db.query(`UPDATE posts SET likes = likes + 1 WHERE id = $1;`, [id])
    } else {
        await db.query(`UPDATE posts SET likes = likes - 1 WHERE id = $1;`, [id])
    } */

    await db.query(`INSERT INTO liked ("postId", "likedBy", "postOwnerId") VALUES ($1, $2, $3);`, [id, likedById, postOwnerId])

    return await db.query(`UPDATE posts SET likes = likes + 1 WHERE id = $1;`,[id])
}