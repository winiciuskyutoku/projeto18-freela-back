import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middelware.js";
import { getHomePage } from "../controllers/home.controllers.js";

const homeRouter = Router()

homeRouter.get("/", authValidation, getHomePage)

export default homeRouter