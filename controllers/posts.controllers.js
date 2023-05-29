import { createNewPostRepository, likePostRepository } from "../repositories/posts.repository.js"

export async function createNewPost(req, res){
    const {userId}  = res.locals.session

    try {
        await createNewPostRepository(req.body, userId)

        res.status(201).send({message: "Post Criado com Sucesso"})
    } catch (err){
        res.status(500).send(err.message)
    }
}

export async function likePost(req, res){
    const {id} = req.params

    try {
        await likePostRepository(id, req.body)

        res.sendStatus(200)
    } catch (err){
        res.status(500).send(err.message)
    }
}