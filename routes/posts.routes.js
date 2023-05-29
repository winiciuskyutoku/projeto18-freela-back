import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middelware.js";
import { createNewPost, likePost } from "../controllers/posts.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { postSchema } from "../schemas/posts.schema.js";

const postRouter = Router()

postRouter.post("/new-post", authValidation, validateSchema(postSchema),createNewPost)
postRouter.post("/post/like/:id", likePost)

export default postRouter