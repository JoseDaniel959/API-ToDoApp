import type { Request, Response } from "express";
import { ServiceContainer } from "../Shared/ServiceContainer";

export class ExpressTaskController {

    async getAll(req: Request, res: Response) {
        const tasks = await ServiceContainer.tarea.getAll.handler();
        return res.json(tasks);
    }
    async create(req: Request, res: Response) {
        console.log(req.body)
        await ServiceContainer.tarea.create.handler(
            req.body.id,
            req.body.name,
            req.body.startDate,
            req.body.finalDate,
        );
        return res.status(200).json(req.body)
    }

}