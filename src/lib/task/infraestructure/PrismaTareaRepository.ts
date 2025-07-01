// import type { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../../../../generated/prisma";
import type { Tarea } from "../domain/Tarea";
import type { TareaID } from "../domain/TareaID";
import { type TareaRepository } from "../domain/TareaRepository";

const tareaTypeToPrismaType = (tarea: Tarea) =>{
    return {
        id: tarea.getID().getValue(),
        name: tarea.getName(),
        startDate: tarea.getStarDate().getValue(),
        finalDate: tarea.getFinalDate().getValue()
    }

}

export class PrismaTareaRepository implements TareaRepository {
    private client: PrismaClient;

    
    constructor() {
        this.client = new PrismaClient();
    }
    async create(tarea: Tarea): Promise<void> {
        const newTarea = await this.client.tareas.create({ data : tareaTypeToPrismaType(tarea)})
    }
    async getAll(): Promise<Tarea[]> {
        const allTareas = await this.client.tareas.findMany();
        return allTareas as unknown as Tarea[];
    }
    async getOneByID(tareaID: TareaID): Promise<Tarea | null> {
        const tareaByID = await this.client.tareas.findUnique({where:{id: tareaID.getValue()}})
        return tareaByID as unknown as Tarea;
    }
    async edit(tarea: Tarea): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(tareaID: TareaID): Promise<void> {
        await this.client.tareas.delete({where:{id: tareaID.getValue()}})
    }


}