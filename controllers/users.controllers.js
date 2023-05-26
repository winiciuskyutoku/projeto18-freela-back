import { signUpRepository } from "../repositories/users.repository.js";

export async function signUp(req, res){
  

    try {
        await signUpRepository(req.body)
   
        res.status(201).send({message: "Usuario criado com sucesso!"})
    } catch (err){
        res.status(500).send(err.message)
    }
}