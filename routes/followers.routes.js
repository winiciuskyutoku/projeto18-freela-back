import { Router } from "express";
import { followSomeone, getFollowerPage, getFollowers, getFollowing } from "../controllers/followers.controllers.js";
import { followSomeoneValidation, getFollowerPageValidation } from "../middlewares/follows.js";

const followersRouter = Router()

followersRouter.get("/followers/:id", getFollowers)
followersRouter.get("/user/:id", getFollowerPageValidation, getFollowerPage)
followersRouter.post("/follow", followSomeoneValidation ,followSomeone)
followersRouter.get("/following/:id", getFollowing)

export default followersRouter