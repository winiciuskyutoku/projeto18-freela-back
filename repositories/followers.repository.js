import { db } from "../database/database.connection.js";

export async function getFollowersRepository(id){
    const result = await db.query(`SELECT * FROM followers WHERE "userId" = $1;`, [id])

    return result.rows
}

export async function getFollowersPageRepository(id){
    console.log(id)

    const userResult = await db.query(`SELECT users.id, users.name, users.description, users.image FROM users WHERE id = $1;`, [id])
    const postsResult = await db.query(`SELECT * FROM posts WHERE "userId" = $1;`, [id])
    const getLikedPosts = await db.query(`SELECT liked."postId", liked."likedBy" FROM liked WHERE "postOwnerId" = $1;`, [id])

    return [userResult.rows[0], postsResult.rows, getLikedPosts.rows]
}

export async function followSomeoneRepository(body){
    const {userId, followerId} = body
    const getUserData = await db.query(`SELECT users.name, users.image, users.description FROM users WHERE id = $1;`, [followerId])

    return await db.query(`INSERT INTO followers ("userId", "followerId", "followerName", "followerImage", "followerDescription") VALUES ($1, $2, $3, $4, $5);`, [userId, followerId, getUserData.rows[0].name, getUserData.rows[0].image, getUserData.rows[0].description])
}

export async function getFollowingRepository(id){
    const getFollowing = await db.query(`SELECT followers."userId" FROM followers WHERE "followerId" = $1;`, [id])
    
    let array = []
    for(let i = 0; i < getFollowing.rows.length; i++){
        const result = await db.query(`SELECT users.id, users.name, users.image, users.description FROM users WHERE id = $1;`, [getFollowing.rows[i].userId])
        array.push(result.rows[0])
    }

    return array
}
