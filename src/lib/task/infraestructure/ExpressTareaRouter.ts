import { Router } from "express";
import { ExpressTaskController } from "./ExpressTaskController";


const controller = new ExpressTaskController();
const taskRouter = Router();


taskRouter.get("/tasks/", controller.getAll)
taskRouter.post("/tasks/",controller.create)
taskRouter.get("/tasks/:id",controller.getTareaByID)
taskRouter.delete("/tasks/:id",controller.deleteTareaBYID)


export default taskRouter;