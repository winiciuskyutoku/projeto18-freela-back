import { Router } from "express";
import userRouter from "./users.routes.js";
import homeRouter from "./home.routes.js";
import postRouter from "./posts.routes.js";
import followersRouter from "./followers.routes.js";

const router = Router()

router.use(userRouter)
router.use(homeRouter)
router.use(postRouter)
router.use(followersRouter)

export default router