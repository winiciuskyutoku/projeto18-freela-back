import { getHomePageRepository } from "../repositories/home.repository.js"

export async function getHomePage(req, res){
    const {userId} = res.locals.session

    try {
        const result = await getHomePageRepository(userId)

        res.send(result)
    } catch (err){
        res.status(500).send(err.message)
    }
}