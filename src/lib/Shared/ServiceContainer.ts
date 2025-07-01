import { CreateTask } from "../task/application/createTarea/CreateTarea";
import { DeleteTask } from "../task/application/DeleteTask.ts/DeleteTask";
import { GetAllTarea } from "../task/application/GetAllTarea/GetAllTarea";
import { GetTareaByID } from "../task/application/GetTareaByID/GetTareaByID";
import { UpdateTask } from "../task/application/updateTarea/UpdateTask";
import { PrismaTareaRepository } from "../task/infraestructure/PrismaTareaRepository";

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