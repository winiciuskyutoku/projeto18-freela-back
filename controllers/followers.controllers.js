import { getFollowersRepository, getFollowersPageRepository, followSomeoneRepository, getFollowingRepository } from "../repositories/followers.repository.js"

export async function getFollowers(req, res){
    const {id} = req.params

    try {
        const result = await getFollowersRepository(id)

        res.send(result)
    } catch (err){
        res.status(500).send(err.message)
    }
}

export async function getFollowerPage(req ,res){
    const {id} = req.params

    try{
        const result = await getFollowersPageRepository(id)

        res.send(result)
    } catch (err){
        res.status(500).send(err.message)
    }

}

export async function followSomeone(req ,res){
    try {
        await followSomeoneRepository(req.body)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getFollowing(req ,res){
    const {id} = req.params

    try {
        const result = await getFollowingRepository(id)

        res.send(result)
    } catch (err){
        res.status(500).send(err.message)
    }
}