import { Tarea } from "./Tarea";
import { TareaID } from "./TareaID";

export interface TareaRepository{
    create(tarea: Tarea): Promise<void>;
    getAll(): Promise<Tarea[]>;
    getOneByID(tareaID: TareaID): Promise<Tarea | null>;
    edit(tarea: Tarea): Promise<void>;
    delete(tareaID: TareaID): Promise<void>;
}   