import { getHomePageRepository, getUsersRepository } from "../repositories/home.repository.js"

export async function getHomePage(req, res){
    const {userId} = res.locals.session

    try {
        const result = await getHomePageRepository(userId)

        res.send(result)
    } catch (err){
        res.status(500).send(err.message)
    }
}

export async function getUsers(req ,res){
    try {
        const result = await getUsersRepository(req.body)
        if(result.rowCount === 0) return res.status(404).send({message: "Esse usuario nao existe"})

        res.send(result.rows[0])
    } catch (err){
        res.status(500).send(err.message)
    }
}