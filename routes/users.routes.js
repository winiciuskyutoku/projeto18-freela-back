import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { signUpSchema } from "../schemas/users.schema.js";
import { signIn, signUp } from "../controllers/users.controllers.js";
import { validateSignIn, validateSignUp } from "../middlewares/users.middleware.js";

const userRouter = Router()

userRouter.post("/signup", validateSchema(signUpSchema), validateSignUp, signUp)
userRouter.post("/signin", validateSignIn, signIn)

export default userRouter