import { Router } from "express";
import { ExpressTaskController } from "./ExpressTaskController";


const controller = new ExpressTaskController();
const taskRouter = Router();


taskRouter.get("/tasks/", controller.getAll)
taskRouter.post("/tasks/",controller.create)

export default taskRouter;