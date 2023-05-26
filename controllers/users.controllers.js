import { signInRepository, signUpRepository } from "../repositories/users.repository.js";
import {v4 as uuid} from "uuid"

export async function signUp(req, res){
    try {
        await signUpRepository(req.body)
   
        res.status(201).send({message: "Usuario criado com sucesso!"})
    } catch (err){
        res.status(500).send(err.message)
    }
}

export async function signIn(req, res){
    const {userId, username} = res.locals.user

    try {
        const token = uuid()

        await signInRepository({userId, username}, token)

        res.status(200).send({userId, username, token})
    } catch (err){
        res.status(500).send(err.message)
    }
}