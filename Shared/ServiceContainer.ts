import { CreateTask } from "../application/createTarea/CreateTarea";
import { DeleteTask } from "../application/DeleteTask.ts/DeleteTask";
import { GetAllTarea } from "../application/GetAllTarea/GetAllTarea";
import { GetTareaByID } from "../application/GetTareaByID/GetTareaByID";
import { UpdateTask } from "../application/updateTarea/UpdateTask";
import { PrismaTareaRepository } from "../infraestructure/PrismaTareaRepository";

const tareaRepository = new PrismaTareaRepository();

export const ServiceContainer = {
    tarea:{
        getAll: new GetAllTarea(tareaRepository),
        getOneByID: new GetTareaByID(tareaRepository),
        create: new CreateTask(tareaRepository), 
        edit: new UpdateTask(tareaRepository),
        delete: new DeleteTask(tareaRepository),
    }
}