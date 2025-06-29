import { Tarea } from "../../domain/Tarea";
import { TareaID } from "../../domain/TareaID";
import type { TareaRepository } from "../../domain/TareaRepository";

export class GetTareaByID{

    constructor(private repository:TareaRepository){ }

    async handler(id: number): Promise<Tarea | null>{
        const tareaToSearch = new TareaID(id);
        return this.repository.getOneByID(tareaToSearch);
    }

}