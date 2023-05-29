import { db } from "../database/database.connection.js"

export async function getHomePageRepository(userId){
    const userPosts = await db.query(`SELECT * FROM posts WHERE "userId" = $1;`, [userId])
    const userData = await db.query(`SELECT * FROM users WHERE id = $1;`, [userId])
    
    return [userData.rows[0], userPosts.rows]
}