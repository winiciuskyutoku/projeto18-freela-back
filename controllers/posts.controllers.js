import { createNewPostRepository } from "../repositories/posts.repository.js"

export async function createNewPost(req, res){
    const {userId}  = res.locals.session

    try {
        await createNewPostRepository(req.body, userId)

        res.status(201).send({message: "Post Criado com Sucesso"})
    } catch (err){
        res.status(500).send(err.message)
    }
}