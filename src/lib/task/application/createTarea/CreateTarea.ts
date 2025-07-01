import { FinalDate } from "../../domain/finalDate";
import { StartDate } from "../../domain/StarDate";
import { Tarea } from "../../domain/Tarea";
import { TareaID } from "../../domain/TareaID";
import type { TareaRepository } from "../../domain/TareaRepository";

export class CreateTask{
    constructor(private repository: TareaRepository){}

    async handler(
        id: number,
        name:string,
        startDate: Date,
        finalDate: Date,
    ):Promise<void>{
        const tareaNueva = new Tarea(
            new TareaID(id),
            name= name,
            new StartDate(startDate),
            new FinalDate(finalDate)

        )
    return this.repository.create(tareaNueva)
    }

}