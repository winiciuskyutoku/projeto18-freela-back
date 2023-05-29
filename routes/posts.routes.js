import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middelware.js";
import { createNewPost } from "../controllers/posts.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { postSchema } from "../schemas/posts.schema.js";

const postRouter = Router()

postRouter.post("/new-post", authValidation, validateSchema(postSchema),createNewPost)

export default postRouter