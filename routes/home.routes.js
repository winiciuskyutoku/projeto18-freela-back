import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middelware.js";
import { getHomePage, getUsers } from "../controllers/home.controllers.js";

const homeRouter = Router()

homeRouter.get("/", authValidation, getHomePage)
homeRouter.post("/users", getUsers)

export default homeRouter